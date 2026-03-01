import { useState } from "react";
import {
  getClasses,
  addClass,
  removeClass,
  getActiveClassId,
  setActiveClassId,
} from "../../data/store";

const displayFont = "'Lilita One', cursive";

export default function ClassSelector({ grade, classId, onClassChange }) {
  const [classes, setClasses] = useState(() => getClasses(grade));
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleAdd = () => {
    if (!newName.trim()) return;
    const cls = addClass(grade, newName.trim());
    setClasses(getClasses(grade));
    setActiveClassId(grade, cls.id);
    onClassChange(cls.id);
    setNewName("");
    setAdding(false);
  };

  const handleSwitch = (id) => {
    setActiveClassId(grade, id);
    onClassChange(id);
  };

  const handleDelete = (id) => {
    removeClass(grade, id);
    const updated = getClasses(grade);
    setClasses(updated);
    setConfirmDelete(null);
    if (id === classId && updated.length > 0) {
      setActiveClassId(grade, updated[0].id);
      onClassChange(updated[0].id);
    }
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            color: "var(--text-muted)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          CLASS
        </span>
        {!adding && (
          <button
            onClick={() => setAdding(true)}
            style={{
              background: "var(--surface-input)",
              border: "1px solid var(--border-medium)",
              borderRadius: 6,
              padding: "2px 8px",
              color: "var(--accent-green)",
              fontSize: 10,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            + New
          </button>
        )}
      </div>

      {/* Class tabs */}
      <div
        style={{
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          marginBottom: adding ? 10 : 0,
        }}
      >
        {classes.map((cls) => (
          <div
            key={cls.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <button
              onClick={() => handleSwitch(cls.id)}
              style={{
                padding: "5px 12px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                background:
                  cls.id === classId
                    ? "rgba(212,168,67,.15)"
                    : "var(--surface-card)",
                border:
                  cls.id === classId
                    ? "2px solid var(--accent-gold)"
                    : "1px solid var(--border-default)",
                color:
                  cls.id === classId
                    ? "var(--accent-gold)"
                    : "var(--text-faint)",
              }}
            >
              {cls.name}
            </button>
            {classes.length > 1 && cls.id === classId && (
              <>
                {confirmDelete === cls.id ? (
                  <div style={{ display: "flex", gap: 3 }}>
                    <button
                      onClick={() => handleDelete(cls.id)}
                      style={{
                        padding: "3px 8px",
                        borderRadius: 5,
                        background: "rgba(217,74,74,.15)",
                        color: "var(--accent-red)",
                        fontSize: 10,
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setConfirmDelete(null)}
                      style={{
                        padding: "3px 6px",
                        borderRadius: 5,
                        background: "var(--surface-input)",
                        color: "var(--text-ghost)",
                        fontSize: 10,
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmDelete(cls.id)}
                    style={{
                      padding: "3px 6px",
                      borderRadius: 5,
                      background: "none",
                      color: "var(--text-ghost)",
                      fontSize: 10,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add class form */}
      {adding && (
        <div
          style={{
            display: "flex",
            gap: 6,
            animation: "pi .2s ease",
          }}
        >
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            autoFocus
            placeholder="Class name"
            style={{
              flex: 1,
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid var(--border-strong)",
              background: "var(--surface-input)",
              color: "var(--text-primary)",
              fontSize: 12,
              fontFamily: "inherit",
              outline: "none",
            }}
          />
          <button
            onClick={handleAdd}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              background: "var(--accent-green)",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
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
              padding: "6px 8px",
              borderRadius: 6,
              background: "var(--surface-input)",
              color: "var(--text-ghost)",
              fontSize: 11,
              border: "none",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
