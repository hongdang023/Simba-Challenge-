import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * Awards section — Designed to 100% match the user's reference mockup image:
 * 1. Top Card: 100% Guaranteed Rewards (3 columns: Gift Title | Domain 1 year | Certificate)
 * 2. Big Glowing Banner: TOP 3 — VINH DANH XUẤT SẮC with 3 Perks Cards (200k, Simba Model, Featured Media)
 * 3. 3 Title Podium Cards (Best Experience, Best Story, Best Reflection)
 * 4. Mentor Domains Showcase
 */
export function renderAwards() {
  const section = document.createElement('section');
  section.id = 'awards';
  section.className = 'section awards-section-v2';

  const topAwards = [
    { 
      tagKey: 'awards.award1Tag',
      titleKey: 'awards.award1Title', 
      descKey: 'awards.award1Desc', 
      icon: 'icon-globe' 
    },
    { 
      tagKey: 'awards.award2Tag',
      titleKey: 'awards.award2Title', 
      descKey: 'awards.award2Desc', 
      icon: 'icon-heart' 
    },
    { 
      tagKey: 'awards.award3Tag',
      titleKey: 'awards.award3Title', 
      descKey: 'awards.award3Desc', 
      icon: 'icon-reflection' 
    },
  ];

  section.innerHTML = `
    <div class="container awards-container-v2">
      <!-- Section Title with Orange Accent Underline -->
      <div class="awards-header-v2">
        <h2 data-i18n="awards.heading">${t('awards.heading')}</h2>
        <div class="awards-header-line"></div>
      </div>

      <!-- 1. TOP CARD: Phần thưởng dành cho tất cả học sinh hoàn thành -->
      <div class="all-rewards-card">
        <div class="all-rewards-card__left">
          <div class="all-rewards-card__icon-wrap">
            <svg class="icon icon--lg" aria-hidden="true"><use href="/icons.svg#icon-gift"></use></svg>
            <span class="sparkle-star">✦</span>
          </div>
          <h3 data-i18n="awards.allTitle">${t('awards.allTitle')}</h3>
        </div>
        
        <div class="all-rewards-card__item">
          <div class="round-check-icon">
            <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-check"></use></svg>
          </div>
          <div>
            <h4 data-i18n="awards.item1Title">${t('awards.item1Title')}</h4>
            <p data-i18n="awards.item1Desc">${t('awards.item1Desc')}</p>
          </div>
        </div>

        <div class="all-rewards-card__item">
          <div class="round-check-icon">
            <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-check"></use></svg>
          </div>
          <div>
            <h4 data-i18n="awards.item2Title">${t('awards.item2Title')}</h4>
            <p data-i18n="awards.item2Desc">${t('awards.item2Desc')}</p>
          </div>
        </div>
      </div>

      <!-- 2. BIG GOLDEN GLOW BANNER: TOP 3 — VINH DANH XUẤT SẮC -->
      <div class="top3-glow-banner">
        <div class="top3-glow-header">
          <div class="top3-title-row">
            <span class="laurel-branch left">🌿</span>
            <h3 data-i18n="awards.topSectionTitle">${t('awards.topSectionTitle')}</h3>
            <span class="laurel-branch right">🌿</span>
          </div>
          <div class="top3-star-divider">
            <span class="divider-line"></span>
            <span class="star-icon">★</span>
            <span class="divider-line"></span>
          </div>
          <p class="top3-subtitle" data-i18n="awards.topSubTitle">${t('awards.topSubTitle')}</p>
        </div>

        <!-- 3 Perks Cards -->
        <div class="top3-perks-grid">
          <div class="perk-card">
            <div class="perk-card__icon-box">
              <span class="perk-emoji-2d">💵</span>
            </div>
            <div class="perk-card__amount" data-i18n="awards.perk1Amount">${t('awards.perk1Amount')}</div>
            <div class="perk-card__label" data-i18n="awards.perk1Desc">${t('awards.perk1Desc')}</div>
          </div>

          <div class="perk-card">
            <div class="perk-card__icon-box">
              <span class="perk-emoji-2d">💻</span>
            </div>
            <div class="perk-card__title" data-i18n="awards.perk2Title">${t('awards.perk2Title')}</div>
          </div>

          <div class="perk-card">
            <div class="perk-card__icon-box">
              <span class="perk-emoji-2d">📢</span>
            </div>
            <div class="perk-card__title" data-i18n="awards.perk3Title">${t('awards.perk3Title')}</div>
          </div>
        </div>
      </div>

      <!-- 3. TOP 3 TITLE RECOGNITIONS -->
      <div class="top3-titles-grid">
        ${topAwards.map(a => `
          <div class="title-award-card">
            <div class="title-award-card__tag" data-i18n="${a.tagKey}">${t(a.tagKey)}</div>
            <div class="title-award-card__medal">
              <div class="medal-circle">
                <svg class="icon icon--md" aria-hidden="true"><use href="/icons.svg#${a.icon}"></use></svg>
              </div>
              <div class="medal-ribbon"></div>
            </div>
            <h4 data-i18n="${a.titleKey}">${t(a.titleKey)}</h4>
            <p data-i18n="${a.descKey}">${t(a.descKey)}</p>
          </div>
        `).join('')}
      </div>

      <!-- 4. MENTOR DOMAINS SHOWCASE -->
      <div class="awards-mentor-box">
        <span class="awards-mentor-title" data-i18n="awards.mentorTitle">${t('awards.mentorTitle')}</span>
        <div class="awards-mentor-list">
          ${CONFIG.mentorDomains.map(m => `
            <a href="${m.url}" target="_blank" rel="noopener" class="mentor-pill" title="Xem website của ${m.name}">
              <span class="mentor-pill__dot"></span>
              <strong class="mentor-pill__domain">${m.domain}</strong>
              <span class="mentor-pill__name">${m.name}</span>
              <svg class="icon icon--sm" style="opacity: 0.45;" aria-hidden="true"><use href="/icons.svg#icon-external"></use></svg>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  return section;
}
