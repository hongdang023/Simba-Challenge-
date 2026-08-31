import { CONFIG } from '../config.js';
import { t, getLang, setLanguage } from '../i18n.js';

/**
 * Navbar component with sticky nav, anchor links, language toggle, and mobile menu.
 */
export function renderNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');

  const sections = [
    { id: 'overview', key: 'nav.overview' },
    { id: 'challenge', key: 'nav.challenge' },
    { id: 'how-to-join', key: 'nav.howToJoin' },
    { id: 'rules', key: 'nav.rules' },
    { id: 'awards', key: 'nav.awards' },
    { id: 'faq', key: 'nav.faq' },
  ];

  const currentLang = getLang();

  nav.innerHTML = `
    <div class="navbar__inner">
      <a href="#overview" aria-label="Sư Tử Con - Back to top">
        <img src="${CONFIG.logoSrc}" alt="Sư Tử Con" class="navbar__logo" width="160" height="40" />
      </a>
      <ul class="navbar__links">
        ${sections.map(s => `
          <li><a href="#${s.id}" class="navbar__link" data-section="${s.id}" data-i18n="${s.key}">${t(s.key)}</a></li>
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

  // Mobile menu
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.innerHTML = sections.map(s => `
    <a href="#${s.id}" class="navbar__link" data-section="${s.id}" data-i18n="${s.key}">${t(s.key)}</a>
  `).join('');

  document.body.prepend(mobileMenu);
  document.body.prepend(nav);

  // --- Event Listeners ---

  // Scroll shadow
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Language toggle
  nav.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      nav.querySelectorAll('.lang-toggle__btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    });
  });

  // Hamburger
  const hamburger = nav.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Active section highlighting via IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll('.navbar__link').forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    },
    { rootMargin: '-20% 0px -60% 0px' }
  );

  // Observe sections after they're rendered
  requestAnimationFrame(() => {
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
  });
}
