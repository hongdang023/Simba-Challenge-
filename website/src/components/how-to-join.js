import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * How to Join section — 5-step process and 3 submission components.
 */
export function renderHowToJoin() {
  const section = document.createElement('section');
  section.id = 'how-to-join';
  section.className = 'section';

  const steps = [
    { num: 1, titleKey: 'howToJoin.step1Title', descKey: 'howToJoin.step1', icon: '🎯' },
    { num: 2, titleKey: 'howToJoin.step2Title', descKey: 'howToJoin.step2', icon: '📝' },
    { num: 3, titleKey: 'howToJoin.step3Title', descKey: 'howToJoin.step3', icon: '🚀' },
    { num: 4, titleKey: 'howToJoin.step4Title', descKey: 'howToJoin.step4', icon: '🌐' },
    { num: 5, titleKey: 'howToJoin.step5Title', descKey: 'howToJoin.step5', icon: '✨' },
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 data-i18n="howToJoin.heading">${t('howToJoin.heading')}</h2>
      </div>

      <h3 class="text-center mb-xl" data-i18n="howToJoin.stepsHeading">${t('howToJoin.stepsHeading')}</h3>
      <div class="steps">
        ${steps.map(s => `
          <div class="step-card">
            <div class="step-number">${s.num}</div>
            <div>
              <h4 data-i18n="${s.titleKey}">${t(s.titleKey)}</h4>
              <p data-i18n="${s.descKey}">${t(s.descKey)}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 class="text-center mb-xl" data-i18n="howToJoin.submissionsHeading">${t('howToJoin.submissionsHeading')}</h3>
      <div class="submissions">
        <!-- Website/Product -->
        <div class="card submission-card">
          <div class="submission-card__icon submission-card__icon--simba">📦</div>
          <h4 data-i18n="howToJoin.sub1Title">${t('howToJoin.sub1Title')}</h4>
          <p class="submission-card__where" style="color: var(--color-sunset-orange)" data-i18n="howToJoin.sub1Where">${t('howToJoin.sub1Where')}</p>
          <p class="submission-card__what" data-i18n="howToJoin.sub1What">${t('howToJoin.sub1What')}</p>
          <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--primary btn--small" data-i18n="howToJoin.ctaWebsite">${t('howToJoin.ctaWebsite')}</a>
        </div>

        <!-- 4F Reflection -->
        <div class="card submission-card">
          <div class="submission-card__icon submission-card__icon--simba">💭</div>
          <h4 data-i18n="howToJoin.sub2Title">${t('howToJoin.sub2Title')}</h4>
          <p class="submission-card__where" style="color: var(--color-lion-orange)" data-i18n="howToJoin.sub2Where">${t('howToJoin.sub2Where')}</p>
          <p class="submission-card__what" data-i18n="howToJoin.sub2What">${t('howToJoin.sub2What')}</p>
          <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--secondary btn--small" data-i18n="howToJoin.ctaReflection">${t('howToJoin.ctaReflection')}</a>
        </div>

        <!-- Introduction Video -->
        <div class="card submission-card" style="border-style: dashed;">
          <div class="submission-card__icon submission-card__icon--zalo">🎬</div>
          <h4 data-i18n="howToJoin.sub3Title">${t('howToJoin.sub3Title')}</h4>
          <p class="submission-card__where" data-i18n="howToJoin.sub3Where">${t('howToJoin.sub3Where')}</p>
          <p class="submission-card__what" data-i18n="howToJoin.sub3What">${t('howToJoin.sub3What')}</p>
          <a href="${CONFIG.zaloGroupUrl}" target="_blank" rel="noopener" class="btn btn--outline btn--small" data-i18n="howToJoin.videoNote">${t('howToJoin.videoNote')}</a>
        </div>
      </div>
    </div>
  `;

  return section;
}
