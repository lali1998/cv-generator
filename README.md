# CV Generator

CV Generator is an Angular 21 starter application for building a CV generator. It is set up with Angular Material, Tailwind CSS, SCSS design tokens, Transloco, NgRx, Prettier, and ESLint so developers can focus on extending the product instead of configuring the toolchain from scratch.

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 21.2.12 and uses npm as the package manager.

## Tech Stack

- Angular 21 with standalone application configuration.
- Angular Material and CDK for UI components.
- Tailwind CSS v4 and SCSS for styling.
- Transloco for internationalization.
- NgRx Store, Effects, and Store Devtools for application state management.
- ESLint, Prettier, and simple import sorting for code quality.

## Prerequisites

Before working on the project, make sure the following tools are installed:

- [Node.js](https://nodejs.org/) compatible with Angular 21.
- npm. This repository is configured with `npm@11.13.0`.
- [Angular CLI](https://github.com/angular/angular-cli) 21.x. You can run it through npm scripts or install it globally:

```bash
npm install -g @angular/cli
```

## Installation

Clone the repository, enter the project folder, and install the dependencies:

```bash
git clone <repository-url>
cd cv-generator
npm install
```

## Development Server

Start the local development server with:

```bash
npm start
```

This runs `ng serve`. Open [http://localhost:4200/](http://localhost:4200/) in your browser. The app automatically reloads when you change source files.

## Available Scripts

- `npm start` starts the Angular development server.
- `npm run build` creates a production build in `dist/`.
- `npm run watch` runs a development build in watch mode.
- `npm run lint` runs ESLint checks.
- `npm run lint:fix` runs ESLint and applies automatic fixes.
- `npm run format` checks formatting with Prettier.
- `npm run format:fix` formats files with Prettier.

## Internationalization

Translations live in `public/i18n/`.

- `en.json` contains English translations.
- `hu.json` contains Hungarian translations.

The default and fallback language is English. Components can use Transloco through the configured pipe or service, depending on the use case.

## State Management

NgRx is installed and configured at the application root.

- Add global reducers through `provideStore(...)` in `src/app/config/app.config.ts` when app-wide state is needed.
- Add global effects through `provideEffects(...)`.
- Prefer feature state for isolated domains as the application grows.
- Use Store Devtools during development to inspect state changes.

## Code Scaffolding

Use Angular CLI generators to add new building blocks in a consistent way:

```bash
ng generate component components/component-name
ng generate service services/service-name
ng generate directive directives/directive-name
ng generate pipe pipes/pipe-name
```

The project configures generated components with `OnPush` change detection and block display by default.

## Build

Create a production build with:

```bash
npm run build
```

This runs `ng build` using the production configuration. Build artifacts are generated in the `dist/` directory.

For a development watch build, use:

```bash
npm run watch
```

## Linting and Formatting

Run the lint checks with:

```bash
npm run lint
```

The project uses ESLint flat config with Angular ESLint, TypeScript ESLint, Prettier compatibility, and simple import sorting.

Prettier is configured with `prettier-plugin-tailwindcss` for automatic Tailwind class sorting.

Check formatting with:

```bash
npm run format
```

Apply automatic formatting with:

```bash
npm run format:fix
```

## Installed Tools

- Angular Material and CDK for ready-made UI components.
- Angular Animations for Material component animations.
- Tailwind CSS v4 with PostCSS integration.
- Sass for global and component-level SCSS files.
- Transloco for runtime translations.
- NgRx Store, Effects, and Store Devtools for state management.
- ESLint and Prettier for code quality and formatting.

## Additional Angular CLI Help

Run the following command for more Angular CLI commands and options:

```bash
ng help
```

You can also read the official [Angular CLI documentation](https://angular.dev/tools/cli).
