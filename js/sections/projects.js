import { renderProjectCard } from "../components/project-card.js";
import { renderSectionHeading } from "../components/section-heading.js";

export function renderProjects(data) {
  const section = document.querySelector("#projects");
  if (!section) return;

  section.innerHTML = `
    <div class="container section">
      <div class="projects__heading">
        ${renderSectionHeading(data.projectsSection, "projects-title")}
      </div>
      <div class="projects__grid">${data.projects.map(renderProjectCard).join("")}</div>
    </div>
  `;
}
