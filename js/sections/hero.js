export function renderHero(data) {
  const hero = document.querySelector("#hero");

  if (!hero) return;

  hero.innerHTML = `
    <section class="hero section">
      <div class="container hero__grid">
        <div class="hero__content fade-up">
          <span class="section-label">${data.hero.eyebrow}</span>
          <h1 class="hero__title">${data.hero.title}</h1>
          <h2>${data.role}</h2>
          <p class="hero__description">${data.hero.description}</p>

          <div class="hero__actions">
            <a class="btn btn-primary" href="#projects">
              View My Projects
            </a>
            <a class="btn btn-secondary" href="assets/cv/swapon-kumar-das-cv.pdf" download>
              Download CV
            </a>
          </div>
        </div>

        <div class="hero__visual fade-up">
          <div class="card hero__placeholder">
            <p class="script-text hero__motto">Code • Create • Grow</p>
            <p class="hero__placeholder-note">Profile image will be added here.</p>
          </div>
        </div>
      </div>
      
    </section>
  `;
}
