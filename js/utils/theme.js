const STORAGE_KEY = "portfolio-theme";

export function initTheme() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  const applyTheme = (theme, persist = true) => {
    document.documentElement.dataset.theme = theme;
    const isDark = theme === "dark";
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute("content", isDark ? "#101a2c" : "#dbeafe");
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    const label = button.querySelector(".theme-toggle__label");
    if (label) label.textContent = isDark ? "Light" : "Dark";
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        // The selected theme remains active for this page even if storage is unavailable.
      }
    }
  };

  applyTheme(document.documentElement.dataset.theme || "light", false);
  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}
