export const OFFLINE_BACKUP_FORMAT = "catechist-toolkit-offline-backup";
export const OFFLINE_BACKUP_SCHEMA_VERSION = 1;

const MAX_BACKUP_BYTES = 5 * 1024 * 1024;
const OFFLINE_KEY = /^catechist_(?:sessions|pin|program|classes|activeclass|users|progress|bookmarks|migrated|local_schema)_/;
const EXCLUDED_KEYS = new Set([
  "catechist_access_token",
  "catechist_refresh_token",
  "catechist_theme_v1",
]);

export function isOfflineDataKey(key) {
  return OFFLINE_KEY.test(key) && !EXCLUDED_KEYS.has(key);
}

function storageKeys(storage) {
  return Array.from({ length: storage.length }, (_, index) => storage.key(index))
    .filter((key) => typeof key === "string");
}

function migrateBackup(input) {
  if (input?.format !== OFFLINE_BACKUP_FORMAT) {
    throw new Error("This file is not a Catechist Toolkit offline backup.");
  }

  if (input.schemaVersion === 0 && input.data && typeof input.data === "object") {
    return {
      format: input.format,
      schemaVersion: 1,
      exportedAt: input.exportedAt,
      entries: Object.entries(input.data).map(([key, value]) => ({ key, value })),
    };
  }

  return input;
}

export function parseOfflineBackup(value) {
  let parsed;
  try {
    parsed = typeof value === "string" ? JSON.parse(value) : value;
  } catch {
    throw new Error("The selected backup is not valid JSON.");
  }

  const backup = migrateBackup(parsed);
  if (backup.schemaVersion !== OFFLINE_BACKUP_SCHEMA_VERSION) {
    throw new Error(`Unsupported backup schema version: ${backup.schemaVersion ?? "missing"}.`);
  }
  if (!Array.isArray(backup.entries)) {
    throw new Error("The backup does not contain a valid entries list.");
  }

  const keys = new Set();
  let totalBytes = 0;
  const entries = backup.entries.map((entry) => {
    if (!entry || typeof entry.key !== "string" || typeof entry.value !== "string") {
      throw new Error("Every backup entry must contain a string key and value.");
    }
    if (!isOfflineDataKey(entry.key)) {
      throw new Error(`Backup contains a disallowed storage key: ${entry.key}.`);
    }
    if (keys.has(entry.key)) {
      throw new Error(`Backup contains a duplicate storage key: ${entry.key}.`);
    }
    keys.add(entry.key);
    totalBytes += new TextEncoder().encode(entry.key + entry.value).length;
    if (totalBytes > MAX_BACKUP_BYTES) {
      throw new Error("Backup exceeds the 5 MB offline-data limit.");
    }
    return { key: entry.key, value: entry.value };
  });

  return {
    format: OFFLINE_BACKUP_FORMAT,
    schemaVersion: OFFLINE_BACKUP_SCHEMA_VERSION,
    exportedAt: typeof backup.exportedAt === "string" ? backup.exportedAt : null,
    entries,
  };
}

export function createOfflineBackup(storage = localStorage, now = () => new Date()) {
  const entries = storageKeys(storage)
    .filter(isOfflineDataKey)
    .sort()
    .map((key) => ({ key, value: storage.getItem(key) }));

  return {
    format: OFFLINE_BACKUP_FORMAT,
    schemaVersion: OFFLINE_BACKUP_SCHEMA_VERSION,
    exportedAt: now().toISOString(),
    entries,
  };
}

export function restoreOfflineBackup(storage, value, { replace = true } = {}) {
  const backup = parseOfflineBackup(value);
  const previous = new Map(
    storageKeys(storage)
      .filter(isOfflineDataKey)
      .map((key) => [key, storage.getItem(key)])
  );

  try {
    if (replace) {
      for (const key of previous.keys()) storage.removeItem(key);
    }
    for (const { key, value: entryValue } of backup.entries) {
      storage.setItem(key, entryValue);
    }
  } catch (error) {
    for (const key of storageKeys(storage).filter(isOfflineDataKey)) storage.removeItem(key);
    for (const [key, entryValue] of previous) storage.setItem(key, entryValue);
    throw new Error(
      `Restore failed; existing offline data was preserved. ${error.message}`,
      { cause: error }
    );
  }

  return { restored: backup.entries.length, schemaVersion: backup.schemaVersion };
}
