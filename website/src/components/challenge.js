import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * Challenge section — explains what students need to create.
 */
export function renderChallenge() {
  const section = document.createElement('section');
  section.id = 'challenge';
  section.className = 'section';

  const points = [
    { key: 'challenge.point1', icon: '👤' },
    { key: 'challenge.point2', icon: '❤️' },
    { key: 'challenge.point3', icon: '🏆' },
    { key: 'challenge.point4', icon: '🔗' },
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 data-i18n="challenge.heading">${t('challenge.heading')}</h2>
      </div>
      <p class="text-center mb-xl" data-i18n="challenge.intro">${t('challenge.intro')}</p>

      <div class="challenge__points">
        ${points.map(p => `
          <div class="challenge__point">
            <div class="challenge__point-icon">${p.icon}</div>
            <div>
              <p data-i18n="${p.key}">${t(p.key)}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="challenge__examples">
        <div class="card card--accent">
          <h4 data-i18n="challenge.example1Title">${t('challenge.example1Title')}</h4>
          <p data-i18n="challenge.example1">${t('challenge.example1')}</p>
        </div>
        <div class="card card--accent">
          <h4 data-i18n="challenge.example2Title">${t('challenge.example2Title')}</h4>
          <p data-i18n="challenge.example2">${t('challenge.example2')}</p>
        </div>
      </div>

      <div class="blockquote" data-i18n="challenge.note">${t('challenge.note')}</div>

      <div class="text-center mt-xl">
        <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--primary" data-i18n="challenge.cta">${t('challenge.cta')}</a>
      </div>
    </div>
  `;

  return section;
}
