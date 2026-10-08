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

  section.querySelectorAll(".project-card__visual img").forEach((image) => {
    image.addEventListener("error", () => {
      const visual = image.closest(".project-card__visual");
      if (!visual) return;
      visual.classList.add("is-fallback");
      const fallback = document.createElement("span");
      fallback.className = "project-card__placeholder-art";
      fallback.setAttribute("aria-hidden", "true");
      fallback.innerHTML = "<span>Preview</span><i></i><i></i><i></i>";
      image.replaceWith(fallback);
    }, { once: true });
  });
}
