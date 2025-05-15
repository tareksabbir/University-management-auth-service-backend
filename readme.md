# University Management Auth Service Backend

A comprehensive backend service for university management authentication, built with modern technologies and best practices.

## Overview

The University Management Auth Service Backend is a Node.js application built with TypeScript, Express, and MongoDB. It provides authentication and authorization services for a university management system, handling user management, academic data, and related operations.

## Features

- User authentication and authorization
- Academic semester management
- RESTful API architecture
- Comprehensive error handling
- Request validation using Zod
- Logging with Winston
- TypeScript for type safety
- Consistent code style with ESLint and Prettier

## Technology Stack

### Core Technologies
- **Node.js** - JavaScript runtime
- **TypeScript** - Typed JavaScript
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files
- **ts-node-dev** - TypeScript execution with auto-reload

### Utility Libraries
- **Zod** - Schema validation
- **Winston** - Logging
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management
- **http-status** - HTTP status code constants

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/tareksabbir/University-management-auth-service-backend.git
cd University-management-auth-service-backend
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb://127.0.0.1:27017/university-management
DEFAULT_USER_PASS=university123
```

4. Start the development server:
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

The project uses TypeScript for type safety. Key configurations in `tsconfig.json` include:
- Target: ES2016
- Module System: CommonJS
- Root Directory: `./src`
- Output Directory: `./dist`
- Strict Mode: Enabled

### ESLint Configuration

ESLint is configured to enforce coding standards with the following key rules:
- No unused variables
- Prefer const over let when possible
- No unused expressions
- No undefined variables
- Warning for console logs
- Consistent type definitions

### Prettier Configuration

Prettier ensures consistent code formatting with the following settings:
- Semicolons at the end of statements
- Single quotes for strings
- No parentheses around single parameter arrow functions

### Git Hooks with Husky

The project uses Husky to run code quality checks before commits, configured to run lint-staged which executes linting and formatting on staged files.

### VS Code Configuration

VS Code settings are included to ensure consistent development experience:
- Auto-fix ESLint issues on save
- Auto-organize imports on save

## API Documentation

### Request Processing Pipeline

The API follows a standardized request processing pipeline:
1. Request received by Express middleware
2. Route handler directs to appropriate controller
3. Request validation using Zod schemas
4. Controller processes request and calls service layer
5. Service layer performs business logic and database operations
6. Response formatted and sent back to client

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

- `yarn start` - Start the development server with auto-reload
- `yarn lint:check` - Check for linting issues
- `yarn lint:fix` - Fix linting issues
- `yarn prettier:check` - Check for formatting issues
- `yarn prettier:fix` - Fix formatting issues
- `yarn lint-prettier` - Run both linting and formatting checks

### Development Workflow

1. Write code in TypeScript following the project structure
2. Run linting and formatting checks before committing
3. Use Git hooks to ensure code quality
4. Follow the modular architecture for new features

## Error Handling

The project implements a comprehensive error handling system:
- Custom ApiError class for application-specific errors
- Centralized error handling middleware
- Standardized error response format
- Validation error handling with Zod

## Logging

Winston is used for logging with the following features:
- Separate logs for errors and successes
- Daily log rotation
- Structured log format with timestamps and labels

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

Tarek Sabbir
