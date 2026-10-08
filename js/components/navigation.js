export function initNavigation() {
  const header = document.querySelector("#header");

  if (!header) return;

  header.innerHTML = `
    <div class="container">
      <nav class="navbar" aria-label="Main navigation">
          <a href="#hero" class="brand" aria-label="Swapon Kumar Das home">
            <span class="logo" aria-hidden="true">
              <span class="petal petal-1"></span><span class="petal petal-2"></span>
              <span class="petal petal-3"></span><span class="petal petal-4"></span>
              <span class="petal petal-5"></span>
            </span>
          </a>

          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Open navigation">
            <span></span><span></span><span></span>
          </button>

          <div class="nav-links" id="primary-navigation">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div class="nav-actions">
            <button class="theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false" data-theme-toggle>
              <span aria-hidden="true">◐</span><span class="theme-toggle__label">Dark</span>
            </button>
            <a href="#contact" class="btn btn-primary">Hire Me</a>
          </div>
      </nav>
    </div>
  `;

  const links = [...header.querySelectorAll(".nav-links a")];

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((item) => {
        item.classList.remove("active");
        item.removeAttribute("aria-current");
      });
      link.classList.add("active");
      link.setAttribute("aria-current", "location");
      closeMenu();
    });
  });

  const toggle = header.querySelector(".nav-toggle");
  const menu = header.querySelector(".nav-links");
  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    menu.classList.remove("is-open");
  }
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    menu.classList.toggle("is-open", !isOpen);
  });
  header.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || toggle.getAttribute("aria-expanded") !== "true") return;
    closeMenu();
    toggle.focus();
  });
}
