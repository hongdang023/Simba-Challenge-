import { t } from "../i18n.js";

/**
 * Suggestions section — "Gợi ý website"
 * 4 points + 2 examples + blockquote note.
 */
export function renderSuggestions() {
  const section = document.createElement("section");
  section.id = "suggestions";
  section.className = "section";

  const points = [
    { key: "challenge.point1", icon: "icon-user" },
    { key: "challenge.point2", icon: "icon-heart" },
    { key: "challenge.point3", icon: "icon-trophy" },
    { key: "challenge.point4", icon: "icon-link" },
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header" style="margin-bottom: var(--space-xl);">
        <h2 data-i18n="suggestions.heading">${t("suggestions.heading")}</h2>
      </div>
      
      <p class="text-center text-muted" style="max-width: 650px; margin: 0 auto var(--space-2xl); font-size: var(--font-size-base);" data-i18n="challenge.intro">
        ${t("challenge.intro")}
      </p>

      <div class="challenge__points">
        ${points.map(p => `
          <div class="challenge__point">
            <div class="challenge__point-icon">
              <svg class="icon icon--lg" aria-hidden="true"><use href="/icons.svg#${p.icon}"></use></svg>
            </div>
            <div>
              <p style="margin: 0; font-weight: 600; color: var(--color-midnight-blue);" data-i18n="${p.key}">${t(p.key)}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="challenge__examples">
        <div class="card">
          <h4 data-i18n="challenge.example1Title">${t("challenge.example1Title")}</h4>
          <p style="margin: 0; font-size: var(--font-size-sm);" data-i18n="challenge.example1">${t("challenge.example1")}</p>
        </div>
        <div class="card">
          <h4 data-i18n="challenge.example2Title">${t("challenge.example2Title")}</h4>
          <p style="margin: 0; font-size: var(--font-size-sm);" data-i18n="challenge.example2">${t("challenge.example2")}</p>
        </div>
      </div>

      <div class="blockquote" data-i18n="challenge.note">${t("challenge.note")}</div>
    </div>
  `;

  return section;
}
