import React, { useEffect, useMemo, useState } from 'react';
import { supabase } from './supabaseClient';
import {
  DEFAULT_NOTIFICATION_PREFERENCES,
  NOTIFICATION_PREFERENCES_SAVED_EVENT,
  normalizeNotificationPreferences,
} from './notificationPreferences';

const STORAGE_PREFIX = 'chrone:maintenance-reminders:';
const DAY_MS = 24 * 60 * 60 * 1000;

const parseDate = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))) return null;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(year, month - 1, day, 12);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
    ? date
    : null;
};

const toDateKey = (date) => [
  date.getFullYear(),
  String(date.getMonth() + 1).padStart(2, '0'),
  String(date.getDate()).padStart(2, '0'),
].join('-');

const addYears = (date, years) => {
  const year = date.getFullYear() + years;
  const month = date.getMonth();
  const day = Math.min(date.getDate(), new Date(year, month + 1, 0).getDate());
  return new Date(year, month, day, 12);
};

const formatDate = (dateKey) => {
  const date = parseDate(dateKey);
  return date ? date.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
};

const daysFromToday = (dateKey) => {
  const dueDate = parseDate(dateKey);
  if (!dueDate) return null;
  const today = new Date();
  const todayKey = toDateKey(today);
  const [todayYear, todayMonth, todayDay] = todayKey.split('-').map(Number);
  const todayUtc = Date.UTC(todayYear, todayMonth - 1, todayDay);
  const dueUtc = Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
  return Math.round((dueUtc - todayUtc) / DAY_MS);
};

const getDueDate = (entries) => {
  // Usa il primo intervento recente che definisce una scadenza o una revisione completa.
  const relevantEntry = entries.find((entry) => (
    (entry.next_service_date && parseDate(entry.next_service_date))
    || String(entry.service_type || '').toLocaleLowerCase('it').includes('revisione completa')
  ));
  if (!relevantEntry) return null;
  if (relevantEntry.next_service_date && parseDate(relevantEntry.next_service_date)) {
    return relevantEntry.next_service_date;
  }
  const serviceDate = parseDate(relevantEntry.service_date);
  return serviceDate ? toDateKey(addYears(serviceDate, 5)) : null;
};

