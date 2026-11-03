# Frontend App Lab

**lab-store** is an e-commerce application project, starting with the frontend. It also serves as a practical environment for learning web development and testing.

## Current status

This branch contains the approved Issue 2 implementation: product details, gallery state, quantity, and title cleanup. The PDF describes the same exercise.

- The React + Vite project lives at the root of the repository.
- The project uses TypeScript. Components are `.tsx` files, and `ProductCard` receives a typed `Product` object.
- React Router is configured with `BrowserRouter`, `Routes`, and `Route`.
- Pages: Home (`/`), Shop (`/shop`), About (`/about`), Contact (`/contact`), Cart (`/cart`), and a Not Found page for any other URL. Product details live at `/products/:productId`. Shop is intentionally empty; About, Contact, and Cart show placeholder content.
- The `Navbar` and `Footer` are shared by all pages. The Home page shows the `HeroBanner` and `FeaturedProducts` components.
- `FeaturedProducts` uses `map()` on a local product array to render three `ProductCard` components, passing each product as a prop. Each card links to its details page.
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

Available in `issues/`:

- [Sprint 1 requirements](issues/Store_Sprint_01_Issue.pdf)
- [React component guide](issues/React_Components_Visual_Guide_01.pdf)

This README will be updated as the project develops and its scope evolves.

## Issue 2: product details

Start at `/` and click **Sweater**, **T-Shirt**, or **Leather Bag**. Each opens its own detail URL with a description, product photos, quantity controls, and a calculated subtotal. Selecting a thumbnail changes the main photo without changing the quantity. **Back to products** returns to Home. `/shop` is intentionally empty.

The [Issue 2 visual guide](issues/Store_Sprint_02_Issue.pdf) explains Home and product details with real screenshots and code excerpts, then shows how useState updates the UI and why useEffect synchronizes and restores the browser title.

### Where to read the implementation

- `src/data/products.ts`: shared local product data and image paths.
- `src/components/ProductCard.tsx`: linked product cards on Home.
- `src/pages/ProductDetails.tsx`: finds the product from the URL, handles unknown products, and gives each product its own component instance with `key`.
- `src/components/ProductPreview.tsx`: the detail content, selected photo and quantity state, derived subtotal, and the document title effect.
- Component SCSS Modules: scoped styles using shared tokens from `src/index.css`.

Photo selection and quantity changes are event handlers using `useState`. The subtotal is calculated during rendering. `useEffect` synchronizes the browser title with the product name and restores the previous title when the detail unmounts. `StrictMode` stays enabled. There is no timer.

### Manual checks

1. Open each product from Home and confirm its URL, description, photos, and price ($49, $25, $89).
2. Select every thumbnail: the main photo changes and the selected button is highlighted. There are two photos for the sweater and T-shirt and three for the bag.
3. Increase quantity to 3: subtotals should be $147, $75, and $267. Decrease repeatedly: the minimum is 1.
4. Change photos after changing quantity: quantity and subtotal stay the same.
5. Return Home and open another product: quantity starts at 1 and its first photo is selected. The browser title is restored when leaving the detail.
6. Refresh a detail URL, try browser back/forward, and visit `/products/unknown` to check the not-found page.
7. Visit `/shop`: only shared navigation and footer remain. Check keyboard controls and mobile layout. Run `corepack yarn lint` and `corepack yarn build`.

### Demo photo sources

Local photos under `public/products` come from [H&M's sweater listing](https://www2.hm.com/en_us/productpage.1321617001.html), [H&M's T-shirt listing](https://www2.hm.com/en_us/productpage.1262644004.html), and [Barakti's leather bag listing](https://barakti.com/brown-leather-duffle-weekender-bag). Product names, prices, and descriptions in this app are sample catalog data for the exercise.

The project pins Yarn 4.18.1 in `package.json`. If your default Yarn is version 1, use `corepack yarn` in place of `yarn` for install, dev, lint, and build commands; Corepack selects the pinned version. Keep the existing Yarn 4 lockfile.
