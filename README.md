# Frontend App Lab

**Junior Store** is an e-commerce application project, starting with the frontend. It also serves as a practical environment for learning web development and testing.

## Current status

Sprint 1 is in progress.

- The React + Vite project has been initialized in `junior-store/`.
- React Router is configured with `BrowserRouter`, `Routes`, and `Route`.
- Pages: Home (`/`), Shop (`/shop`), About (`/about`), Contact (`/contact`), Cart (`/cart`), and a Not Found page for any other URL. Shop, About, Contact, and Cart show placeholder content.
- The `Navbar` and `Footer` are shared by all pages. The Home page shows the `HeroBanner` and `FeaturedProducts` components.
- `FeaturedProducts` uses `map()` on a local product array to render three `ProductCard` components, passing each product's name and price as props.
- The layout uses Flexbox. On narrow screens, the product cards stack vertically and the navigation links wrap, so nothing overflows horizontally (checked on a 375 px wide screen).

## Getting started

Requirements: [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (npm is included).

```bash
cd junior-store
npm install
npm run dev
```

Then open http://localhost:5173/ in a browser. Press `Ctrl + C` in the terminal to stop the development server.

## Project structure

```
frontend-app-lab/
├── issues/          Sprint requirements and React guide (develop branch)
├── junior-store/    React + Vite application
└── README.md
```

## Planned first sprint

- Build with React, Vite, JavaScript, React Router, and CSS.
- Create reusable navigation, banner, product card, and footer components.
- Add Home, Shop, About, Contact, Cart, and Not Found pages.
- Display three sample products and make the layout readable on mobile.

API integration, a functional cart, authentication, and checkout are outside the first sprint.

## Project documentation

Available on the `develop` branch:

- [Sprint 1 requirements](https://github.com/Nati-Volpiani/frontend-app-lab/blob/develop/issues/Junior_Store_Sprint_01_Issue.pdf)
- [React component guide](https://github.com/Nati-Volpiani/frontend-app-lab/blob/develop/issues/React_Components_Visual_Guide_01.pdf)

This README will be updated as the project develops and its scope evolves.
