# QR Worker API Clients Monorepo

This monorepo contains API clients for the QR Worker platform, providing both Node.js and React implementations in a single package.

## 🏗️ Structure

```
@qr-platform/api-qr-platform/
├── packages/
│   └── clients/                 # Main package with both Node.js and React clients
│       ├── src/
│       │   ├── node/           # Node.js/Universal client
│       │   │   ├── core/       # Core HTTP functionality
│       │   │   ├── services.gen.ts
│       │   │   ├── types.gen.ts
│       │   │   └── index.ts
│       │   └── react/          # React Query hooks
│       │       ├── hooks/      # React Query implementations
│       │       └── index.ts
│       ├── dist/               # Compiled output
│       ├── package.json        # Package configuration
│       └── README.md          # Package documentation
├── package.json               # Workspace configuration
└── README.md                 # This file
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Install workspace dependencies
npm install

# Install package dependencies
npm run install:clients
```

### 2. Build the Package

```bash
npm run build
```

### 3. Link for Development

```bash
cd packages/clients
npm link
```

Now you can use it in other projects:

```bash
npm link @qr-platform/api-qr-platform
```

## 📦 Package Usage

The `packages/clients` directory contains the main package that provides separate entry points for Node.js and React:

### Node.js Usage

```typescript
import { QrCodesService, OpenAPI } from "@qr-platform/api-qr-platform/node";

OpenAPI.TOKEN = "your-api-key";
const codes = await QrCodesService.getCodes();
```

### React Usage

```typescript
import { useGetCodes } from "@qr-platform/api-qr-platform/react";
import { OpenAPI } from "@qr-platform/api-qr-platform/node";

OpenAPI.TOKEN = "your-api-key";

function MyComponent() {
  const { data: codes } = useGetCodes();
  return <div>{/* Your component */}</div>;
}
```

## 🔧 Development Commands

### Generate API Clients

```bash
# Generate both Node.js and React clients
npm run generate

# Generate only Node.js client
npm run generate:node

# Generate only React client
npm run generate:react
```

### Build

```bash
# Build the package
npm run build

# Clean build artifacts
npm run clean
```

## 📖 Features

### ✅ Dual Client Architecture

- **Node.js Client**: Pure TypeScript client for server-side usage
- **React Client**: React Query hooks for client-side usage with caching and state management

### ✅ Optimized Exports

- Tree-shakeable exports for both clients
- Separate entry points (`/node` and `/react`)
- TypeScript support with proper type declarations

### ✅ Modern Development

- TypeScript throughout
- Modern build pipeline
- Automatic code generation from OpenAPI specs

### ✅ Production Ready

- Error handling with custom `ApiError` class
- Configurable base URLs and authentication
- Comprehensive type safety

## 📚 Documentation

For detailed usage instructions, see the [package README](./packages/clients/README.md).

## 🤝 Development Workflow

1. **Make changes** to the source code in `packages/clients/src/`
2. **Build** with `npm run build`
3. **Test** in other projects using `npm link`
4. **Regenerate** API clients when the API changes with `npm run generate`

## 📋 Scripts Reference

| Script                    | Description                            |
| ------------------------- | -------------------------------------- |
| `npm run build`           | Build the package                      |
| `npm run generate`        | Generate API clients from OpenAPI spec |
| `npm run generate:node`   | Generate only Node.js client           |
| `npm run generate:react`  | Generate only React client             |
| `npm run clean`           | Clean build artifacts                  |
| `npm run install:clients` | Install package dependencies           |

## 🔗 Links

- [Package Documentation](./packages/clients/README.md)
- [QR Platform API Documentation](https://api.qr-platform.com/docs)

## 📄 License

ISC
