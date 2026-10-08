import { renderSectionHeading } from "../components/section-heading.js";

const featureIcons = {
  code: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14"/></svg>',
  creative: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 18h6m-5 3h4m-2-19a7 7 0 0 0-4 12.7c.6.4 1 1 1 1.8h6c0-.8.4-1.4 1-1.8A7 7 0 0 0 12 2Z"/></svg>',
  learning: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 7v5h-5M4 17v-5h5m-4-1a7 7 0 0 1 12-4l3 3M4 14l3 3a7 7 0 0 0 12-4"/></svg>',
  team: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 10v-2a4 4 0 0 0-3-3.9m-1-12a4 4 0 0 1 0 7.8"/></svg>',
};

export function renderAbout(data) {
  const section = document.querySelector("#about");
  if (!section) return;

  section.innerHTML = `
    <div class="container section">
      <div class="about__panel about__layout">
        <div class="about__intro">
          ${renderSectionHeading(data.about, "about-title")}
        </div>
        <figure class="about__visual fade-up">
          <img src="${data.about.image}" alt="${data.about.imageAlt}" width="1240" height="1240" loading="lazy">
        </figure>
        <ul class="about__features" aria-label="Professional qualities">
          ${data.about.features.map((feature) => `
            <li class="about-feature card fade-up">
              <span class="about-feature__icon">${featureIcons[feature.icon] || ""}</span>
              <h3>${feature.title}</h3>
              <p>${feature.description}</p>
            </li>
          `).join("")}
        </ul>
        <p class="about__signature fade-up">${data.personal.name}</p>
      </div>
    </div>
  `;
}
