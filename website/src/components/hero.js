import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * Hero / Overview section with emotional hooks, mentor domain showcase, and CTAs.
 */
export function renderHero() {
  const section = document.createElement('section');
  section.id = 'overview';
  section.className = 'hero section';

  const deadlineDate = new Date(CONFIG.deadline);
  const now = new Date();
  const diffMs = deadlineDate - now;
  const daysLeft = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  section.innerHTML = `
    <div class="container">
      <div class="hero__label">
        <span class="badge badge--orange" style="font-size: var(--font-size-base); padding: var(--space-xs) var(--space-lg);" data-i18n="hero.badge">${t('hero.badge')}</span>
      </div>
      <h1 class="hero__title" data-i18n="hero.title">${t('hero.title')}</h1>
      <p class="hero__question" data-i18n="hero.question">"${t('hero.question')}"</p>
      <p class="hero__description" data-i18n="hero.description">${t('hero.description')}</p>
      
      <div class="hero__deadline">
        <span class="badge badge--gold">
          ⏰ <span data-i18n="hero.deadline">${t('hero.deadline')}</span>
          ${daysLeft > 0 ? ` · Còn ${daysLeft} ngày` : ''}
        </span>
      </div>

      <div class="hero__prize">
        <div style="font-size: 1.15rem; margin-bottom: var(--space-md);">
          🎁 <strong data-i18n="hero.prize">${t('hero.prize')}</strong>
        </div>
        
        <div class="mentor-domains">
          <span class="mentor-domains__title" data-i18n="hero.mentorTitle">${t('hero.mentorTitle')}</span>
          <div class="mentor-domains__list">
            ${CONFIG.mentorDomains.map(m => `
              <a href="${m.url}" target="_blank" rel="noopener" class="mentor-chip" title="Xem website của ${m.name}">
                <span class="mentor-chip__dot"></span>
                <span class="mentor-chip__domain">${m.domain}</span>
                <span class="mentor-chip__name">(${m.name})</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="hero__ctas">
        <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--primary" data-i18n="hero.ctaPrimary">${t('hero.ctaPrimary')}</a>
        <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--secondary" data-i18n="hero.ctaSecondary">${t('hero.ctaSecondary')}</a>
      </div>
    </div>
  `;

  return section;
}
