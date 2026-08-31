import { t } from '../i18n.js';

/**
 * Awards section — 2D vector icons.
 */
export function renderAwards() {
  const section = document.createElement('section');
  section.id = 'awards';
  section.className = 'section';

  const topAwards = [
    { titleKey: 'awards.award1Title', descKey: 'awards.award1Desc', icon: 'icon-globe' },
    { titleKey: 'awards.award2Title', descKey: 'awards.award2Desc', icon: 'icon-heart' },
    { titleKey: 'awards.award3Title', descKey: 'awards.award3Desc', icon: 'icon-reflection' },
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
        <div class="card">
          <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: var(--space-xs);">
            <svg class="icon icon--lg" style="color: var(--color-savannah-gold);" aria-hidden="true"><use href="/icons.svg#icon-gift"></use></svg>
            <h3 style="color: var(--color-midnight-blue);" data-i18n="awards.everyoneTitle">${t('awards.everyoneTitle')}</h3>
          </div>
          <p class="text-muted" style="font-size: var(--font-size-sm);" data-i18n="awards.everyoneDesc">${t('awards.everyoneDesc')}</p>
          <ul class="awards-everyone__list">
            <li>
              <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-sparkles"></use></svg>
              <span data-i18n="awards.everyoneItem1">${t('awards.everyoneItem1')}</span>
            </li>
            <li>
              <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-sparkles"></use></svg>
              <span data-i18n="awards.everyoneItem2">${t('awards.everyoneItem2')}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Top 3 Featured Awards -->
      <h3 class="text-center" style="margin-bottom: var(--space-xs);" data-i18n="awards.topTitle">${t('awards.topTitle')}</h3>
      <p class="text-center text-muted" style="margin-bottom: var(--space-2xl); font-size: var(--font-size-sm);" data-i18n="awards.topDesc">${t('awards.topDesc')}</p>
      
      <div class="awards-top">
        ${topAwards.map(a => `
          <div class="card award-card">
            <div class="award-card__icon-box">
              <svg class="icon icon--lg" aria-hidden="true"><use href="/icons.svg#${a.icon}"></use></svg>
            </div>
            <h4 data-i18n="${a.titleKey}">${t(a.titleKey)}</h4>
            <p data-i18n="${a.descKey}">${t(a.descKey)}</p>
          </div>
        `).join('')}
      </div>

      <!-- Extra Benefits -->
      <div class="awards-extra">
        <div class="card">
          <h4 class="text-center" style="font-size: var(--font-size-md);" data-i18n="awards.extraTitle">${t('awards.extraTitle')}</h4>
          <ul class="awards-extra__list">
            ${extras.map(e => `
              <li>
                <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-sparkles"></use></svg>
                <span data-i18n="${e}">${t(e)}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <p class="text-center text-muted" style="margin-top: var(--space-lg); font-size: var(--font-size-xs);" data-i18n="awards.ruleNote">
        ${t('awards.ruleNote')}
      </p>
    </div>
  `;

  return section;
}
