# Portfolio architecture

The site is a static, data-driven HTML/CSS/Vanilla JavaScript project. It has no runtime dependency or bundler. Run it from a local HTTP server because its JavaScript uses ES modules.

## Current structure

```text
index.html
README.md
README-Portfolio-Architecture.md
DEVELOPMENT-ROADMAP.md
assets/
  UI-UX/                       # Supplied visual references
  icons/svg/                   # Supplied technology icons
  cv/README.txt                # CV filename instructions; PDF not supplied
  images/profile/Swapon 2.png      # Hero portrait
  images/projects/Dashboard.png    # Reused only for labeled dashboard concepts
css/
  main.css
  base/{reset,variables,typography}.css
  components/{buttons,cards,logo,navbar,section-heading,social-link,theme-toggle}.css
  sections/{about,contact,footer,hero,projects,services,skills}.css
  utilities/{container,helpers}.css
js/
  main.js
  data/portfolio.js
  components/{footer,navigation,project-card,section-heading,service-card,skill-card,social-link}.js
  sections/{about,contact,hero,projects,services,skills}.js
  utils/{reveal,theme}.js
```

## Startup and rendering

1. `index.html` sets metadata, semantic section mount points, and the early light/dark preference before loading CSS to reduce theme flash.
2. `css/main.css` imports the reset and tokens, shared components, section styles, then utilities.
3. `js/main.js` imports the portfolio object, renders navigation and all sections, initializes theme state and form behavior, renders the global footer, then starts reveal observers.
4. Each section renderer reads from `js/data/portfolio.js`; reusable card and heading renderers provide shared markup.

### Data

`portfolio.js` keeps verified identity, role, location, and email in `personal`. Section copy, skill groups, clearly labeled dashboard concept entries, services, navigation, and footer labels are stored alongside it. Unavailable social destinations and project links are omitted.

### Components

- `navigation.js` builds the shared nav, updates active-section state, opens/closes the mobile menu, handles Escape, and returns focus to the toggle.
- `footer.js` renders the global brand, shared navigation, verified contact link, copyright, and back-to-top link.
- `section-heading.js`, `social-link.js`, and the skill/project/service card renderers keep repeated structures consistent.

### Sections and utilities

- `sections/hero.js`, `about.js`, `skills.js`, `projects.js`, `services.js`, and `contact.js` own their section structure.
- Contact uses browser-native validity checks and builds a `mailto:` draft. No data is posted to a server.
- `utils/theme.js` synchronizes the theme toggle, document theme, browser theme color, and local storage.
- `utils/reveal.js` uses `IntersectionObserver` and shows content without motion when reduced motion is requested or the observer is unavailable.

## Styling conventions

- `base/variables.css` defines shared spacing, type, motion, shadows, layout, and semantic light/dark color tokens.
- `base/reset.css` establishes box sizing, element defaults, smooth scroll, and keyboard focus.
- `base/typography.css` defines readable text and form control defaults.
- Shared UI belongs in `components/`; section layout stays in its matching `sections/` stylesheet; container and reveal helpers live in `utilities/`.
- Use semantic color tokens for component surfaces and text. Literal colors belong in the token palette or small decorative details.
- Each section owns its responsive layout rules. Do not add a monolithic responsive stylesheet.

## Content and assets

The UI images in `assets/UI-UX/` are design references. The profile image in `assets/images/profile/` is used in the Hero; the Dashboard image is used for concepts explicitly marked as demos, not as verified personal work. Technology icons supplied in `assets/icons/svg/` are used in Skills. A CV PDF and verified project or social URLs are not available, so these destinations are not fabricated.

## Accessibility and motion

Sections use labelled headings, navigation uses native links and buttons, controls have visible focus, form fields have labels and native constraints, and transitions/reveals honor `prefers-reduced-motion`. Re-check contrast and keyboard behavior when adding content or changing tokens.
