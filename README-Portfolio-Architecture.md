# Portfolio architecture

This project uses semantic HTML, CSS and native JavaScript ES modules. It has no build step or framework. The page is served from `index.html`; because JavaScript modules are used, run it from a local HTTP server such as VS Code Live Server.

## Current structure

```text
index.html
README.md
README-Portfolio-Architecture.md
DEVELOPMENT-ROADMAP.md
assets/
  cv/README.txt
  icons/svg/...
  UI-UX/...
css/
  main.css
  base/{reset,variables,typography}.css
  components/{buttons,cards,logo,navbar,theme-toggle}.css
  sections/{about,contact,footer,hero,projects,services,skills}.css
  utilities/{container,helpers}.css
js/
  main.js
  data/portfolio.js
  components/{footer,navigation}.js
  sections/hero.js
  utils/{reveal,theme}.js
```

Only modules that have a current responsibility exist. Future section renderers and reusable cards should be added when their sections are implemented and real reuse is clear.

## Connections and rendering

- `index.html` owns the semantic page shell, mount points, stylesheet link, and `js/main.js` module entry.
- An early inline script applies a saved or system-selected theme before CSS loads to reduce theme flash. `js/utils/theme.js` initializes the accessible theme button and persists changes under `portfolio-theme`.
- `css/main.css` imports tokens/reset/typography, shared components, section styles, then utilities.
- `js/main.js` starts navigation, renders the hero from `js/data/portfolio.js`, renders the global footer, and initializes scroll reveals.
- `js/components/navigation.js` creates the shared navigation markup and controls the mobile disclosure.
- `js/sections/hero.js` renders only the Hero content into the existing `#hero` section. `js/components/footer.js` renders the global footer into `#footer`.
- `js/utils/reveal.js` uses `IntersectionObserver` when available and shows content immediately for reduced-motion users or browsers without observer support.

## CSS responsibilities

- `base/reset.css`: box sizing, browser defaults, smooth-scroll baseline, and visible keyboard focus.
- `base/variables.css`: palette and semantic light/dark tokens, type, spacing, shape, shadow, layout, and motion values.
- `base/typography.css`: body/headings, selection, and basic form-control styles.
- `components/`: shared button, card, navigation, logo, and theme-toggle styles.
- `sections/`: styles scoped to each page section.
- `utilities/`: shared container/section layout, helper classes, and reveal states.

Use semantic tokens such as `--color-text`, `--color-surface-raised`, and `--color-border` for UI color. Keep literal values for palette definitions, decorative artwork, and precision details where a token would not add useful consistency.

## JavaScript conventions

- Keep portfolio content in `js/data/portfolio.js` and rendering/interaction in separate modules.
- Keep `main.js` as the small startup coordinator.
- Use native links for navigation and native buttons for actions.
- Add section modules or components only when they are implemented or genuinely reused.
- Use relative ES module paths with explicit `.js` extensions.

## Responsive and accessibility baseline

The shared container and section spacing use fluid values. Existing sections retain their own breakpoints; shared navigation adapts for small screens. Interactive elements use native semantics and visible `:focus-visible` styling. Reveal and theme transitions respect `prefers-reduced-motion`. Maintain useful contrast in both themes and verify keyboard operation as sections are added.

## Assets and content

Keep supplied assets in place unless usage is verified. Portfolio details belong in `js/data/portfolio.js`; do not invent projects, work history, skills, or contact links. Check asset references before adding them to rendered content. The current hero still has a profile-image placeholder and the CV file is not present in the repository.

## Run locally

Open the project folder in an editor and serve it with Live Server or another static HTTP server. Opening `index.html` using `file://` may prevent ES module loading.
