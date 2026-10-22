import { supabase } from './supabaseClient';

const BACKUP_FORMAT = 'calibro-collection-backup';
const BACKUP_VERSION = 1;
const WATCH_FIELDS = [
  'name', 'brand', 'year', 'condition_rating', 'money', 'movement', 'color', 'note', 'isFavorite',
  'has_box', 'has_papers', 'accessories', 'has_warranty', 'warranty_start',
  'warranty_end', 'warranty_provider',
];
const MAINTENANCE_FIELDS = [
  'service_date', 'service_type', 'description', 'cost', 'provider', 'next_service_date',
];
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const readImageAsDataUrl = async (imageUrl) => {
  const response = await fetch(imageUrl);
  if (!response.ok) throw new Error(`Impossibile scaricare una foto (${response.status}).`);
  const blob = await response.blob();
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let binary = '';
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return `data:${blob.type || 'application/octet-stream'};base64,${btoa(binary)}`;
};

const imageToBlob = (dataUrl) => {
  const match = /^data:([^;,]+)?;base64,([\s\S]+)$/.exec(dataUrl || '');
  if (!match) throw new Error('Una foto nel backup non è in un formato valido.');
  const binary = atob(match[2]);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return new Blob([bytes], { type: match[1] || 'application/octet-stream' });
};

const imageExtension = (mimeType) => {
  const subtype = String(mimeType || '').split('/')[1]?.split('+')[0]?.toLowerCase();
  return ({ jpeg: 'jpg', 'svg+xml': 'svg', 'x-icon': 'ico' })[subtype] || subtype || 'img';
};

const toPlainObject = (record, keys) => Object.fromEntries(
  keys.map((key) => [key, record[key] ?? null])
);

export const createFullBackup = async (userId) => {
  const { data: watches, error: watchesError } = await supabase
    .from('watches')
    .select('*, Orologi_Caratteristiche(*, caratteristiche(*))')
    .eq('userid', userId);
  if (watchesError) throw watchesError;

  const watchIds = (watches || []).map((watch) => watch.id);
  let maintenance = [];
  if (watchIds.length > 0) {
    const { data, error } = await supabase
      .from('watch_maintenance')
      .select('backup_uid, watch_id, service_date, service_type, description, cost, provider, next_service_date')
      .eq('user_id', userId)
      .in('watch_id', watchIds);
    if (error) throw error;
    maintenance = data || [];
  }

  const backupWatches = await Promise.all((watches || []).map(async (watch) => {
    if (!watch.backup_uid) throw new Error('Manca un identificativo di backup: applica prima la migrazione del database.');
    const featureEntries = watch.Orologi_Caratteristiche || [];
    const features = featureEntries
      .map((entry) => entry?.caratteristiche?.nome_caratteristica)
      .filter(Boolean);
    const imageUrl = watch.image || null;
    return {
      backup_uid: watch.backup_uid,
      fields: toPlainObject(watch, WATCH_FIELDS),
      features,
      image: imageUrl ? {
        dataUrl: await readImageAsDataUrl(imageUrl),
      } : null,
    };
  }));

  const watchBackupUidById = new Map((watches || []).map((watch) => [watch.id, watch.backup_uid]));
  const backupMaintenance = maintenance.map((entry) => {
    const watchBackupUid = watchBackupUidById.get(entry.watch_id);
    if (!watchBackupUid) throw new Error('Una revisione non è collegata a un orologio incluso nel backup.');
    return {
      backup_uid: entry.backup_uid,
      watch_backup_uid: watchBackupUid,
      fields: toPlainObject(entry, MAINTENANCE_FIELDS),
    };
  });

  return {
    format: BACKUP_FORMAT,
    version: BACKUP_VERSION,
    created_at: new Date().toISOString(),
    watches: backupWatches,
    maintenance: backupMaintenance,
  };
};

