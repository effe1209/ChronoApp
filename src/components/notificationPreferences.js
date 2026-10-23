export const DEFAULT_NOTIFICATION_PREFERENCES = Object.freeze({
  maintenance_enabled: true,
  warranty_enabled: true,
  reminder_days_before: 90,
});
export const REMINDER_DAY_OPTIONS = Object.freeze([30, 60, 90, 180, 365]);

export const normalizeNotificationPreferences = (preferences = {}) => {
  const requestedDays = Number(preferences.reminder_days_before);
  return {
    maintenance_enabled: typeof preferences.maintenance_enabled === 'boolean'
      ? preferences.maintenance_enabled
      : DEFAULT_NOTIFICATION_PREFERENCES.maintenance_enabled,
    warranty_enabled: typeof preferences.warranty_enabled === 'boolean'
      ? preferences.warranty_enabled
      : DEFAULT_NOTIFICATION_PREFERENCES.warranty_enabled,
    reminder_days_before: REMINDER_DAY_OPTIONS.includes(requestedDays)
      ? requestedDays
      : DEFAULT_NOTIFICATION_PREFERENCES.reminder_days_before,
  };
};
