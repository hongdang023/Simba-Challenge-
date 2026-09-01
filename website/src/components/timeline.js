import { t, getLang } from "../i18n.js";
import { TIMELINE_DATA } from "../timeline-data.js";

/**
 * Timeline component — Lịch trình cuộc thi (3 cột: Thời gian | Hoạt động chính | Học sinh cần làm) & Lưu ý quan trọng
 */
export function renderTimeline() {
  const section = document.createElement("section");
  section.id = "timeline";
  section.className = "section timeline-section";

  const currentLang = getLang();

  section.innerHTML = `
    <div class="container">
      <div class="section-header" style="margin-bottom: var(--space-xl);">
        <h2 data-i18n="timeline.heading">${t("timeline.heading")}</h2>
      </div>

      <p class="text-center text-muted" style="max-width: 680px; margin: 0 auto var(--space-2xl); font-size: var(--font-size-base);" data-i18n="timeline.subheading">
        ${t("timeline.subheading")}
      </p>

      <!-- 3-Column Table View -->
      <div class="timeline-table-wrapper">
        <table class="timeline-table">
          <thead>
            <tr>
              <th style="width: 22%;" data-i18n="timeline.thTime">${t("timeline.thTime")}</th>
              <th style="width: 28%;" data-i18n="timeline.thActivity">${t("timeline.thActivity")}</th>
              <th style="width: 50%;" data-i18n="timeline.thStudentAction">${t("timeline.thStudentAction")}</th>
            </tr>
          </thead>
          <tbody>
            ${TIMELINE_DATA.map(row => {
              const data = row[currentLang] || row.vi;
              const rowClass = row.isDeadline ? "timeline-row--deadline" : "";
              return `
                <tr class="${rowClass}">
                  <td class="timeline-cell-time">
                    <strong>${data.time}</strong>
                  </td>
                  <td class="timeline-cell-activity">
                    <span class="timeline-activity-text">${data.activity}</span>
                  </td>
                  <td class="timeline-cell-action">
                    <span class="timeline-action-text">${data.action}</span>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>

      <!-- Important Notes Section -->
      <div class="timeline-notes-box">
        <div class="timeline-notes-header">
          <svg class="icon icon--sm" style="stroke: var(--color-sunset-orange); flex-shrink: 0;" aria-hidden="true"><use href="/icons.svg#icon-sparkles"></use></svg>
          <strong data-i18n="timeline.noteTitle">${t("timeline.noteTitle")}</strong>
        </div>
        <ul class="timeline-notes-list">
          <li data-i18n="timeline.note1">${t("timeline.note1")}</li>
          <li data-i18n="timeline.note2">${t("timeline.note2")}</li>
          <li data-i18n="timeline.note3">${t("timeline.note3")}</li>
        </ul>
      </div>
    </div>
  `;

  return section;
}
