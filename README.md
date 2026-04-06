# dev.folio — React Portfolio

Hero slider portfolio built with React + Vite.  
Internship project — Hasnain Karimain Educational Academy.

## Tech Stack
- React 18
- Vite 5
- CSS Modules
- No UI library — pure custom CSS

---

## Setup & Run

### 1. Install Node.js
Download from https://nodejs.org (LTS version recommended)
Verify install:
```
node -v
npm -v
```

### 2. Clone or unzip the project
```
cd react-portfolio
```

### 3. Install dependencies
```
npm install
```

### 4. Start development server
```
npm run dev
```
Open http://localhost:5173 in your browser.

### 5. Build for production
```
npm run build
```
This creates a `dist/` folder with the final optimised files.

### 6. Preview production build locally
```
npm run preview
```

---

## Deploy to GitHub Pages

### Step 1 — Install gh-pages
```
npm install --save-dev gh-pages
```

### Step 2 — Update vite.config.js
Add `base` with your repo name:
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

### Step 3 — Add deploy scripts to package.json
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 4 — Push to GitHub and deploy
```
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
npm run deploy
```

### Step 5 — Enable GitHub Pages
Go to your repo → Settings → Pages → Source: `gh-pages` branch → Save.

Your site will be live at:
https://your-username.github.io/your-repo-name/

---

## Project Structure

```
react-portfolio/
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    ├── data/
    │   ├── slides.js
    │   └── services.js
    └── components/
        ├── Navbar.jsx
        ├── Navbar.module.css
        ├── HeroSlider.jsx
        ├── HeroSlider.module.css
        ├── Services.jsx
        ├── Services.module.css
        ├── About.jsx
        ├── About.module.css
        ├── CTA.jsx
        ├── CTA.module.css
        ├── Footer.jsx
        └── Footer.module.css
```

## Customisation
- Edit slide content in `src/data/slides.js`
- Edit services in `src/data/services.js`
- Change colours in `src/styles/global.css` (CSS variables)
