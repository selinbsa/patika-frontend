# POWERFULL — Fitness Landing Page

A single-page **fitness/gyms** landing site built with plain **HTML, CSS, and JavaScript**.  
It implements the required behaviors: sticky navbar with color change on scroll, section-anchored links, active “Our Classes” filter buttons, interactive **BMI Calculator** with pointer, **hover** preview on trainers, an **active Google Map embed**, and a mobile layout targeted at **≤ 576px**.

---

## 🚀 Quick Start

> Static project — no build step required.

**1) Keep this structure**
├── index.html
├── styles.css
├── script.js
└── assets/
├── logo.png
├── hero-man.jpg
├── yoga.jpg
├── group.webp
├── solo.jpg
├── stret.webp
├── bmi-index.jpg
├── trainer1.jpg
├── trainer2.jpg
├── trainer3.jpg
├── purchase1.jpg
├── purchase2.jpg
├── purchase3.jpg
└── purchase4.jpg

**2) Run locally**
- **Open directly:** double-click `index.html`.
- **VS Code Live Server (recommended):**
  1) Install *Live Server* extension  
  2) Right-click `index.html` → **Open with Live Server**


## ✨ Features

- **Sticky Navbar**  
  On scroll it gains `.scrolled` and background becomes `#355592`.

- **Section Anchors**  
  Navbar links navigate to sections by `id` (Home, Classes, Trainers, Review, Contact).  
  > Tip: “Join Us” points to `#contact` (or add your own `#join` section).

- **Our Classes — Active Filter Buttons**  
  Category chips toggle `is-active` and filter `.class-card[data-tag]` items with a fade-in effect.

- **Our Best Trainers — Hover Preview**  
  Cards show a name/role ribbon on hover. Touch devices get a JS “hover” simulation.

- **BMI Calculator (kg/cm)**  
  Formula: `BMI = kg / (m²)` from `#weight` (kg) and `#height` (cm).  
  A pointer (`.bmi-pointer`) moves along the BMI scale (clamped to 15–40).  
  The numeric result and category are rendered in `#bmi-result`.

- **Purchase Carousel**  
  When `data-autoscroll="true"` is present, the carousel auto-scrolls horizontally.

- **Active Google Map**  
  Real interactive Google Maps **iframe** (not a static image).

- **Accessibility**  
  - Primary nav has `aria-label`  
  - Class chips use `aria-pressed`  
  - BMI output area uses `aria-live="polite"`

---

## 🧩 Configuration

- **Theme variables**: `styles.css` → `:root { --brand, --accent, --accent-hero, … }`
- **Navbar scroll threshold**: `script.js` → `const threshold = 40;`
- **Carousel auto-scroll**: add/remove `data-autoscroll="true"` on the carousel wrapper.
- **Fixed-header offset** (avoid titles hidden under the sticky header):
  ```css
  :where(section[id]){ scroll-margin-top: 80px; }

## 📱 Responsive

Target mobile breakpoint: ≤ 576px
Grids collapse to one column (stats, cards, etc.).
The mobile menu uses a burger toggle.
Class images remain visible on mobile.

## 🛠️ Tech Stack

HTML5 (semantic sections)

CSS3 (Custom properties, Grid/Flex, responsive rules)

JavaScript (ES6+) (DOM interactions, scroll handling, lightweight animations)

## ✅ Requirement Checklist

 Understandable variable & function names

 Comments + this README

 Clean code style and indentation

 Layout & color scheme per brief

 Responsive for 576px

 BMI Calculator working + pointer movement

 Navbar sticky + background transition on scroll

 Navbar links anchored correctly

 Our Classes buttons active and filtering

 Trainers hover works on all three items

 Google Map is active (embed)

