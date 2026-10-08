import { renderSectionHeading } from "../components/section-heading.js";
import { renderSkillCard } from "../components/skill-card.js";

export function renderSkills(data) {
  const section = document.querySelector("#skills");
  if (!section) return;

  section.innerHTML = `
    <div class="container section">
      ${renderSectionHeading(data.skillsSection, "skills-title")}
      <div class="skills__groups">
        ${data.skills.map((group, index) => `
          <section class="skill-group fade-up" aria-labelledby="skill-group-${index}">
            <h3 class="skill-group__title" id="skill-group-${index}">${group.category}</h3>
            <ul class="skill-group__list">${group.items.map(renderSkillCard).join("")}</ul>
          </section>
        `).join("")}
      </div>
    </div>
  `;

  section.querySelectorAll(".skill-card__icon img").forEach((image) => {
    image.addEventListener("error", () => {
      const fallback = document.createElement("span");
      fallback.className = "skill-card__fallback";
      fallback.setAttribute("aria-hidden", "true");
      fallback.textContent = image.closest(".skill-card")?.querySelector(".skill-card__name")?.textContent.slice(0, 2) || "?";
      image.replaceWith(fallback);
    }, { once: true });
  });
}
