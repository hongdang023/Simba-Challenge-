/**
 * Main entry point — My Personal Website Challenge
 */
import './styles/index.css';
import './styles/sections.css';
import './styles/rubrics.css';
import './styles/responsive.css';

import { CONFIG } from './config.js';
import { t, getLang } from './i18n.js';
import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderChallenge } from './components/challenge.js';
import { renderHowToJoin } from './components/how-to-join.js';
import { renderRules } from './components/rules.js';
import { renderAwards } from './components/awards.js';
import { renderRubrics } from './components/rubrics.js';
import { renderFAQ } from './components/faq.js';

function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="container">
      <p class="footer__message" data-i18n="footer.message">${t('footer.message')}</p>
      <div class="footer__ctas">
        <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--primary" data-i18n="challenge.cta">${t('challenge.cta')}</a>
      </div>
      <p class="footer__brand" data-i18n="footer.brand">${t('footer.brand')}</p>
    </div>
  `;

  return footer;
}

function init() {
  const app = document.getElementById('app');
  if (!app) return;

  document.documentElement.lang = getLang();

  renderNavbar();

  // 1. Tổng quan
  app.appendChild(renderHero());
  app.appendChild(renderChallenge());
  app.appendChild(renderHowToJoin());
  app.appendChild(renderRules());
  app.appendChild(renderAwards());

  // 2. Đánh giá (Assessment Rubrics)
  app.appendChild(renderRubrics());

  // 3. FAQ
  app.appendChild(renderFAQ());
  app.appendChild(renderFooter());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
