export function renderSocialLink(link, personal = {}) {
  const url = link.type === "email" ? `mailto:${personal.email}` : link.url;
  if (!url) return "";
  const isEmail = url.startsWith("mailto:");
  return `
    <a class="social-link" href="${url}"${isEmail ? "" : ' target="_blank" rel="noreferrer"'} aria-label="${link.label}">
      <span aria-hidden="true">${link.icon || link.label.slice(0, 1)}</span>
      <span class="social-link__label">${link.label}</span>
    </a>
  `;
}
