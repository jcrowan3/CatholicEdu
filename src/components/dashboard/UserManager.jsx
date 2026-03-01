import { useState } from "react";
import { getUsers, addUser, updateUser, removeUser } from "../../data/store";

const displayFont = "'Lilita One', cursive";

const AVATARS = [
  "😊", "😄", "🤗", "😎", "🥳",
  "🦁", "🐶", "🐱", "🦋", "🐸",
  "⭐", "🌟", "🌈", "🎨", "⚽",
  "🎵", "📚", "🌻", "🕊️", "💫",
];

export default function UserManager({ grade, classId, onBack, onRefresh }) {
  const [users, setUsers] = useState(() => getUsers(grade, classId));
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAvatar, setNewAvatar] = useState("😊");
  const [editing, setEditing] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAvatar, setEditAvatar] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleAdd = () => {
    if (!newName.trim()) return;
    const user = addUser(grade, classId, newName.trim(), newAvatar);
    setUsers((prev) => [...prev, user]);
    setNewName("");
    setNewAvatar("😊");
    setAdding(false);
    onRefresh?.();
  };

  const handleEdit = (id) => {
    if (!editName.trim()) return;
    const updated = updateUser(grade, classId, id, { name: editName.trim(), avatarEmoji: editAvatar });
    setUsers(updated);
    setEditing(null);
    onRefresh?.();
  };

  const handleDelete = (id) => {
    const updated = removeUser(grade, classId, id);
    setUsers(updated);
    setConfirmDelete(null);
    onRefresh?.();
  };

  const startEdit = (user) => {
    setEditing(user.id);
    setEditName(user.name);
    setEditAvatar(user.avatarEmoji);
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
        )}
      </div>

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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(10, 1fr)",
              gap: 4,
              marginBottom: 12,
            }}
          >
            {AVATARS.map((emoji) => (
              <div
                key={emoji}
                onClick={() => setNewAvatar(emoji)}
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  padding: "4px 0",
                  borderRadius: 6,
                  cursor: "pointer",
                  background:
                    newAvatar === emoji
                      ? "rgba(109,184,123,.2)"
                      : "transparent",
                  border:
                    newAvatar === emoji
                      ? "2px solid #6DB87B"
                      : "2px solid transparent",
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
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
              /* Edit mode */
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
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(10, 1fr)",
                    gap: 3,
                    marginBottom: 8,
                  }}
                >
                  {AVATARS.map((emoji) => (
                    <div
                      key={emoji}
                      onClick={() => setEditAvatar(emoji)}
                      style={{
                        fontSize: 16,
                        textAlign: "center",
                        padding: "2px 0",
                        borderRadius: 4,
                        cursor: "pointer",
                        background:
                          editAvatar === emoji
                            ? "rgba(74,144,217,.2)"
                            : "transparent",
                        border:
                          editAvatar === emoji
                            ? "2px solid #4A90D9"
                            : "2px solid transparent",
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
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
              /* Delete confirmation */
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
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    justifyContent: "center",
                  }}
                >
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
              /* Normal display */
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
                  <div
                    style={{ color: "var(--text-primary)", fontSize: 14, fontWeight: 700 }}
                  >
                    {user.name}
                  </div>
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
