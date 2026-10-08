const serviceIcons = {
  responsive: '<rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8m-4-4v4"/>',
  interface: '<path d="M4 5h16v14H4zM8 9h8M8 13h5m-5 3h8"/>',
  javascript: '<path d="M7 4h10v16H7zM10 9l-2 3 2 3m4-6 2 3-2 3"/>',
  support: '<path d="M12 3a8 8 0 0 0-8 8v3a2 2 0 0 0 2 2h2v-6H5m14 0h-3v6h2a2 2 0 0 0 2-2v-3a8 8 0 0 0-8-8Zm0 17h2"/>',
  integration: '<path d="M8 7h8m-8 10h8M7 4v6m10 4v6M7 10a3 3 0 1 0 0 .1m10 3a3 3 0 1 0 0 .1"/>',
  performance: '<path d="M4 19a9 9 0 1 1 16 0M12 13l4-4m-7 7h6"/>',
};

export function renderServiceCard(service) {
  const icon = serviceIcons[service.icon] || serviceIcons.interface;

  return `
    <article class="service-card card card--hover fade-up">
      <div class="service-card__topline">
        <span class="service-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icon}</svg></span>
        <span class="service-card__number" aria-hidden="true">${service.number}</span>
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </article>
  `;
}
