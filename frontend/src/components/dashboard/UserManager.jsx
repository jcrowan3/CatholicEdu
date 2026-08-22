import { DISPLAY_FONT as displayFont } from "../../utils/constants";
import { useCallback, useState, useEffect } from "react";
import { getUsers, addUser, updateUser, removeUser } from "../../data/store";
import { useAuth } from "../../context/auth";
import { api } from "../../api/client";
import { parseRosterText } from "../../utils/roster";
import AvatarPicker from "./AvatarPicker";
import CommunicationFields from "./CommunicationFields";

const EMPTY_COMMUNICATION = {
  parentEmail: "",
  pickupContactNotes: "",
  mediaPermissionGranted: false,
  allergyPrivacyFlags: "",
  weeklyDigestPermission: false,
};

function studentFromApi(student) {
  return {
    id: student.id,
    name: student.display_name,
    avatarEmoji: student.avatar_emoji,
    parentEmail: student.parent_email || "",
    pickupContactNotes: student.pickup_contact_notes || "",
    mediaPermissionGranted: Boolean(student.media_permission_granted),
    allergyPrivacyFlags: student.allergy_privacy_flags || "",
    weeklyDigestPermission: Boolean(student.weekly_digest_permission),
    role: "student",
  };
}

function communicationPayload(form) {
  return {
    parent_email: form.parentEmail.trim() || null,
    pickup_contact_notes: form.pickupContactNotes.trim() || null,
    media_permission_granted: form.mediaPermissionGranted,
    allergy_privacy_flags: form.allergyPrivacyFlags.trim() || null,
    weekly_digest_permission: form.weeklyDigestPermission,
  };
}

