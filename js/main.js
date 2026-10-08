import { portfolio } from "./data/portfolio.js";
import { initNavigation } from "./components/navigation.js";
import { renderFooter } from "./components/footer.js";
import { initTheme } from "./utils/theme.js";
import { initReveal } from "./utils/reveal.js";
import { renderAbout } from "./sections/about.js";
import { renderHero } from "./sections/hero.js";
import { renderSkills } from "./sections/skills.js";
import { renderProjects } from "./sections/projects.js";
import { renderServices } from "./sections/services.js";
import { renderContact } from "./sections/contact.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation(portfolio);
  initTheme();

  renderHero(portfolio);
  renderAbout(portfolio);
  renderSkills(portfolio);
  renderProjects(portfolio);
  renderServices(portfolio);
  renderContact(portfolio);
  renderFooter(portfolio);
  initReveal();
});
