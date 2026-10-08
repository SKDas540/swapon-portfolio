export function renderFooter(data = {}) {
  const footer = document.querySelector("#footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="container footer__inner">
      <p>© ${new Date().getFullYear()} ${data.name || ""}</p>
      <a href="#hero" class="footer__top-link">Back to top <span aria-hidden="true">↑</span></a>
    </div>
  `;
}