export default function UserManager({ grade, classId, onRefresh }) {
  const auth = useAuth();
  const isOnline = auth.isAuthenticated && auth.isOnline;

  const [users, setUsers] = useState(() => getUsers(grade, classId));
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAvatar, setNewAvatar] = useState("😊");
  const [newCommunication, setNewCommunication] = useState(EMPTY_COMMUNICATION);
  const [editing, setEditing] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAvatar, setEditAvatar] = useState("");
  const [editCommunication, setEditCommunication] = useState(EMPTY_COMMUNICATION);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [importPreview, setImportPreview] = useState(null);
  const [importError, setImportError] = useState("");
  const [importing, setImporting] = useState(false);
  const [exporting, setExporting] = useState(false);

  const loadUsers = useCallback(async () => {
    if (isOnline && classId) {
      try {
        const data = await api.getStudents(grade, classId);
        setUsers(data.map(studentFromApi));
      } catch {
        setUsers(getUsers(grade, classId));
      }
    } else {
      setUsers(getUsers(grade, classId));
    }
  }, [grade, classId, isOnline]);

  useEffect(() => {
    if (!isOnline || !classId) return undefined;

    let active = true;
    api.getStudents(grade, classId)
      .then((data) => {
        if (active) setUsers(data.map(studentFromApi));
      })
      .catch(() => {
        if (active) setUsers(getUsers(grade, classId));
      });

    return () => {
      active = false;
    };
  }, [grade, classId, isOnline]);

  const handleAdd = async () => {
    if (!newName.trim()) return;
    if (isOnline && classId) {
      try {
        const created = await api.createStudent(
          grade,
          classId,
          newName.trim(),
          newAvatar,
          null,
          communicationPayload(newCommunication)
        );
        setUsers((prev) => [...prev, studentFromApi(created)]);
      } catch {
        // Fallback to localStorage
        const user = addUser(grade, classId, newName.trim(), newAvatar);
        setUsers((prev) => [...prev, user]);
      }
    } else {
      const user = addUser(grade, classId, newName.trim(), newAvatar);
      setUsers((prev) => [...prev, user]);
    }
    setNewName("");
    setNewAvatar("😊");
    setNewCommunication(EMPTY_COMMUNICATION);
    setAdding(false);
    onRefresh?.();
  };

  const handleEdit = async (id) => {
    if (!editName.trim()) return;
    if (isOnline) {
      try {
        await api.updateStudent(id, {
          display_name: editName.trim(),
          avatar_emoji: editAvatar,
          ...communicationPayload(editCommunication),
        });
        setUsers((prev) =>
          prev.map((u) =>
            u.id === id
              ? { ...u, name: editName.trim(), avatarEmoji: editAvatar, ...editCommunication }
              : u
          )
        );
      } catch {
        const updated = updateUser(grade, classId, id, { name: editName.trim(), avatarEmoji: editAvatar });
        setUsers(updated);
      }
    } else {
      const updated = updateUser(grade, classId, id, { name: editName.trim(), avatarEmoji: editAvatar });
      setUsers(updated);
    }
    setEditing(null);
    onRefresh?.();
  };

  const handleDelete = async (id) => {
    if (isOnline) {
      try {
        await api.deleteStudent(id);
        setUsers((prev) => prev.filter((u) => u.id !== id));
      } catch {
        const updated = removeUser(grade, classId, id);
        setUsers(updated);
      }
    } else {
      const updated = removeUser(grade, classId, id);
      setUsers(updated);
    }
    setConfirmDelete(null);
    onRefresh?.();
  };

  const startEdit = (user) => {
    setEditing(user.id);
    setEditName(user.name);
    setEditAvatar(user.avatarEmoji);
    setEditCommunication({
      parentEmail: user.parentEmail || "",
      pickupContactNotes: user.pickupContactNotes || "",
      mediaPermissionGranted: Boolean(user.mediaPermissionGranted),
      allergyPrivacyFlags: user.allergyPrivacyFlags || "",
      weeklyDigestPermission: Boolean(user.weeklyDigestPermission),
    });
  };

  const handleExportCommunication = async () => {
    if (!isOnline || !classId) return;
    try {
      setExporting(true);
      const { csv, filename } = await api.exportFamilyCommunicationCsv(grade, classId);
      const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  };

  const handlePreviewImport = async () => {
    const rows = parseRosterText(importText);
    setImportError("");
    setImportPreview(null);
    if (rows.length === 0) {
      setImportError("Paste at least one student name.");
      return;
    }
    try {
      setImporting(true);
      const preview = await api.previewRosterImport(grade, classId, rows);
      setImportPreview(preview);
    } catch (error) {
      setImportError(error.message || "Could not preview roster.");
    } finally {
      setImporting(false);
    }
  };

  const handleImportRoster = async () => {
    const rows = parseRosterText(importText);
    setImportError("");
    try {
      setImporting(true);
      await api.importRoster(grade, classId, rows);
      setImportText("");
      setImportOpen(false);
      setImportPreview(null);
      await loadUsers();
      onRefresh?.();
    } catch (error) {
      setImportError(error.message || "Could not import roster.");
    } finally {
      setImporting(false);
    }
  };

  return (
    <div style={{ animation: "su .4s ease" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <h2
          style={{
            fontFamily: displayFont,
            fontSize: 22,
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          Students
        </h2>
        {!adding && (
          <div style={{ display: "flex", gap: 8 }}>
            {isOnline && classId && (
              <button
                onClick={handleExportCommunication}
                disabled={exporting || users.length === 0}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  background: "rgba(212,168,67,.16)",
                  color: "#B88418",
                  fontFamily: displayFont,
                  fontSize: 12,
                  border: "1px solid rgba(212,168,67,.32)",
                  cursor: exporting || users.length === 0 ? "default" : "pointer",
                  opacity: exporting || users.length === 0 ? .6 : 1,
                }}
              >
                Export CSV
              </button>
            )}
            {isOnline && classId && (
              <button
                onClick={() => setImportOpen((open) => !open)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  background: "rgba(74,144,217,.16)",
                  color: "#4A90D9",
                  fontFamily: displayFont,
                  fontSize: 12,
                  border: "1px solid rgba(74,144,217,.32)",
                  cursor: "pointer",
                }}
              >
                Import Roster
              </button>
            )}
            <button
              onClick={() => setAdding(true)}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                background: "linear-gradient(135deg, #6DB87B, #4A9B5B)",
                color: "#fff",
                fontFamily: displayFont,
                fontSize: 12,
                border: "none",
                cursor: "pointer",
              }}
            >
              + Add Student
            </button>
          </div>
        )}
      </div>

      {importOpen && (
        <div
          style={{
            background: "rgba(74,144,217,.08)",
            borderRadius: 12,
            padding: 16,
            marginBottom: 14,
            border: "1px solid rgba(74,144,217,.2)",
            animation: "pi .3s ease",
          }}
        >
          <textarea
            value={importText}
            onChange={(e) => {
              setImportText(e.target.value);
              setImportPreview(null);
              setImportError("");
            }}
            placeholder={"Student Name, Family Name\nMaria Santos, Santos\nJose Santos, Santos"}
            rows={5}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid var(--border-strong)",
              background: "var(--surface-input)",
              color: "var(--text-primary)",
              fontSize: 13,
              fontFamily: "inherit",
              outline: "none",
              marginBottom: 10,
              boxSizing: "border-box",
              resize: "vertical",
            }}
          />
          <div style={{ display: "flex", gap: 8, marginBottom: importPreview ? 12 : 0 }}>
            <button
              onClick={handlePreviewImport}
              disabled={importing}
              style={{
                flex: 1,
                padding: "10px 0",
                borderRadius: 8,
                background: "#4A90D9",
                color: "#fff",
                fontFamily: displayFont,
                fontSize: 13,
                border: "none",
                cursor: importing ? "default" : "pointer",
                opacity: importing ? .65 : 1,
              }}
            >
              Preview Matches
            </button>
            <button
              onClick={() => {
                setImportOpen(false);
                setImportText("");
                setImportPreview(null);
                setImportError("");
              }}
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                background: "var(--surface-input)",
                color: "var(--text-faint)",
                fontSize: 12,
                border: "none",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
          {importError && (
            <div style={{ color: "#D94A4A", fontSize: 12, marginTop: 10 }}>
              {importError}
            </div>
          )}
          {importPreview && (
            <div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  color: "var(--text-tertiary)",
                  fontSize: 12,
                  marginBottom: 8,
                  flexWrap: "wrap",
                }}
              >
                <strong>{importPreview.ready_count} ready</strong>
                <strong>{importPreview.warning_count} family matches</strong>
                <strong>{importPreview.duplicate_count} duplicates</strong>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
                {importPreview.rows.map((row) => (
                  <div
                    key={`${row.row_index}-${row.display_name}`}
                    style={{
                      background: "var(--surface-card)",
                      borderRadius: 8,
                      padding: "8px 10px",
                      border: "1px solid var(--border-default)",
                      fontSize: 12,
                      color: "var(--text-tertiary)",
                    }}
                  >
                    <strong style={{ color: "var(--text-primary)" }}>{row.display_name}</strong>
                    {" · "}
                    <span
                      style={{
                        color:
                          row.match_status === "duplicate"
                            ? "#D94A4A"
                            : row.match_status === "warning"
                              ? "#D4A843"
                              : "#6DB87B",
                        fontWeight: 700,
                      }}
                    >
                      {row.match_reason}
                    </span>
                    {row.existing_family_students.length > 0 && (
                      <div style={{ marginTop: 4 }}>
                        Existing family: {row.existing_family_students.join(", ")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={handleImportRoster}
                disabled={importing || (importPreview.ready_count + importPreview.warning_count) === 0}
                style={{
                  width: "100%",
                  padding: "10px 0",
                  borderRadius: 8,
                  background: "#6DB87B",
                  color: "#fff",
                  fontFamily: displayFont,
                  fontSize: 13,
                  border: "none",
                  cursor:
                    importing || (importPreview.ready_count + importPreview.warning_count) === 0
                      ? "default"
                      : "pointer",
                  opacity:
                    importing || (importPreview.ready_count + importPreview.warning_count) === 0
                      ? .65
                      : 1,
                }}
              >
                Import {importPreview.ready_count + importPreview.warning_count} Students
              </button>
            </div>
          )}
        </div>
      )}

      {/* Add student form */}
      {adding && (
        <div
          style={{
            background: "rgba(109,184,123,.08)",
            borderRadius: 12,
            padding: 16,
            marginBottom: 14,
            border: "1px solid rgba(109,184,123,.2)",
            animation: "pi .3s ease",
          }}
        >
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            autoFocus
            placeholder="Student name"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid var(--border-strong)",
              background: "var(--surface-input)",
              color: "var(--text-primary)",
              fontSize: 14,
              fontFamily: "inherit",
              outline: "none",
              marginBottom: 10,
              boxSizing: "border-box",
            }}
          />
          <p
            style={{
              color: "var(--text-faint)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 1,
              marginBottom: 6,
            }}
          >
            CHOOSE AVATAR
          </p>
          <div style={{ marginBottom: 12 }}>
            <AvatarPicker value={newAvatar} onChange={setNewAvatar} />
          </div>
          {isOnline && (
            <CommunicationFields value={newCommunication} onChange={setNewCommunication} />
          )}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={handleAdd}
              style={{
                flex: 1,
                padding: "10px 0",
                borderRadius: 8,
                background: "#6DB87B",
                color: "#fff",
                fontFamily: displayFont,
                fontSize: 13,
                border: "none",
                cursor: "pointer",
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                setAdding(false);
                setNewName("");
              }}
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                background: "var(--surface-input)",
                color: "var(--text-faint)",
                fontSize: 12,
                border: "none",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Student list */}
      {users.length === 0 && !adding && (
        <div
          style={{
            textAlign: "center",
            padding: "30px 0",
            color: "var(--text-faint)",
            fontSize: 13,
          }}
        >
          No students yet. Add your first student above.
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {users.map((user, i) => (
          <div key={user.id}>
            {editing === user.id ? (
              <div
                style={{
                  background: "rgba(74,144,217,.08)",
                  borderRadius: 10,
                  padding: 12,
                  border: "1px solid rgba(74,144,217,.2)",
                  animation: "pi .2s ease",
                }}
              >
                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleEdit(user.id)}
                    autoFocus
                    style={{
                      flex: 1,
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: "1px solid var(--border-strong)",
                      background: "var(--surface-input)",
                      color: "var(--text-primary)",
                      fontSize: 13,
                      fontFamily: "inherit",
                      outline: "none",
                    }}
                  />
                </div>
                <div style={{ marginBottom: 8 }}>
                  <AvatarPicker
                    value={editAvatar}
                    onChange={setEditAvatar}
                    accent="#4A90D9"
                    size={16}
                  />
                </div>
                {isOnline && (
                  <CommunicationFields value={editCommunication} onChange={setEditCommunication} />
                )}
                <div style={{ display: "flex", gap: 6 }}>
                  <button
                    onClick={() => handleEdit(user.id)}
                    style={{
                      flex: 1,
                      padding: "8px 0",
                      borderRadius: 6,
                      background: "#4A90D9",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditing(null)}
                    style={{
                      padding: "8px 12px",
                      borderRadius: 6,
                      background: "var(--surface-input)",
                      color: "var(--text-faint)",
                      fontSize: 12,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : confirmDelete === user.id ? (
              <div
                style={{
                  background: "rgba(217,74,74,.08)",
                  borderRadius: 10,
                  padding: 12,
                  border: "1px solid rgba(217,74,74,.2)",
                  animation: "pi .2s ease",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "var(--text-tertiary)",
                    fontSize: 12,
                    marginBottom: 10,
                  }}
                >
                  Remove <strong>{user.name}</strong>? Their progress will be
                  deleted.
                </p>
                <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                  <button
                    onClick={() => handleDelete(user.id)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 6,
                      background: "#D94A4A",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => setConfirmDelete(null)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 6,
                      background: "var(--surface-input)",
                      color: "var(--text-faint)",
                      fontSize: 12,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "var(--surface-card)",
                  borderRadius: 10,
                  padding: "10px 12px",
                  border: "1px solid var(--border-default)",
                  animation: `pi .3s ease ${i * 0.03}s both`,
                }}
              >
                <div style={{ fontSize: 24 }}>{user.avatarEmoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "var(--text-primary)", fontSize: 14, fontWeight: 700 }}>
                    {user.name}
                  </div>
                  {isOnline && (
                    <div style={{ color: "var(--text-faint)", fontSize: 11, marginTop: 3 }}>
                      {user.parentEmail || "No parent email"}
                      {" · "}
                      Media {user.mediaPermissionGranted ? "yes" : "no"}
                      {" · "}
                      Digest {user.weeklyDigestPermission ? "yes" : "no"}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => startEdit(user)}
                  style={{
                    padding: "5px 10px",
                    borderRadius: 6,
                    background: "var(--surface-input)",
                    color: "var(--text-faint)",
                    fontSize: 11,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => setConfirmDelete(user.id)}
                  style={{
                    padding: "5px 10px",
                    borderRadius: 6,
                    background: "rgba(217,74,74,.1)",
                    color: "#D94A4A",
                    fontSize: 11,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
