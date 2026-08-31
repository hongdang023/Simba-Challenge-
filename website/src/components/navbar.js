import { CONFIG } from '../config.js';
import { t, getLang, setLanguage } from '../i18n.js';

/**
 * Navbar for 3 Dedicated Pages: 1. Tổng quan, 2. Tiêu chuẩn đánh giá, 3. Câu hỏi thường gặp.
 */
export function renderNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');

  const pages = [
    { route: 'overview', key: 'nav.overview', href: '#/' },
    { route: 'rubrics', key: 'nav.rubrics', href: '#/rubrics' },
    { route: 'faq', key: 'nav.faq', href: '#/faq' },
  ];

  const currentLang = getLang();

  nav.innerHTML = `
    <div class="navbar__inner">
      <a href="#/" class="navbar__brand" aria-label="Sư Tử Con">
        <img src="${CONFIG.logoSrc}" alt="Sư Tử Con" class="navbar__logo" height="36" />
      </a>
      
      <ul class="navbar__links">
        ${pages.map(p => `
          <li><a href="${p.href}" class="navbar__link" data-route="${p.route}" data-i18n="${p.key}">${t(p.key)}</a></li>
        `).join('')}
      </ul>

      <div class="navbar__actions">
        <div class="lang-toggle" role="group" aria-label="Language">
          <button class="lang-toggle__btn ${currentLang === 'vi' ? 'active' : ''}" data-lang="vi" aria-label="Tiếng Việt">VI</button>
          <button class="lang-toggle__btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" aria-label="English">EN</button>
        </div>
        <button class="hamburger" aria-label="Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.innerHTML = pages.map(p => `
    <a href="${p.href}" class="navbar__link" data-route="${p.route}" data-i18n="${p.key}">${t(p.key)}</a>
  `).join('');

  document.body.prepend(mobileMenu);
  document.body.prepend(nav);

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  nav.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      nav.querySelectorAll('.lang-toggle__btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    });
  });

  const hamburger = nav.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Update active navbar state by route name
 */
export function updateActiveNav(activeRoute) {
  document.querySelectorAll('.navbar__link').forEach(link => {
    const isMatch = link.dataset.route === activeRoute;
    link.classList.toggle('active', isMatch);
  });
}