const MaintenanceReminderBanner = ({ watches, userId, refreshKey = 0, onOpenWatch }) => {
  const [entries, setEntries] = useState([]);
  const [dismissed, setDismissed] = useState(() => new Set());
  const [preferences, setPreferences] = useState(DEFAULT_NOTIFICATION_PREFERENCES);
  const [isPreferencesLoaded, setIsPreferencesLoaded] = useState(false);
  const storageKey = userId ? `${STORAGE_PREFIX}${userId}` : null;

  useEffect(() => {
    if (!storageKey) {
      setDismissed(new Set());
      return;
    }
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      setDismissed(new Set(Array.isArray(saved) ? saved.filter((item) => typeof item === 'string') : []));
    } catch {
      setDismissed(new Set());
    }
  }, [storageKey]);

  useEffect(() => {
    let isCurrent = true;
    setPreferences(DEFAULT_NOTIFICATION_PREFERENCES);
    setIsPreferencesLoaded(false);
    if (!userId) return () => { isCurrent = false; };

    const handlePreferencesSaved = (event) => {
      if (event.detail?.userId !== userId) return;
      setPreferences(normalizeNotificationPreferences(event.detail.preferences || {}));
      setIsPreferencesLoaded(true);
    };
    window.addEventListener(NOTIFICATION_PREFERENCES_SAVED_EVENT, handlePreferencesSaved);

    supabase
      .from('watch_notification_preferences')
      .select('maintenance_enabled, warranty_enabled, reminder_days_before')
      .eq('user_id', userId)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!isCurrent) return;
        if (!error) setPreferences(normalizeNotificationPreferences(data || {}));
        setIsPreferencesLoaded(true);
      })
      .catch(() => { if (isCurrent) setIsPreferencesLoaded(true); });

    return () => {
      isCurrent = false;
      window.removeEventListener(NOTIFICATION_PREFERENCES_SAVED_EVENT, handlePreferencesSaved);
    };
  }, [userId]);

  useEffect(() => {
    let isCurrent = true;
    const watchIds = [...new Set((watches || []).map((watch) => watch.id).filter((id) => id !== null && id !== undefined))];
    if (!userId || watchIds.length === 0) {
      setEntries([]);
      return () => { isCurrent = false; };
    }

    supabase
      .from('watch_maintenance')
      .select('watch_id, service_date, service_type, next_service_date')
      .eq('user_id', userId)
      .in('watch_id', watchIds)
      .order('service_date', { ascending: false })
      .then(({ data, error }) => {
        if (!isCurrent) return;
        // Se la tabella non è ancora disponibile, la galleria resta utilizzabile senza avvisi.
        setEntries(error ? [] : (data || []));
      })
      .catch(() => { if (isCurrent) setEntries([]); });

    return () => { isCurrent = false; };
  }, [watches, userId, refreshKey]);

  const reminders = useMemo(() => {
    if (!userId) return [];
    const recordsByWatch = new Map();
    entries.forEach((entry) => {
      const key = String(entry.watch_id);
      if (!recordsByWatch.has(key)) recordsByWatch.set(key, []);
      recordsByWatch.get(key).push(entry);
    });

    return (watches || []).flatMap((watch) => {
      const watchReminders = [];
      const maintenanceDueDate = preferences.maintenance_enabled
        ? getDueDate(recordsByWatch.get(String(watch.id)) || [])
        : null;
      const dueDates = [
        ['maintenance', maintenanceDueDate],
        ['warranty', preferences.warranty_enabled && watch.has_warranty ? watch.warranty_end : null],
      ];

      dueDates.forEach(([type, dueDate]) => {
        const daysRemaining = dueDate ? daysFromToday(dueDate) : null;
        if (!dueDate || daysRemaining === null || daysRemaining > preferences.reminder_days_before) return;
        const dismissalId = `${type}:${watch.id}:${dueDate}`;
        const legacyDismissalId = `${watch.id}:${dueDate}`;
        if (dismissed.has(dismissalId) || (type === 'maintenance' && dismissed.has(legacyDismissalId))) return;
        watchReminders.push({ watch, type, dueDate, daysRemaining, dismissalId });
      });

      return watchReminders;
    }).sort((a, b) => a.daysRemaining - b.daysRemaining);
  }, [watches, entries, dismissed, userId, preferences]);

  const dismissReminder = (reminder) => {
    const nextDismissed = new Set(dismissed);
    nextDismissed.add(reminder.dismissalId);
    setDismissed(nextDismissed);
    if (!storageKey) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify([...nextDismissed]));
    } catch {
      // L'avviso si chiude comunque per la sessione corrente se lo storage non è disponibile.
    }
  };

  if (!userId || !isPreferencesLoaded || reminders.length === 0) return null;

  return (
    <section className="maintenance-reminders" aria-label="Avvisi di garanzia e revisione" aria-live="polite">
      <div className="maintenance-reminders__heading">
        <span className="maintenance-reminders__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 7v5l3 2M9 2.8h6M9 21.2h6" />
          </svg>
        </span>
        <div>
          <h3>Promemoria della collezione</h3>
          <p>{`${reminders.length} ${reminders.length === 1 ? 'scadenza richiede' : 'scadenze richiedono'} attenzione`}</p>
        </div>
      </div>
      <ul className="maintenance-reminders__list">
        {reminders.map((reminder) => {
          const label = reminder.type === 'warranty' ? 'Garanzia' : 'Revisione';
          const dueLabel = reminder.daysRemaining < 0
            ? `${label} scaduta il ${formatDate(reminder.dueDate)}`
            : reminder.daysRemaining === 0
              ? `${label} in scadenza oggi · ${formatDate(reminder.dueDate)}`
              : `${label} in scadenza tra ${reminder.daysRemaining} ${reminder.daysRemaining === 1 ? 'giorno' : 'giorni'} · ${formatDate(reminder.dueDate)}`;
          return (
            <li className="maintenance-reminders__item" key={reminder.dismissalId}>
              <div className="maintenance-reminders__copy">
                <strong>{reminder.watch.name || reminder.watch.brand || 'Orologio'}</strong>
                <span>{dueLabel}</span>
              </div>
              <div className="maintenance-reminders__actions">
                <button type="button" className="maintenance-reminders__open" onClick={() => onOpenWatch(reminder.watch)}>
                  Apri scheda
                </button>
                <button
                  type="button"
                  className="maintenance-reminders__dismiss"
                  onClick={() => dismissReminder(reminder)}
                  aria-label={`Nascondi avviso ${label.toLocaleLowerCase('it')} per ${reminder.watch.name || 'questo orologio'}`}
                >
                  Nascondi avviso
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MaintenanceReminderBanner;
