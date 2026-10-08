const technologyAssets = {
  react: "React.svg",
  "tailwind css": "Tailwind.svg",
  html: "HTML5.svg",
  html5: "HTML5.svg",
  css: "CSS3.svg",
  css3: "CSS3.svg",
  javascript: "JavaScript.svg",
};

function renderTechnologyIcon(name) {
  const asset = technologyAssets[name.toLowerCase()];
  if (asset) {
    return `<img src="assets/icons/svg/${asset}" alt="" loading="lazy" width="16" height="16">`;
  }

  if (name.toLowerCase() === "typescript") {
    return '<svg class="project-card__typescript-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="20" rx="3"/><text x="5" y="16" fill="var(--color-surface-raised)" font-size="9" font-weight="700">TS</text></svg>';
  }

  return "";
}

function renderTechnologies(project) {
  return `
    <ul class="project-card__technologies" aria-label="Demo technology stack">
      ${project.technologies
        .map(
          (technology) => `
        <li class="project-card__technology">
          ${renderTechnologyIcon(technology)}
          <span>${technology}</span>
        </li>
      `,
        )
        .join("")}
    </ul>
  `;
}

function renderPreview(project) {
  const previewContent =
    '<span>Live Preview</span><svg class="project-card__preview-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const hasLivePreview =
    typeof project.liveUrl === "string" &&
    /^https?:\/\//i.test(project.liveUrl) &&
    project.liveUrl !== "#";

  if (!hasLivePreview) {
    return `<button class="btn btn-primary project-card__preview" type="button" disabled aria-label="Live Preview unavailable for ${project.title}" title="No live preview link has been provided">${previewContent}</button>`;
  }

  return `<a class="btn btn-primary project-card__preview" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="Live Preview for ${project.title}">${previewContent}</a>`;
}

export function renderProjectCard(project) {
  const image = project.image
    ? `<img src="${project.image}" alt="${project.imageAlt || `Preview image for ${project.title}`}" loading="lazy" width="740" height="461">`
    : "";

  return `
    <article class="project-card card card--hover fade-up${project.placeholder ? " project-card--placeholder" : ""}"${project.placeholder ? ' data-placeholder="true"' : ""}>
      <div class="project-card__visual">${image}</div>
      <div class="project-card__body">
        <h3>${project.title}</h3>
        <p class="project-card__type">${project.type || "Demo Project"}</p>
        ${renderTechnologies(project)}
        <div class="project-card__links">${renderPreview(project)}</div>
      </div>
    </article>
  `;
}
