/**
 * Migration utility: localStorage data → API backend.
 *
 * Exports all local data as a JSON blob and can import it into
 * the backend via the API. Used during the transition period when
 * a catechist creates an online account for an existing parish.
 *
 * Usage:
 *   import { exportLocalData, importToBackend } from "./migrateToApi";
 *   const blob = exportLocalData();
 *   await importToBackend(blob, auth);
 */

import {
  getClasses,
  getUsers,
  getUserProgress,
  getProgramName,
} from "../data/store";
import { api } from "../api/client";

/**
 * Export all localStorage data for a grade into a portable JSON structure.
 */
export function exportLocalData(grade) {
  const classes = getClasses(grade);
  const programName = getProgramName(grade);

  const classData = classes.map((cls) => {
    const users = getUsers(grade, cls.id);
    const usersWithProgress = users.map((u) => ({
      ...u,
      progress: getUserProgress(grade, cls.id, u.id),
    }));
    return {
      id: cls.id,
      name: cls.name,
      students: usersWithProgress,
    };
  });

  return {
    exportedAt: new Date().toISOString(),
    grade,
    programName,
    classes: classData,
  };
}

/**
 * Import a local data blob into the API backend.
 *
 * Assumes the catechist is already authenticated and the grade exists
 * (or will be created).
 *
 * Returns a summary of what was imported.
 */
export async function importToBackend(data) {
  const summary = {
    classesCreated: 0,
    studentsCreated: 0,
    progressRecorded: 0,
    errors: [],
  };

  // Ensure grade exists
  try {
    await api.createGrade(data.grade, data.programName || null);
  } catch {
    // Grade may already exist — that's fine
  }

  for (const cls of data.classes) {
    try {
      // Create class
      const apiClass = await api.createClass(data.grade, cls.name);
      summary.classesCreated++;

      for (const student of cls.students) {
        try {
          // Create student in class
          const apiStudent = await api.createStudent(
            data.grade,
            apiClass.id,
            student.name,
            student.avatarEmoji || "😊"
          );
          summary.studentsCreated++;

          // Import progress entries
          if (student.progress?.completed) {
            for (const [key, entry] of Object.entries(student.progress.completed)) {
              const [week, activity] = key.split("-");
              if (week && activity && entry.stars) {
                try {
                  await api.recordProgress(
                    apiStudent.id,
                    data.grade,
                    parseInt(week),
                    activity,
                    entry.stars
                  );
                  summary.progressRecorded++;
                } catch (err) {
                  summary.errors.push(`Progress ${key}: ${err.message}`);
                }
              }
            }
          }
        } catch (err) {
          summary.errors.push(`Student ${student.name}: ${err.message}`);
        }
      }
    } catch (err) {
      summary.errors.push(`Class ${cls.name}: ${err.message}`);
    }
  }

  return summary;
}

/**
 * Export ALL grades' data from localStorage.
 */
export function exportAllLocalData() {
  const allData = [];
  for (const grade of [2, 3, 4, 5, 6, 7, 8]) {
    const classes = getClasses(grade);
    if (classes.length > 0 || getProgramName(grade)) {
      allData.push(exportLocalData(grade));
    }
  }
  return {
    exportedAt: new Date().toISOString(),
    grades: allData,
  };
}

/**
 * Import all grades' data into the backend.
 */
export async function importAllToBackend(allData) {
  const summaries = [];
  for (const gradeData of allData.grades) {
    const summary = await importToBackend(gradeData);
    summaries.push({ grade: gradeData.grade, ...summary });
  }
  return summaries;
}
