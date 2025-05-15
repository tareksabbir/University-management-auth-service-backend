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

VS Code settings are included to ensure a consistent development experience:

* Automatically fix ESLint issues on save.
* Automatically organize imports on save.

## API Documentation

### Request Processing Pipeline

The API follows a standardized request processing pipeline:

1. **Request Reception**: Handled by Express middleware.
2. **Routing**: Directed to the appropriate controller.
3. **Validation**: Request data validated using Zod schemas.
4. **Controller Processing**: Controller processes the request and calls the service layer.
5. **Service Layer**: Performs business logic and database operations.
6. **Response**: Formatted and sent back to the client.

### Response Format

All API responses follow a consistent format:

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Operation successful",
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100
  },
  "data": {}
}
```

## Development

### Available Scripts

* `yarn start`: Start the development server with auto-reload.
* `yarn lint:check`: Check for linting issues.
* `yarn lint:fix`: Fix linting issues.
* `yarn prettier:check`: Check for formatting issues.
* `yarn prettier:fix`: Fix formatting issues.
* `yarn lint-prettier`: Run both linting and formatting checks.

### Development Workflow

1. **Code Development**: Write code in TypeScript following the project structure.
2. **Code Quality Checks**: Run linting and formatting checks before committing.
3. **Git Hooks**: Utilize Git hooks to ensure code quality.
4. **Modular Architecture**: Follow the modular architecture for adding new features.

## Error Handling

The project implements a comprehensive error handling system:

* **Custom ApiError Class**: For application-specific errors.
* **Centralized Error Handling Middleware**: For consistent error responses.
* **Standardized Error Response Format**: Ensures uniformity in error messages.
* **Validation Error Handling with Zod**: Provides clear feedback on validation errors.

## Logging

Winston is used for logging with the following features:

* **Separate Logs**: Distinct logs for errors and successes.
* **Daily Log Rotation**: Maintains log files efficiently over time.
* **Structured Log Format**: Includes timestamps and labels for clarity.

## Contributing

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

