import { t } from '../i18n.js';

/**
 * Awards section — everyone reward + top 3 featured awards + extra benefits.
 */
export function renderAwards() {
  const section = document.createElement('section');
  section.id = 'awards';
  section.className = 'section';

  const topAwards = [
    { titleKey: 'awards.award1Title', descKey: 'awards.award1Desc', trophy: '🏅' },
    { titleKey: 'awards.award2Title', descKey: 'awards.award2Desc', trophy: '📖' },
    { titleKey: 'awards.award3Title', descKey: 'awards.award3Desc', trophy: '🪞' },
  ];

  const extras = [
    'awards.extra1',
    'awards.extra2',
    'awards.extra3',
    'awards.extra4',
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 data-i18n="awards.heading">${t('awards.heading')}</h2>
      </div>

      <!-- Everyone Can Earn -->
      <div class="awards-everyone">
        <div class="card card--gold">
          <h3 data-i18n="awards.everyoneTitle">${t('awards.everyoneTitle')}</h3>
          <p data-i18n="awards.everyoneDesc">${t('awards.everyoneDesc')}</p>
          <ul class="awards-everyone__list">
            <li data-i18n="awards.everyoneItem1">${t('awards.everyoneItem1')}</li>
            <li data-i18n="awards.everyoneItem2">${t('awards.everyoneItem2')}</li>
          </ul>
        </div>
      </div>

      <!-- Top 3 Featured Awards -->
      <h3 class="text-center mb-xl" data-i18n="awards.topTitle">${t('awards.topTitle')}</h3>
      <p class="text-center mb-xl" data-i18n="awards.topDesc">${t('awards.topDesc')}</p>
      <div class="awards-top">
        ${topAwards.map(a => `
          <div class="card award-card">
            <div class="award-card__trophy">${a.trophy}</div>
            <h4 data-i18n="${a.titleKey}">${t(a.titleKey)}</h4>
            <p data-i18n="${a.descKey}">${t(a.descKey)}</p>
          </div>
        `).join('')}
      </div>

      <!-- Extra Benefits -->
      <div class="awards-extra">
        <div class="card card--accent">
          <h4 class="text-center" data-i18n="awards.extraTitle">${t('awards.extraTitle')}</h4>
          <ul class="awards-extra__list">
            ${extras.map(e => `<li data-i18n="${e}">${t(e)}</li>`).join('')}
          </ul>
        </div>
      </div>

      <p class="text-center text-muted mt-lg" data-i18n="awards.ruleNote">${t('awards.ruleNote')}</p>
    </div>
  `;

  return section;
}
