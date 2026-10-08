export function renderSkillCard(skill) {
  const icon = skill.icon
    ? `<img
        src="assets/icons/svg/${skill.icon}"
        alt=""
        loading="lazy"
        width="32"
        height="32"
      />`
    : `<span class="skill-card__fallback" aria-hidden="true">${skill.name.slice(0, 2)}</span>`;

  return `
    <li class="skill-card card card--hover">
      <span class="skill-card__icon">${icon}</span>
      <span class="skill-card__name">${skill.name}</span>
    </li>
  `;
}
