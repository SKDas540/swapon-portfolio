# Swapon Kumar Das — Portfolio

A responsive developer portfolio built with semantic HTML, CSS, and native JavaScript ES modules. It has no framework, package manager, or build step.

## Run locally

Serve the project root with VS Code Live Server or another static HTTP server, then open `index.html`. ES modules may not load when the page is opened directly with `file://`.

## Project structure

- `index.html` — semantic page shell, metadata, early theme selection, and stylesheet/module entry points.
- `css/base/` — reset, theme tokens, and typography/form foundations.
- `css/components/` — navigation, theme toggle, buttons, cards, section headings, social links, and brand mark.
- `css/sections/` — Hero, About, Skills, Projects, Services, Contact, and Footer styling.
- `css/utilities/` — fluid container, section spacing, and reduced-motion-aware reveals.
- `js/main.js` — startup coordinator.
- `js/data/portfolio.js` — personal information, section content, navigation, and link data.
- `js/components/` — shared renderers for navigation, footer, headings, cards, and social links.
- `js/sections/` — section-specific markup and contact form behavior.
- `js/utils/` — theme persistence and scroll reveal.
- `assets/icons/svg/` — supplied technology icons used by Skills.
- `assets/images/profile/Swapon 2.png` — profile image used in the Hero.
- `assets/images/projects/Dashboard.png` — supplied dashboard image used as a clearly labeled concept preview.
- `assets/UI-UX/` — visual references used for layout and composition.
- `assets/cv/` — CV instructions; a CV PDF is not currently supplied.

## Content and contact

Portfolio content is data-driven. The Projects area contains three clearly labeled dashboard concepts that reuse the supplied dashboard image; they are not presented as completed work. No live preview or GitHub links are shown because verified destinations are not available. The supplied technology icon files are used in Skills. The contact form validates fields and opens a prefilled email draft to the existing email address; it does not send or store messages on a server.

The profile photo is present and used in the Hero. A CV PDF and verified project links are not present. Replace the concept previews with verified project details and links when available.
