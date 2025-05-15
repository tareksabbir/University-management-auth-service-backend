[![Strong Authentication System Architecture](https://images.openai.com/thumbnails/d56a1a2d526c556f190049295aeeef98.png)](https://techdocs.broadcom.com/us/en/symantec-security-software/identity-security/advanced-authentication/9-1/getting-started/introduction-to-ca-strong-authentication/understanding-the-basics/ca-strong-authentication-system-architecture.html)

Certainly! Here's a more detailed and descriptive documentation for your University Management Auth Service Backend:

---

# University Management Auth Service Backend

A robust and scalable backend service designed for university management systems, focusing on authentication and authorization functionalities. Built with modern technologies and adhering to best practices, this service ensures secure and efficient management of user identities and academic data.

## Overview

The University Management Auth Service Backend is a Node.js application developed using TypeScript, Express.js, and MongoDB. It provides comprehensive authentication and authorization services tailored for university management systems, handling user roles, academic data, and related operations with precision and reliability.

## Features

* **User Authentication and Authorization**: Secure login and role-based access control for Admins, Students, and Faculty members.
* **Academic Semester Management**: CRUD operations for managing academic semesters.
* **RESTful API Architecture**: Clean and organized API endpoints following REST principles.
* **Input Validation**: Robust request validation using Zod schemas to ensure data integrity.
* **Error Handling**: Centralized and consistent error handling mechanism for better debugging and user feedback.
* **Logging**: Detailed logging of application events and errors using Winston.
* **Code Quality Tools**: Integration of ESLint and Prettier for maintaining code consistency and quality.
* **Development Tools**: Utilization of Husky and lint-staged for pre-commit checks, and ts-node-dev for efficient development workflow.

## Technology Stack

### Core Technologies

* **Node.js**: JavaScript runtime environment for building scalable network applications.
* **TypeScript**: Superset of JavaScript that adds static typing.
* **Express.js**: Minimal and flexible Node.js web application framework.
* **MongoDB**: NoSQL database for storing application data.
* **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

### Development Tools

* **ESLint**: Pluggable linting utility for JavaScript and TypeScript.
* **Prettier**: Opinionated code formatter.
* **Husky**: Git hooks for enforcing code quality checks.
* **lint-staged**: Run linters on staged git files.
* **ts-node-dev**: TypeScript execution environment with auto-reload.

### Utility Libraries

* **Zod**: TypeScript-first schema declaration and validation library.
* **Winston**: Versatile logging library.
* **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
* **dotenv**: Module to load environment variables from a .env file.
* **http-status**: Utility to manage HTTP status codes.

## Prerequisites

* **Node.js**: Version 14 or higher.
* **npm or yarn**: Package managers.
* **MongoDB**: Local instance or MongoDB Atlas account.
* **Git**: Version control system.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tareksabbir/University-management-auth-service-backend.git
   cd University-management-auth-service-backend
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory with the following content:

   ```
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=mongodb://127.0.0.1:27017/university-management
   DEFAULT_USER_PASS=university123
   ```

4. **Start the development server**:

   ```bash
   yarn start
   # or
   npm start
   ```

## Project Structure

```
university-management-auth-service-backend/
├── src/
│   ├── app/
│   │   ├── middlewares/
│   │   └── modules/
│   │       └── academicSemester/
│   │           ├── academicSemester.constant.ts
│   │           ├── academicSemester.controller.ts
│   │           ├── academicSemester.interface.ts
│   │           ├── academicSemester.model.ts
│   │           ├── academicSemester.route.ts
│   │           ├── academicSemester.service.ts
│   │           └── academicSemester.validation.ts
│   ├── config/
│   ├── errors/
│   ├── helpers/
│   ├── interfaces/
│   ├── shared/
│   ├── app.ts
│   └── server.ts
├── logs/
│   └── winston/
│       ├── errors/
│       └── successes/
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .husky/
├── .prettierrc
├── .vscode/
├── package.json
└── tsconfig.json
```

## Configuration

### TypeScript Configuration

Key configurations in `tsconfig.json` include:

* **Target**: ES2016
* **Module System**: CommonJS
* **Root Directory**: `./src`
* **Output Directory**: `./dist`
* **Strict Mode**: Enabled

### ESLint Configuration

ESLint is configured with the following key rules:

* Disallow unused variables.
* Prefer `const` over `let` when variables are not reassigned.
* Disallow unused expressions.
* Disallow undefined variables.
* Warn against the use of `console.log`.
* Enforce consistent type definitions.

### Prettier Configuration

Prettier settings include:

* Use semicolons at the end of statements.
* Use single quotes for strings.
* Omit parentheses around single parameter arrow functions.

### Git Hooks with Husky

Husky is set up to run code quality checks before commits, utilizing lint-staged to execute linting and formatting on staged files.

### VS Code Configuration


### Utility Libraries

* **Zod** – Validation
* **Winston** – Logging
* **CORS Middleware** – Cross-Origin Resource Sharing
* **dotenv** – Environment variable management
* **http-status** – HTTP status code constants

### Development Tools

* **ESLint**
* **Prettier**
* **Husky Git Hooks**
* **lint-staged**
* **ts-node-dev**

### Project Core Technologies

* **Node.js**
* **TypeScript**
* **Express.js Framework**
* **Mongoose ODM**
* **MongoDB Database**

**Sources:**

* `package.json` (lines 1–44)
* `tsconfig.json` (lines 1–112)

## 2. Package Configuration

The project uses npm/yarn for package management. The `package.json` file defines the project metadata, dependencies, and scripts.

### 2.1 Core Dependencies

| Dependency  | Version | Purpose                                  |
| ----------- | ------- | ---------------------------------------- |
| express     | ^4.18.2 | Web framework for handling HTTP requests |
| mongoose    | ^7.2.1  | MongoDB object modeling tool             |
| zod         | ^3.21.4 | Schema validation library                |
| winston     | ^3.9.0  | Logging library                          |
| cors        | ^2.8.5  | CORS middleware for Express              |
| dotenv      | ^16.0.3 | Environment variable management          |
| http-status | ^1.6.2  | HTTP status code constants               |

### 2.2 Development Dependencies

| Dependency  | Version | Purpose                                           |
| ----------- | ------- | ------------------------------------------------- |
| typescript  | ^5.0.4  | TypeScript compiler                               |
| ts-node-dev | ^2.0.0  | TypeScript execution environment with auto-reload |
| eslint      | ^8.42.0 | Linting tool                                      |
| prettier    | ^2.8.8  | Code formatting tool                              |
| husky       | ^8.0.3  | Git hooks management                              |
| lint-staged | ^13.2.2 | Run linters on staged files                       |
| @types/\*   | various | TypeScript type definitions                       |

### 2.3 NPM Scripts

```json
"start": "ts-node-dev --respawn --transpile-only src/server.ts",
"lint:check": "eslint --ignore-path .eslintignore --ext .js,.ts .",
"lint:fix": "eslint . --fix",
"prettier:check": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\"",
"prettier:fix": "prettier --write .",
"lint-prettier": "yarn lint:check && yarn prettier:check"
```

**Sources:**

* `package.json` (lines 5–14, 18–27, 31–43)

## 3. TypeScript Configuration

The project uses TypeScript for type safety and better developer experience. The `tsconfig.json` file defines how TypeScript compiles the code.

### 3.1 Key TypeScript Configuration Options

**Compiler Options:**

* `target`: es2016
* `module`: commonjs
* `rootDir`: ./src
* `outDir`: ./dist
* `strict`: true
* `esModuleInterop`: true
* `skipLibCheck`: true

**Include/Exclude Patterns:**

* `include`: \["src"]
* `exclude`: \["node\_modules"]

**Sources:**

* `tsconfig.json` (lines 2–109)

## 4. Code Quality Tools

### 4.1 ESLint Configuration

* **Parser**: `@typescript-eslint/parser`
* **Plugins**: `@typescript-eslint`
* **Extends**:

  * `eslint:recommended`
  * `plugin:@typescript-eslint/recommended`
  * `prettier`
* **Custom Rules**:

  * `no-unused-vars`: error
  * `prefer-const`: error
  * `no-unused-expressions`: error
  * `no-undef`: error
  * `no-console`: warn
  * `@typescript-eslint/consistent-type-definitions`: \["error", "type"]

**Ignored Directories**: `node_modules`, `dist`

### 4.2 Prettier Configuration

```json
{
  "semi": true,
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

* Semicolons at the end of statements
* Single quotes for strings
* No parentheses around single parameter arrow functions

### 4.3 Git Hooks with Husky

**.husky/pre-commit**

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint-staged
```

**lint-staged Configuration** (in `package.json`):

```json
"lint-staged": {
  "src/**/*.ts": "yarn lint-prettier"
}
```

**Sources:**

* `.eslintrc` (lines 1–30)
* `.husky/pre-commit` (lines 1–5)
* `.prettierrc` (lines 1–5)
* `.eslintignore` (lines 1–4)
* `package.json` (lines 28–30)

## 5. VS Code Configuration

`.vscode/setting.json` includes:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  }
}
```

This configuration ensures:

* ESLint issues are fixed on save
* Imports are auto-organized

**Sources:**

* `.vscode/setting.json` (lines 1–6)

## 6. Environment Configuration

* Uses `dotenv` for environment variables
* `.env` is ignored in `.gitignore`

**Sources:**

* `.gitignore` (lines 1–2)
* `package.json` (line 35)

## 7. Project Structure and Development Workflow

### Development Workflow Diagram:

```mermaid
graph TD
Developer --> VSCode[Edit Code in VS Code]
VSCode --> Husky[Pre-Commit Hook]
Husky --> LintStaged[Lint-Staged]
LintStaged --> ESLint[ESLint Check]
LintStaged --> Prettier[Prettier Format]
ESLint --> Git[Git Commit]
Prettier --> Git
Git --> Push[Push to Repository]
Push --> Server[Run Development Server]
Server --> TSC[TypeScript Compiler]
TSC --> Node[Node.js Runtime]
Node --> Express[Express Application]
```

**Sources:**

* `package.json` (lines 5–14, 28–30)
* `.husky/pre-commit` (lines 1–5)

## 8. Additional Configuration

### 8.1 Error Handling Configuration

The interface `IGenericErrorMessage` defines standardized error messages.

```ts
export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
```

Used in `handleZodError.ts` to format Zod validation errors.

**Sources:**

* `src/interfaces/error.ts` (lines 1–4)
* `src/errors/handleZodError.ts` (lines 1–22)

### 8.2 Logging Configuration

* Uses **Winston** for advanced logging
* Log files stored in `logs/winston/`
* Supports daily log rotation (e.g., `error-2023-14-07-00.log` format)

---

This completes the detailed documentation of the University Management Auth Service backend project.


1. **Fork the Repository**: Create a personal copy of the repository.
2. **Create a Feature Branch**:

   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit Your Changes**:

   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the Branch**:

   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**: Submit your changes for review.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Author

**Tarek Sabbir**

