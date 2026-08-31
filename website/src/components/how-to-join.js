import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * How to Join section — 3 simple submission tasks (no unnecessary complex step instructions).
 */
export function renderHowToJoin() {
  const section = document.createElement('section');
  section.id = 'how-to-join';
  section.className = 'section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 data-i18n="howToJoin.heading">${t('howToJoin.heading')}</h2>
      </div>

      <p class="text-center text-muted mb-2xl" style="max-width: 750px; margin: 0 auto var(--space-2xl); font-size: var(--font-size-md);" data-i18n="howToJoin.subheading">
        ${t('howToJoin.subheading')}
      </p>

      <div class="submissions">
        <!-- 1. Website/Product -->
        <div class="card submission-card">
          <div class="submission-card__icon submission-card__icon--simba">📦</div>
          <h4 data-i18n="howToJoin.sub1Title">${t('howToJoin.sub1Title')}</h4>
          <p class="submission-card__where" style="color: var(--color-sunset-orange)" data-i18n="howToJoin.sub1Where">${t('howToJoin.sub1Where')}</p>
          <p class="submission-card__what" data-i18n="howToJoin.sub1What">${t('howToJoin.sub1What')}</p>
          <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--primary btn--small" data-i18n="howToJoin.ctaWebsite">${t('howToJoin.ctaWebsite')}</a>
        </div>

        <!-- 2. 4F Reflection -->
        <div class="card submission-card">
          <div class="submission-card__icon submission-card__icon--simba">💭</div>
          <h4 data-i18n="howToJoin.sub2Title">${t('howToJoin.sub2Title')}</h4>
          <p class="submission-card__where" style="color: var(--color-lion-orange)" data-i18n="howToJoin.sub2Where">${t('howToJoin.sub2Where')}</p>
          <p class="submission-card__what" data-i18n="howToJoin.sub2What">${t('howToJoin.sub2What')}</p>
          <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--secondary btn--small" data-i18n="howToJoin.ctaReflection">${t('howToJoin.ctaReflection')}</a>
        </div>

        <!-- 3. Introduction Video -->
        <div class="card submission-card" style="border: 2px dashed var(--color-sunset-orange); background: #FFFDF8;">
          <div class="submission-card__icon submission-card__icon--zalo" style="background: rgba(219, 103, 24, 0.15); color: var(--color-sunset-orange);">🎬</div>
          <h4 data-i18n="howToJoin.sub3Title">${t('howToJoin.sub3Title')}</h4>
          <p class="submission-card__where" style="color: var(--color-sunset-orange); font-weight: 700;" data-i18n="howToJoin.sub3Where">${t('howToJoin.sub3Where')}</p>
          <p class="submission-card__what" data-i18n="howToJoin.sub3What">${t('howToJoin.sub3What')}</p>
          <a href="${CONFIG.zaloGroupUrl}" target="_blank" rel="noopener" class="btn btn--outline btn--small" data-i18n="howToJoin.videoNote">${t('howToJoin.videoNote')}</a>
        </div>
      </div>
    </div>
  `;

  return section;
}
