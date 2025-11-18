# My Portfolio Website

[![Deploy](https://github.com/jayveebustarde/react-bootstrap-personal/actions/workflows/azure-deploy.yml/badge.svg)](https://github.com/jayveebustarde/react-bootstrap-personal/actions/workflows/azure-deploy.yml)

A personal portfolio website built with **React** and **Vite**, deployed to **Azure Static Web Apps** via **GitHub Actions**.

> Originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and later migrated to [Vite](https://vitejs.dev/) for faster dev server startup and improved build performance.

---

## 🚀 Tech Stack

- **Build Tool / Dev Server**: [Vite](https://vitejs.dev/)
- **Framework**: React
- **Routing**: [React Router DOM](https://github.com/remix-run/react-router)
- **UI Library**: [React Bootstrap](https://react-bootstrap.github.io/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons)
- **Timeline Component**: [React Chrono](https://github.com/prabhuignoto/react-chrono)
- **PDF Rendering**: [React PDF](https://github.com/wojtekmaj/react-pdf)
- **Email Integration**: [EmailJS](https://www.emailjs.com/)
- **Linting / Formatting**: ESLint + Prettier
- **CI/CD**: GitHub Actions → Azure Static Web Apps

---

## 🧑‍💻 Getting Started

### Prerequisites

- **Node.js**: ≥ 20 (matches the CI configuration)
- **npm** (or `pnpm` / `yarn` if you prefer)

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd <your-project-folder>

# Install dependencies
npm install
```

### Run in development mode
```bash
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

---

## 📦 Available Scripts
These scripts are defined in `package.json`:
- `npm run dev`
Starts the Vite dev server.

- `npm run build`
Creates a production build in the dist/ folder using vite build.

- `npm run preview`
Serves the built app locally to preview the production build.

- `npm test`
Runs the test suite (currently using the existing Jest setup / test runner configuration).

- `npm run lint`
Runs ESLint with the project’s configuration to check and optionally fix code style issues.

---

## 🗂 Project Structure (high level)
```text
src/
  components/
    ContactForm/
    FormInput/
    PfButton/
    ...
  routes/
    Home/
    Projects/
    ProjectDetails/
    Resume/
    Contact/
    NotFound/
  contexts/
    ProfileContext/
    ProjectContext/
    DarkModeContext/
  assets/
  styles/
  App.jsx
  main.jsx
```
- `routes/` – Page-level components used by React Router.
- `components/` – Reusable UI components (forms, buttons, cards, etc.).
- `contexts/` – React context providers for profile data, projects, and dark mode.
- `styles/` – Global and SCSS styles shared across the app.

---

## ✉️ EmailJS Configuration

The contact form uses EmailJS to send emails directly from the frontend.

You’ll need to configure your service ID, template ID, and public API key as environment variables (see `ContactForm` for exact usage). These are accessed via `import.meta.env`, consistent with Vite’s environment variable system.

>Make sure not to commit your secrets to version control. Use a `.env` file locally and configure environment variables in your hosting provider (Azure).

---

## ☁️ Deployment (Azure Static Web Apps)

Deployment is handled by GitHub Actions using the workflow file:
- `.github/workflows/azure-deploy.yml`

On every push to the `main` branch:

1. The Quality Check workflow (`quality-check.yml`) runs:
- `npm ci`
- `npm run build`
- `npm test`
- `npm run lint`

2. If all checks pass, the Build and Deploy job:
- Builds the app with Vite.
- Uploads the contents of the `dist/` folder to Azure Static Web Apps using `Azure/static-web-apps-deploy@v1`.

>If you change the output directory in vite.config, make sure output_location in azure-deploy.yml stays in sync.

---

## 🔧 Future Improvements
- Migrate the codebase to TypeScript.
- Replace Jest with Vitest for a Vite-native testing experience.
- Add more sections/animations/content to the portfolio as needed.