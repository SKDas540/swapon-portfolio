import { portfolio } from "./data/portfolio.js";
import { initNavigation } from "./components/navigation.js";
import { renderFooter } from "./components/footer.js";
import { initTheme } from "./utils/theme.js";
import { initReveal } from "./utils/reveal.js";

import { renderHero } from "./sections/hero.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTheme();

  renderHero(portfolio);
  renderFooter(portfolio);
  initReveal();
});
