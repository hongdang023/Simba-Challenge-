/**
 * Main entry point — 3 Dedicated Pages Client-Side Router
 * 1. Overview Page (#/ or empty)
 * 2. Rubrics Page (#/rubrics)
 * 3. FAQ Page (#/faq)
 */
import './styles/index.css';
import './styles/sections.css';
import './styles/awards.css';
import './styles/rubrics.css';
import './styles/responsive.css';

import { CONFIG } from './config.js';
import { t, getLang } from './i18n.js';
import { renderNavbar, updateActiveNav } from './components/navbar.js';
import { renderOverviewPage } from './components/overview-page.js';
import { renderRubricsPage } from './components/rubrics.js';
import { renderFAQPage } from './components/faq.js';

// Router to handle 3 dedicated pages
function handleRoute() {
  const app = document.getElementById('app');
  if (!app) return;

  const rawHash = window.location.hash || '#/';
  // Normalize route
  let route = 'overview';
  if (rawHash.startsWith('#/rubrics')) {
    route = 'rubrics';
  } else if (rawHash.startsWith('#/faq')) {
    route = 'faq';
  } else {
    route = 'overview';
  }

  // Clear current page content
  app.innerHTML = '';

  // Render dedicated page
  if (route === 'rubrics') {
    app.appendChild(renderRubricsPage());
  } else if (route === 'faq') {
    app.appendChild(renderFAQPage());
  } else {
    app.appendChild(renderOverviewPage());
  }

  // Update active state on navbar
  updateActiveNav(route);

  // Smooth scroll to top on page change
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Handle in-page anchors if present (e.g., #challenge on overview page)
  if (rawHash.includes('#challenge')) {
    const el = document.getElementById('challenge');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (rawHash.includes('#how-to-join')) {
    const el = document.getElementById('how-to-join');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

function init() {
  document.documentElement.lang = getLang();

  // Render static navbar
  renderNavbar();

  // Initial route
  handleRoute();

  // Listen to hash changes
  window.addEventListener('hashchange', handleRoute);

  // Re-render current page on language change
  window.addEventListener('langchange', handleRoute);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
