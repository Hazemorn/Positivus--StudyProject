<h1 align="center">Positivus</h1> 
  
---

## 📝 Description
The Positivus Application is a study project designed to showcase a modern, responsive landing page for a creative agency, built to practice React, TypeScript, and semantic HTML/CSS layouts. The project features a fully adaptive design, ensuring a seamless user experience across all devices, from desktop monitors to mobile phones.


---

## Screenshot-desktop

<img width="3280" height="16384" alt="positivusScreen" src="https://github.com/user-attachments/assets/6e4ad5c3-fe8b-47c3-8e04-9e2152d3d07a" />

---

## Screencast-mobile


https://github.com/user-attachments/assets/acd2b85f-0875-45f2-b9ba-9d842b98b819


---

## 🔗 Links
[https://www.figma.com/design/ODvu3zvuKToCLy4mwq5JfI/Wishbone?node-id=0-1&t=UlrN4biMI55IEUPj-1](https://www.figma.com/design/rGUpGAknO0cJg7wqd5LrXZ/Positivus-Landing-Page-Design--Community-?m=auto&is-community-duplicate=1&fuid=1156643371164916087)

---

## GitHub Pages for a live demo preview
https://hazemorn.github.io/Positivus--StudyProject/

---

## 🛠️ Tech Stack
- React Vite
- SASS, BEM
- TypeScript

---

## ⏳ In Progress (Roadmap)

- [ ] Optimize and refactor CSS code for better maintainability.





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
