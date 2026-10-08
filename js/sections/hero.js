import { renderSocialLink } from "../components/social-link.js";

export function renderHero(data) {
  const hero = document.querySelector("#hero");

  if (!hero) return;

  const animatedName = Array.from(data.personal.name, (letter) =>
    `<span class="hero__letter${letter === " " ? " hero__letter--space" : ""}" aria-hidden="true">${letter === " " ? "" : letter}</span>`
  ).join("");

  hero.innerHTML = `
    <div class="hero section" aria-labelledby="hero-title">
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="hero__eyebrow reveal-item">${data.hero.eyebrow}</p>
          <h1 class="hero__title reveal-item" id="hero-title" aria-label="${data.personal.name}"><span class="hero__animated-name" aria-hidden="true">${animatedName}</span></h1>
          <p class="hero__role reveal-item">${data.personal.role}<span aria-hidden="true"> · </span>${data.personal.location}</p>
          <p class="hero__description reveal-item">${data.hero.description}</p>

          <div class="hero__actions reveal-item">
            <a class="btn btn-primary" href="#projects">${data.hero.primaryAction}<span aria-hidden="true">↗</span></a>
            <a class="btn btn-secondary" href="#contact">${data.hero.secondaryAction}</a>
          </div>
          <div class="hero__socials reveal-item">
            ${data.socialLinks.map((link) => renderSocialLink(link, data.personal)).join("")}
          </div>
        </div>

        <div class="hero__visual reveal-item">
          <figure class="hero__profile-card">
            <div class="hero__portrait-frame">
              <img
                class="hero__portrait"
                src="assets/images/profile/Swapon%202.png"
                alt="Portrait of ${data.personal.name}"
                width="1254"
                height="1254"
                fetchpriority="high"
                decoding="async"
              >
              <figcaption class="hero__tagline">Design · Build · Deliver</figcaption>
            </div>
          </figure>
        </div>
      </div>
    </div>
  `;
}
