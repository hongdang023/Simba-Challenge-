import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * Hero section — cleaned description, no redundant paragraphs, spacious layout.
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
      <div class="hero__badge-container">
        <span class="badge badge--brand" data-i18n="hero.badge">${t('hero.badge')}</span>
      </div>
      
      <h1 class="hero__title" data-i18n="hero.title">${t('hero.title')}</h1>
      
      <p class="hero__question" data-i18n="hero.question">"${t('hero.question')}"</p>
      
      <div class="hero__deadline-badge">
        <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-clock"></use></svg>
        <span data-i18n="hero.deadline">${t('hero.deadline')}</span>
        ${daysLeft > 0 ? `<span>· Còn ${daysLeft} ngày</span>` : ''}
      </div>

      <!-- 2D Clean Reward Showcase -->
      <div class="hero__reward-card">
        <div class="hero__reward-header">
          <svg class="icon icon--lg" aria-hidden="true"><use href="/icons.svg#icon-gift"></use></svg>
          <span data-i18n="hero.prizeTitle">${t('hero.prizeTitle')}</span>
        </div>
        
        <div class="mentor-domains">
          <span class="mentor-domains__title" data-i18n="hero.mentorTitle">${t('hero.mentorTitle')}</span>
          <div class="mentor-domains__list">
            ${CONFIG.mentorDomains.map(m => `
              <a href="${m.url}" target="_blank" rel="noopener" class="mentor-chip" title="Xem website của ${m.name}">
                <span class="mentor-chip__dot"></span>
                <span class="mentor-chip__domain">${m.domain}</span>
                <span class="mentor-chip__name">${m.name}</span>
                <svg class="icon icon--sm" style="opacity: 0.5;" aria-hidden="true"><use href="/icons.svg#icon-external"></use></svg>
              </a>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="hero__ctas">
        <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--primary" data-i18n="hero.ctaPrimary">
          ${t('hero.ctaPrimary')}
        </a>
        <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--secondary" data-i18n="hero.ctaSecondary">
          ${t('hero.ctaSecondary')}
        </a>
      </div>
    </div>
  `;

  return section;
}
