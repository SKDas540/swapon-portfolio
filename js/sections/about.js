import { renderSectionHeading } from "../components/section-heading.js";

export function renderAbout(data) {
  const section = document.querySelector("#about");
  if (!section) return;

  section.innerHTML = `
    <div class="container about__layout section">
      <div class="about__intro">
        ${renderSectionHeading(data.about, "about-title")}
        <p class="about__copy fade-up">${data.about.description}</p>
      </div>
      <ul class="about__principles" aria-label="Approach to development">
        ${data.about.principles.map((principle, index) => `
          <li class="about-principle fade-up">
            <span class="about-principle__index" aria-hidden="true">0${index + 1}</span>
            <div><h3>${principle.title}</h3><p>${principle.description}</p></div>
          </li>
        `).join("")}
      </ul>
    </div>
  `;
}
