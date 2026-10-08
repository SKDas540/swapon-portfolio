export function renderProjectCard(project, index) {
  const visual = project.image
    ? `<img src="${project.image}" alt="${project.imageAlt || `${project.title} preview`}" loading="lazy" width="720" height="460">`
    : `<span class="project-card__placeholder-art" aria-hidden="true"><span>0${index + 1}</span><i></i><i></i><i></i></span>`;
  const links = [
    project.githubUrl ? `<a class="text-link" href="${project.githubUrl}" target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>` : "",
  ].filter(Boolean).join("");
  const preview = project.liveUrl
    ? `<a class="btn btn-secondary project-card__preview" href="${project.liveUrl}" target="_blank" rel="noreferrer">Live preview <span aria-hidden="true">↗</span></a>`
    : `<button class="btn btn-secondary project-card__preview" type="button" disabled>Preview unavailable</button>`;

  return `
    <article class="project-card card card--hover fade-up${project.placeholder ? " project-card--placeholder" : ""}"${project.placeholder ? ' data-placeholder="true"' : ""}>
      <div class="project-card__visual">${visual}</div>
      <div class="project-card__body">
        ${project.placeholder ? '<span class="project-card__status">Demo concept</span>' : ""}
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.tags?.length ? `<ul class="project-card__tags" aria-label="Project tags">${project.tags.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
        <div class="project-card__links">${links}${preview}</div>
      </div>
    </article>
  `;
}
