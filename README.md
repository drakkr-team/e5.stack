<div align="center">

# ⚡ e5.stack

**A modern, hyper-optimized TypeScript monorepo.**

[![Node.js](https://img.shields.io/badge/Node.js-24.x-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![pnpm](https://img.shields.io/badge/pnpm-10.33.2-f69220?style=for-the-badge&logo=pnpm&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![AdonisJS](https://img.shields.io/badge/AdonisJS-220052?style=for-the-badge&logo=AdonisJS&logoColor=white)](#)
[![TanStack](https://img.shields.io/badge/TanStack_Start-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)](#)
[![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)](#)
[![CI Status](https://img.shields.io/badge/CI-Passing-success?style=for-the-badge&logo=githubactions&logoColor=white)](#)

*End-to-end type safety, domain-driven API architecture, and a beautifully modular UI.*

</div>

---

## ✨ Features

- **End-to-End Type Safety:** Fully typed API integration utilizing **Tuyau**, linking AdonisJS with the TanStack Start frontend.
- **Robust Backend:** Feature-first AdonisJS API equipped with user management, secure authentication, and session handling.
- **Modern Web App:** TanStack Start framework powering a lightning-fast React frontend with file-based routing.
- **Shared UI Architecture:** Independent UI packages for Storybook-backed React components and generated Tailwind theme tokens.
- **Global Ready:** Built-in internationalization (i18n) compilation, proudly featuring a native French (`fr`) locale out of the box.
- **Developer Experience:** Blazing fast tasks with Turborepo, unified linting/formatting via Biome, and seamless Docker integration for local databases.

---

## 🏗️ What's Inside?

The repository utilizes a Turborepo + pnpm workspace structure:

```text
e5.stack/
├── apps/
│   ├── api/                 # ⚙️ AdonisJS backend API (feature-first architecture)
│   └── web/                 # 🌐 TanStack Start web frontend (Tuyau client, i18n)
├── packages/
│   └── ui/
│       ├── react/           # 🧩 Storybook-backed shared React component library
│       └── theme/           # 🎨 Theme token source & generated Tailwind CSS
├── biome.json               # ✨ Biome configuration (Formatting & Linting)
├── package.json             # 📦 Root workspace & Turbo script definitions
├── pnpm-workspace.yaml      # 🔗 pnpm workspace configuration
└── turbo.json               # 🚀 Turborepo task graph definitions
```

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core** | TypeScript, Node.js 24, pnpm 10.33.2 |
| **Backend** | AdonisJS, Tuyau, Japa (Testing) |
| **Frontend** | React, TanStack Start, TanStack Form, TanStack Router |
| **Styling & UI** | Tailwind CSS, Storybook |
| **Tooling** | Turborepo, Biome, Docker, GitHub Actions |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** `v24.x` (Strictly enforced via `.npmrc`)
- **pnpm** `v10.33.2`
- **Docker & Docker Compose** (for local database services)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/e5.stack.git
   cd e5.stack
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development environment:**
   ```bash
   # This boots up the entire stack (API + Web App + Storybook + sidecar DB)
   pnpm dev
   ```

> **Note:** The API relies on a Docker Compose sidecar task. Ensure Docker daemon is running before executing `pnpm dev`.

---

## 💻 Development Commands

The workspace leverages Turborepo for optimized task execution. Run these from the root directory:

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the entire application stack in development mode. |
| `pnpm build` | Compiles and builds all apps and packages. |
| `pnpm typecheck` | Runs TypeScript type checking across the workspace. |
| `pnpm test` | Executes backend test suites. |
| `pnpm code-quality` | Runs Biome linting and formatting checks. |
| `pnpm code-quality:fix`| Auto-fixes linting and formatting issues using Biome. |
| `pnpm adonis` | Forwards commands to the AdonisJS Ace CLI. |

### Targeted Execution

If you only want to work on a specific part of the stack, use pnpm's `--filter` flag:

```bash
pnpm --filter @workspace/api dev        # Run only the API
pnpm --filter @workspace/web dev        # Run only the Web App
pnpm --filter @workspace/ui-react dev   # Start Storybook for UI development
pnpm --filter @workspace/ui-theme generate:tailwind # Regenerate Tailwind tokens
```

---

## 🧠 Architecture Notes

<details>
<summary><strong>🔍 Expand to read detailed architecture guidelines</strong></summary>

### Backend (AdonisJS)
- **Domain-Driven Layout:** Instead of flat controller/service trees, logic is grouped by domain (e.g., `src/features/user_management`).
- **Security:** JSON-only API behavior is strictly enforced via `force_json_response.middleware.ts`. Do not send HTML responses from the exception handler.
- **Generated Code:** Do not manually edit artifacts like `ace.js` or items in `.adonisjs/`.

### Frontend (TanStack Start)
- **Routing:** TanStack Router uses file-based routing (`layout.tsx`, `page.tsx`). `routeTree.gen.ts` is automatically generated—do not edit it manually.
- **Data Fetching:** Handled by a QueryClient-backed router paired with Tuyau (`src/libs/tuyau.ts`) to achieve end-to-end typed queries and mutations against the AdonisJS API.
- **i18n:** Localization strings live in `src/**/locales/*.json`. The build script compiles these into `src/libs/i18n/build/`. French (`fr`) is the default/provided language module.

### UI & Theming
- **Separation of Concerns:** `packages/ui/react` contains layout primitives and components. `packages/ui/theme` is the single source of truth for design tokens (`tokens.ts`).
- **Tailwind Workflow:** Edit tokens first, then regenerate `tailwind.css` using `pnpm --filter @workspace/ui-theme generate:tailwind`. Never hand-edit the generated CSS.
- **Component Standard:** UI component folders follow a standard structure: `component.tsx`, `index.ts`, and `component.stories.tsx`.

</details>

---

## 🤝 Contributing

We welcome contributions! Please follow our established workflows:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Follow our formatting standards (`pnpm code-quality:fix`)
3. Ensure types compile (`pnpm typecheck`)
4. Commit your changes (we recommend atomic commits following conventional commits)
5. Push to the branch and open a Pull Request

---

## 📄 License

This project is proprietary and confidential.  
*(Replace this section with an open-source license like MIT if public)*

<div align="center">
  <i>Built with ❤️ using pnpm, Turbo, and the modern web stack.</i>
</div>
