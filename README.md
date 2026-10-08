# Swapon Kumar Das — Portfolio

A modern responsive portfolio built with pure:

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)

## Architecture

The project uses a small component-based structure without a framework.

### HTML
`index.html` contains the semantic page shell and section mount points.

### CSS
- `css/base/` — reset, variables, typography
- `css/components/` — reusable UI components
- `css/sections/` — section-specific styles
- `css/utilities/` — helper classes
- `css/main.css` — imports the complete stylesheet

### JavaScript
- `js/main.js` — startup coordinator
- `js/data/` — portfolio content/data
- `js/components/` — active shared navigation and footer modules
- `js/sections/` — implemented section renderers (currently Hero)
- `js/utils/` — theme state and scroll-reveal behavior

### Assets
Keep images, icons and decorative graphics separated so they can be replaced easily.

## Run

Recommended:
1. Open the folder in VS Code.
2. Use Live Server.
3. Open `index.html`.

Because JavaScript uses ES modules, do not rely on opening the HTML with `file://`.

## Page sections

1. Header / Navbar
2. Hero
3. About
4. Skills
5. Projects
6. Services
7. Contact
8. Footer

About, Skills, Projects, Services, and Contact mount points and CSS files are prepared for later implementation. The current Hero is rendered from portfolio data; the footer and navigation are shared components.

## Development rule

Keep content/data separate from UI logic. Avoid putting large amounts of HTML, CSS, or portfolio data inside one JavaScript file.