export const downloadFullBackup = async (userId) => {
  const backup = await createFullBackup(userId);
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `calibro-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
  return { watches: backup.watches.length, maintenance: backup.maintenance.length };
};

export const parseBackupFile = async (file) => {
  let backup;
  try {
    backup = JSON.parse(await file.text());
  } catch {
    throw new Error('Il file selezionato non contiene un JSON valido.');
  }
  if (backup?.format !== BACKUP_FORMAT || backup?.version !== BACKUP_VERSION) {
    throw new Error('Formato o versione del backup non supportati.');
  }
  if (!Array.isArray(backup.watches) || !Array.isArray(backup.maintenance)) {
    throw new Error('Il backup non contiene gli elenchi di orologi e revisioni.');
  }

  const watchUids = new Set();
  backup.watches.forEach((watch) => {
    if (!UUID_PATTERN.test(watch?.backup_uid || '') || watchUids.has(watch.backup_uid)) {
      throw new Error('Il backup contiene un orologio con identificativo mancante o duplicato.');
    }
    watchUids.add(watch.backup_uid);
    if (!watch.fields || typeof watch.fields !== 'object' || Array.isArray(watch.fields)) {
      throw new Error('Il backup contiene una scheda orologio non valida.');
    }
    if (!Array.isArray(watch.features) || watch.features.some((name) => typeof name !== 'string')) {
      throw new Error('Il backup contiene caratteristiche non valide.');
    }
    if (watch.image && (typeof watch.image.dataUrl !== 'string' || !watch.image.dataUrl.startsWith('data:'))) {
      throw new Error('Il backup contiene una foto non valida.');
    }
  });

  const maintenanceUids = new Set();
  backup.maintenance.forEach((entry) => {
    if (!UUID_PATTERN.test(entry?.backup_uid || '') || maintenanceUids.has(entry.backup_uid)) {
      throw new Error('Il backup contiene una revisione con identificativo mancante o duplicato.');
    }
    maintenanceUids.add(entry.backup_uid);
    if (!watchUids.has(entry.watch_backup_uid)) {
      throw new Error('Una revisione fa riferimento a un orologio assente dal backup.');
    }
    if (!entry.fields || typeof entry.fields !== 'object' || Array.isArray(entry.fields)) {
      throw new Error('Il backup contiene una revisione non valida.');
    }
  });
  return backup;
};

export const restoreFullBackup = async (backup, userId) => {
  const { data: catalog, error: catalogError } = await supabase
    .from('caratteristiche')
    .select('id_caratteristica, nome_caratteristica');
  if (catalogError) throw catalogError;
  const featureByName = new Map((catalog || []).map((feature) => [
    String(feature.nome_caratteristica || '').trim().toLocaleLowerCase('it'),
    feature.id_caratteristica,
  ]));
  const missingFeatures = [...new Set(backup.watches.flatMap((watch) => watch.features))]
    .filter((name) => !featureByName.has(name.trim().toLocaleLowerCase('it')));
  if (missingFeatures.length) {
    throw new Error(`Caratteristiche assenti in questa installazione: ${missingFeatures.join(', ')}.`);
  }

  const rowsToUpsert = [];
  for (const watch of backup.watches) {
    let imageUrl = null;
    if (watch.image?.dataUrl) {
      const imageBlob = imageToBlob(watch.image.dataUrl);
      const path = `${userId}/backup-${watch.backup_uid}.${imageExtension(imageBlob.type)}`;
      const { error: uploadError } = await supabase.storage
        .from('fotoWatch')
        .upload(path, imageBlob, { upsert: true, contentType: imageBlob.type || undefined });
      if (uploadError) throw uploadError;
      const { data: publicUrlData } = supabase.storage.from('fotoWatch').getPublicUrl(path);
      imageUrl = publicUrlData.publicUrl;
    }
    rowsToUpsert.push({
      ...toPlainObject(watch.fields, WATCH_FIELDS),
      userid: userId,
      backup_uid: watch.backup_uid,
      image: imageUrl,
    });
  }

  let restoredWatches = [];
  if (rowsToUpsert.length) {
    const { data, error } = await supabase
      .from('watches')
      .upsert(rowsToUpsert, { onConflict: 'userid,backup_uid' })
      .select('id, backup_uid');
    if (error) throw error;
    restoredWatches = data || [];
  }
  const watchIdByBackupUid = new Map(restoredWatches.map((watch) => [watch.backup_uid, watch.id]));

  if (restoredWatches.length) {
    const restoredIds = restoredWatches.map((watch) => watch.id);
    const { data: existingRelations, error: relationsError } = await supabase
      .from('Orologi_Caratteristiche')
      .select('id_watch, id_caratteristica')
      .in('id_watch', restoredIds);
    if (relationsError) throw relationsError;

    const relationKeys = new Set((existingRelations || []).map((entry) => `${entry.id_watch}:${entry.id_caratteristica}`));

    const featureRelations = backup.watches.flatMap((watch) => {
      const watchId = watchIdByBackupUid.get(watch.backup_uid);
      return watch.features.flatMap((name) => {
        const featureId = featureByName.get(name.trim().toLocaleLowerCase('it'));
        const relationKey = `${watchId}:${featureId}`;
        if (relationKeys.has(relationKey)) return [];
        relationKeys.add(relationKey);
        return [{ id_watch: watchId, id_caratteristica: featureId }];
      });
    });
    if (featureRelations.length) {
      const { error } = await supabase.from('Orologi_Caratteristiche').insert(featureRelations);
      if (error) throw error;
    }
  }

  const maintenanceRows = backup.maintenance.map((entry) => {
    const watchId = watchIdByBackupUid.get(entry.watch_backup_uid);
    if (!watchId) throw new Error('Non è stato possibile collegare una revisione al relativo orologio.');
    return {
      ...toPlainObject(entry.fields, MAINTENANCE_FIELDS),
      user_id: userId,
      watch_id: watchId,
      backup_uid: entry.backup_uid,
    };
  });
  if (maintenanceRows.length) {
    const { error } = await supabase
      .from('watch_maintenance')
      .upsert(maintenanceRows, { onConflict: 'user_id,backup_uid' });
    if (error) throw error;
  }

  return { watches: rowsToUpsert.length, maintenance: maintenanceRows.length };
};
