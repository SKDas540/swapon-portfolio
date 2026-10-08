export function renderSectionHeading({ eyebrow, title, description }, id) {
  return `
    <header class="section-heading fade-up">
      <p class="section-heading__eyebrow">${eyebrow}</p>
      <h2 class="section-heading__title" id="${id}">${title}</h2>
      ${description ? `<p class="section-heading__description">${description}</p>` : ""}
    </header>
  `;
}
