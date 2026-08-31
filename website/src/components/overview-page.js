import { renderHero } from './hero.js';
import { renderChallenge } from './challenge.js';
import { renderHowToJoin } from './how-to-join.js';
import { renderRules } from './rules.js';
import { renderAwards } from './awards.js';

/**
 * Dedicated Page 1: Tổng quan (Overview page).
 */
export function renderOverviewPage() {
  const page = document.createElement('div');
  page.id = 'page-overview';
  page.className = 'page-container';

  page.appendChild(renderHero());
  page.appendChild(renderChallenge());
  page.appendChild(renderHowToJoin());
  page.appendChild(renderRules());
  page.appendChild(renderAwards());

  return page;
}
