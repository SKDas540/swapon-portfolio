import { renderSectionHeading } from "../components/section-heading.js";
import { renderServiceCard } from "../components/service-card.js";

export function renderServices(data) {
  const section = document.querySelector("#services");
  if (!section) return;

  section.innerHTML = `
    <div class="container section">
      ${renderSectionHeading(data.servicesSection, "services-title")}
      <div class="services__grid">${data.services.map(renderServiceCard).join("")}</div>
    </div>
  `;
}
