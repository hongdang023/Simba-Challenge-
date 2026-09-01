import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * Challenge section — "Website Cá Nhân" badge, "Em sẽ tạo sản phẩm gì?" heading,
 * and the 3 submission cards (Website, Reflection, Video).
 */
export function renderChallenge() {
  const section = document.createElement('section');
  section.id = 'challenge';
  section.className = 'section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div style="margin-bottom: var(--space-xs);">
          <span class="badge badge--brand" data-i18n="challenge.badge">${t('challenge.badge')}</span>
        </div>
        <h2 data-i18n="challenge.heading">${t('challenge.heading')}</h2>
      </div>
      
      <p class="text-center text-muted" style="max-width: 680px; margin: 0 auto var(--space-2xl); font-size: var(--font-size-base);" data-i18n="howToJoin.subheading">
        ${t('howToJoin.subheading')}
      </p>

      <div class="submissions">
        <!-- 1. Website cá nhân -->
        <div class="card submission-card">
          <div class="submission-card__icon-wrapper">
            <svg class="icon icon--lg" aria-hidden="true"><use href="/icons.svg#icon-box"></use></svg>
          </div>
          <h4 data-i18n="howToJoin.sub1Title">${t('howToJoin.sub1Title')}</h4>
          <p class="submission-card__what" data-i18n="howToJoin.sub1What">${t('howToJoin.sub1What')}</p>
          <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--primary btn--small" data-i18n="howToJoin.ctaWebsite">${t('howToJoin.ctaWebsite')}</a>
        </div>

        <!-- 2. 4F Reflection -->
        <div class="card submission-card">
          <div class="submission-card__icon-wrapper">
            <svg class="icon icon--lg" aria-hidden="true"><use href="/icons.svg#icon-reflection"></use></svg>
          </div>
          <h4 data-i18n="howToJoin.sub2Title">${t('howToJoin.sub2Title')}</h4>
          <p class="submission-card__what" data-i18n="howToJoin.sub2What">${t('howToJoin.sub2What')}</p>
          <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--primary btn--small" data-i18n="howToJoin.ctaReflection">${t('howToJoin.ctaReflection')}</a>
        </div>

        <!-- 3. Video Giới Thiệu -->
        <div class="card submission-card">
          <div class="submission-card__icon-wrapper">
            <svg class="icon icon--lg" aria-hidden="true"><use href="/icons.svg#icon-video"></use></svg>
          </div>
          <h4 data-i18n="howToJoin.sub3Title">${t('howToJoin.sub3Title')}</h4>
          <p class="submission-card__what" data-i18n="howToJoin.sub3What">${t('howToJoin.sub3What')}</p>
          <a href="${CONFIG.videoDriveUrl}" target="_blank" rel="noopener" class="btn btn--primary btn--small" data-i18n="howToJoin.ctaVideo">${t('howToJoin.ctaVideo')}</a>
        </div>
      </div>
    </div>
  `;

  return section;
}
