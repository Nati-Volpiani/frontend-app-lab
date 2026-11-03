# Frontend App Lab

**lab-store** is an e-commerce application project, starting with the frontend. It also serves as a practical environment for learning web development and testing.

## Current status

This branch includes the completed Issue 2 exercise: state, effects, and cleanup.

- The React + Vite project lives at the root of the repository.
- The project uses TypeScript. Components are `.tsx` files, and `ProductCard` has typed props (`name` is a string, `price` is a number).
- React Router is configured with `BrowserRouter`, `Routes`, and `Route`.
- Pages: Home (`/`), Shop (`/shop`), About (`/about`), Contact (`/contact`), Cart (`/cart`), and a Not Found page for any other URL. Shop includes an interactive product preview; About, Contact, and Cart show placeholder content.
- The `Navbar` and `Footer` are shared by all pages. The Home page shows the `HeroBanner` and `FeaturedProducts` components.
- `FeaturedProducts` uses `map()` on a local product array to render three `ProductCard` components, passing each product's name and price as props.
- The layout uses Flexbox. On narrow screens, the product cards stack vertically and the navigation links wrap, so nothing overflows horizontally (checked on a 375 px wide screen).

## Getting started

Requirements: [Node.js](https://nodejs.org/) 20.19+ or 22.12+ and [Yarn](https://yarnpkg.com/) 4.

From the `frontend-app-lab/` folder, run:

```bash
yarn install
yarn dev
```

Then open http://localhost:5173/ in a browser. Press `Ctrl + C` in the terminal to stop the development server.

To check the TypeScript types, run `yarn tsc`. No output means there are no type errors. `yarn build` also checks the types before building.

## Project structure

```
frontend-app-lab/
├── issues/          Sprint requirements and React guide (develop branch)
├── public/          Static files (favicon)
├── src/
│   ├── components/  Reusable UI components
│   ├── pages/       One component per page
│   ├── App.tsx      Routes
│   └── main.tsx     App entry point
├── index.html
├── package.json
├── tsconfig.json    TypeScript configuration
└── README.md
```

## Planned first sprint

- Build with React, Vite, TypeScript, React Router, and CSS.
- Create reusable navigation, banner, product card, and footer components.
- Add Home, Shop, About, Contact, Cart, and Not Found pages.
- Display three sample products and make the layout readable on mobile.

API integration, a functional cart, authentication, and checkout are outside the first sprint.

## Project documentation

Available on the `develop` branch:

- [Sprint 1 requirements](https://github.com/Nati-Volpiani/frontend-app-lab/blob/develop/issues/Junior_Store_Sprint_01_Issue.pdf)
- [React component guide](https://github.com/Nati-Volpiani/frontend-app-lab/blob/develop/issues/React_Components_Visual_Guide_01.pdf)

This README will be updated as the project develops and its scope evolves.

## Issue 2: state, effects, and cleanup

Exercise: [Issue 2 requirements](issues/Junior_Store_Sprint_02_Issue.pdf).

Run `yarn dev`, open `/shop`, and select **Open product**. Use **+** and **−** to change the quantity. The subtotal and browser title follow the quantity; the timer counts seconds while the preview is open. Closing the preview or navigating away clears its interval and restores the original title. Opening it again resets quantity to 1 and time to 0.

### Where to read the implementation

- `src/pages/Shop.tsx`: local visibility state and conditional rendering that mounts/unmounts the preview.
- `src/components/ProductPreview.tsx`: quantity and time state, a derived subtotal, and two independent effects.
- `src/components/ProductPreview/styles.module.scss` and `src/pages/Shop/styles.module.scss`: scoped styles, compiled with Sass. Shared tokens live in `src/index.css`.

The title effect depends on `[quantity]`. Its cleanup restores the previous title before the effect runs again and when the preview unmounts. The timer effect uses `[]` and a functional state update, so it does not capture an old counter value or restart on every tick. The subtotal is calculated during rendering and does not need an effect.

`StrictMode` stays enabled: development runs an extra setup/cleanup cycle to expose missing cleanup. A normal re-render preserves the preview's state; removing the component and mounting a new instance resets it.

### Manual checks

1. Open the preview: quantity 1, subtotal $49, timer starting at 0, and **−** disabled.
2. Increase to 3: subtotal $147 and title `Shop | 3 unidades`. Decrease repeatedly: quantity never goes below 1. Quantity changes must not reset the timer.
3. Close and reopen three times, waiting a few seconds each time. Each opening resets the state and the timer must not accelerate.
4. Navigate to Home using Navbar while the preview is open. The title must be restored; returning to Shop starts with the preview closed.
5. To inspect cleanup, temporarily log inside the interval callback and cleanup function. After closing or navigating away, no more interval callbacks should run. Remove diagnostic logs when finished.
6. Check keyboard controls, visible focus, and a narrow mobile viewport. Run `yarn lint` and `yarn build`.

The project pins Yarn 4.18.1 in `package.json`. If your default Yarn is version 1, use `corepack yarn` in place of `yarn` for install, dev, lint, and build commands; Corepack selects the pinned version. Keep the existing Yarn 4 lockfile.
