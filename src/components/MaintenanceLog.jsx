import React, { useCallback, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const localToday = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
};

const emptyForm = {
  service_date: localToday(),
  service_type: 'Revisione completa',
  cost: '',
  provider: '',
  next_service_date: '',
  description: '',
};

const formatDate = (date) => {
  if (!date) return 'Non indicata';
  return new Date(`${date}T12:00:00`).toLocaleDateString('it-IT', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
};

const MaintenanceLog = ({ watchId, userId }) => {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const loadEntries = useCallback(async () => {
    const { data, error: fetchError } = await supabase
      .from('watch_maintenance')
      .select('id, service_date, service_type, description, cost, provider, next_service_date')
      .eq('watch_id', watchId)
      .eq('user_id', userId)
      .order('service_date', { ascending: false });
    if (fetchError) throw fetchError;
    setEntries(data || []);
  }, [watchId, userId]);

  useEffect(() => {
    let isCurrent = true;
    setIsLoading(true);
    setError('');
    supabase
      .from('watch_maintenance')
      .select('id, service_date, service_type, description, cost, provider, next_service_date')
      .eq('watch_id', watchId)
      .eq('user_id', userId)
      .order('service_date', { ascending: false })
      .then(({ data, error: fetchError }) => {
        if (!isCurrent) return;
        if (fetchError) setError(fetchError.message);
        else setEntries(data || []);
      })
      .catch((fetchError) => { if (isCurrent) setError(fetchError.message); })
      .finally(() => { if (isCurrent) setIsLoading(false); });
    return () => { isCurrent = false; };
  }, [watchId, userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSaving(true);
    setError('');
    try {
      const { error: insertError } = await supabase.from('watch_maintenance').insert({
        ...form,
        cost: form.cost === '' ? 0 : Number(form.cost),
        next_service_date: form.next_service_date || null,
        description: form.description.trim() || null,
        provider: form.provider.trim() || null,
        watch_id: watchId,
        user_id: userId,
      });
      if (insertError) throw insertError;
      setForm({ ...emptyForm, service_date: localToday() });
      setIsFormVisible(false);
      await loadEntries();
    } catch (submitError) {
      setError(`Non è stato possibile salvare la revisione: ${submitError.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (entryId) => {
    if (!window.confirm('Eliminare questa voce dal registro delle revisioni?')) return;
    setError('');
    const { error: deleteError } = await supabase
      .from('watch_maintenance')
      .delete()
      .eq('id', entryId)
      .eq('watch_id', watchId)
      .eq('user_id', userId);
    if (deleteError) {
      setError(`Non è stato possibile eliminare la voce: ${deleteError.message}`);
      return;
    }
    try {
      await loadEntries();
    } catch (loadError) {
      setError(loadError.message);
    }
  };

  return (
    <section className="maintenance-log" aria-labelledby="maintenance-log-title">
      <div className="maintenance-log__heading">
        <div>
          <span className="watch-detail-eyebrow">CURA DELL’OROLOGIO</span>
          <h3 id="maintenance-log-title">Registro revisioni</h3>
          <p>Interventi, costi e prossime scadenze.</p>
        </div>
        <button
          type="button"
          className="collection-export-button maintenance-log__add"
          onClick={() => setIsFormVisible((visible) => !visible)}
          aria-expanded={isFormVisible}
        >
          {isFormVisible ? 'Chiudi' : 'Aggiungi revisione'}
        </button>
      </div>

      {error && <p className="maintenance-log__error" role="alert">{error}</p>}

      {isFormVisible && (
        <form className="maintenance-log__form" onSubmit={handleSubmit}>
          <label>
            Data intervento
            <input type="date" value={form.service_date} required onChange={(event) => setForm({ ...form, service_date: event.target.value })} />
          </label>
          <label>
            Tipo intervento
            <select value={form.service_type} onChange={(event) => setForm({ ...form, service_type: event.target.value })}>
              <option>Revisione completa</option>
              <option>Manutenzione ordinaria</option>
              <option>Riparazione</option>
              <option>Altro</option>
            </select>
          </label>
          <label>
            Costo (€)
            <input type="number" min="0" step="0.01" value={form.cost} placeholder="0" onChange={(event) => setForm({ ...form, cost: event.target.value })} />
          </label>
          <label>
            Orologiaio o centro assistenza
            <input type="text" maxLength="120" value={form.provider} onChange={(event) => setForm({ ...form, provider: event.target.value })} />
          </label>
          <label>
            Prossima revisione
            <input type="date" value={form.next_service_date} onChange={(event) => setForm({ ...form, next_service_date: event.target.value })} />
          </label>
          <label className="maintenance-log__form-wide">
            Lavori eseguiti e note
            <textarea rows="3" maxLength="2000" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} />
          </label>
          <div className="maintenance-log__form-actions">
            <button type="submit" className="funzioniButton" disabled={isSaving}>
              {isSaving ? 'Salvataggio…' : 'Salva revisione'}
            </button>
          </div>
        </form>
      )}

      {isLoading ? (
        <p className="maintenance-log__empty">Caricamento registro…</p>
      ) : entries.length === 0 ? (
        <p className="maintenance-log__empty">Nessuna revisione registrata.</p>
      ) : (
        <ol className="maintenance-log__entries">
          {entries.map((entry) => (
            <li key={entry.id} className="maintenance-log__entry">
              <div className="maintenance-log__entry-main">
                <div>
                  <strong>{entry.service_type}</strong>
                  <time dateTime={entry.service_date}>{formatDate(entry.service_date)}</time>
                </div>
                <button type="button" onClick={() => handleDelete(entry.id)} aria-label={`Elimina revisione del ${formatDate(entry.service_date)}`}>
                  Elimina
                </button>
              </div>
              {(entry.provider || Number(entry.cost) > 0) && (
                <p className="maintenance-log__entry-meta">
                  {entry.provider && <span>{entry.provider}</span>}
                  {Number(entry.cost) > 0 && <span>{Number(entry.cost).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</span>}
                </p>
              )}
              {entry.description && <p className="maintenance-log__description">{entry.description}</p>}
              {entry.next_service_date && <p className="maintenance-log__next">Prossima revisione: {formatDate(entry.next_service_date)}</p>}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
};

export default MaintenanceLog;
