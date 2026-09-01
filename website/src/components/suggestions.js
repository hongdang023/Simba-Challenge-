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

  const videoSteps = [
    { titleKey: 'videoSuggestions.step1Title', quoteKey: 'videoSuggestions.step1Quote' },
    { titleKey: 'videoSuggestions.step2Title', quoteKey: 'videoSuggestions.step2Quote' },
    { titleKey: 'videoSuggestions.step3Title', quoteKey: 'videoSuggestions.step3Quote' },
    { titleKey: 'videoSuggestions.step4Title', quoteKey: 'videoSuggestions.step4Quote' },
    { titleKey: 'videoSuggestions.step5Title', quoteKey: 'videoSuggestions.step5Quote' },
    { titleKey: 'videoSuggestions.step6Title', quoteKey: 'videoSuggestions.step6Quote' },
    { titleKey: 'videoSuggestions.step7Title', quoteKey: 'videoSuggestions.step7Quote' },
    { titleKey: 'videoSuggestions.step8Title', quoteKey: 'videoSuggestions.step8Quote' },
  ];

  section.innerHTML = `
    <div class="container">
      <!-- 1. GỢI Ý WEBSITE -->
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

      <!-- 2. GỢI Ý CHO VIDEO -->
      <div style="margin-top: var(--space-3xl); padding-top: var(--space-2xl); border-top: 1.5px dashed var(--color-border);">
        <div class="section-header" style="margin-bottom: var(--space-xl);">
          <h2 data-i18n="videoSuggestions.heading">${t("videoSuggestions.heading")}</h2>
        </div>
        
        <p class="text-center text-muted" style="max-width: 680px; margin: 0 auto var(--space-2xl); font-size: var(--font-size-base);" data-i18n="videoSuggestions.subheading">
          ${t("videoSuggestions.subheading")}
        </p>

        <div class="video-steps-grid">
          ${videoSteps.map(s => `
            <div class="video-step-card">
              <h4 class="video-step-card__title" data-i18n="${s.titleKey}">${t(s.titleKey)}</h4>
              <p class="video-step-card__quote" data-i18n="${s.quoteKey}">${t(s.quoteKey)}</p>
            </div>
          `).join("")}
        </div>

        <div class="blockquote" data-i18n="videoSuggestions.note">${t("videoSuggestions.note")}</div>
      </div>
    </div>
  `;

  return section;
}
