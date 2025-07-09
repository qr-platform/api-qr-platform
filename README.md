# QR Platform API Clients Monorepo

This monorepo contains API clients for the QR Platform, providing both Node.js and React implementations in a single package.

## 🏗️ Structure

```
@qr-platform/api-qr-platform/
├── packages/
│   └── clients/                 # Main package with both Node.js and React clients
│       ├── src/
│       │   ├── node/           # Node.js/Universal client
│       │   │   ├── client/     # Core HTTP functionality
│       │   │   ├── core/       # Core utilities
│       │   │   ├── sdk.gen.ts  # Generated SDK functions
│       │   │   ├── types.gen.ts
│       │   │   └── index.ts
│       │   └── react/          # React Query hooks
│       │       ├── @tanstack/  # TanStack React Query hooks
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

#### Recommended: Global Client Pattern

```typescript
import { client, getCodes, getAuthMe } from "@qr-platform/api-qr-platform/node";

// Configure the global client once (typically at app startup)
client.setConfig({
  baseUrl: "https://api.qr-platform.com/v1",
  headers: {
    Authorization: "Bearer your-api-key",
  },
});

// Now use API functions without passing client
const codes = await getCodes();
const user = await getAuthMe();
```

#### Alternative: Custom Client Instance (Always Works)

```typescript
import {
  getCodes,
  getAuthMe,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/node";

const myClient = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: {
      Authorization: "Bearer your-api-key",
    },
  })
);

// Pass client to each API call
const codes = await getCodes({ client: myClient });
const user = await getAuthMe({ client: myClient });
```

#### Bulk Operations

```typescript
import {
  bulkExecute,
  deleteCodesByCodeId,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/node";

const client = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: { Authorization: "Bearer your-api-key" },
  })
);

// Use bulk operations with explicit client
const result = await bulkExecute(
  (ids) => deleteCodesByCodeId({ client, body: { ids } }),
  largeArrayOfCodeIds,
  { maxCount: 100 }
);
```

### React Usage

```typescript
import { useQuery } from "@tanstack/react-query";
import {
  getCodes,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/react";

// Create client instance (typically in your app setup)
const client = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: {
      Authorization: "Bearer your-api-key",
    },
  })
);

function MyComponent() {
  const { data: codes } = useQuery({
    queryKey: ["codes"],
    queryFn: () => getCodes({ client }),
  });

  return <div>{/* Your component */}</div>;
}
```

### 🔧 Troubleshooting

If you encounter import issues:

1. **Ensure package is built:**

   ```bash
   cd packages/clients
   npm run build
   ```

2. **Verify exports:**

   ```bash
   node -e "console.log(Object.keys(require('./node.js')).slice(0, 10))"
   ```

3. **Use custom client pattern** (always works as fallback)

4. **Check TypeScript configuration** if using TypeScript

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

## 🚨 Troubleshooting

### Common Issues and Solutions

#### 1. Cannot Import Client

**Problem:** Getting errors like "client is not exported" or "Cannot resolve module"

**Solutions:**

1. **Use custom client pattern** (always works):

   ```typescript
   import {
     createClient,
     createConfig,
     getCodes,
   } from "@qr-platform/api-qr-platform/node";
   const client = createClient(
     createConfig({
       /* config */
     })
   );
   const codes = await getCodes({ client });
   ```

2. **Rebuild the package:**

   ```bash
   cd packages/clients
   npm run clean
   npm run build
   ```

3. **Verify package installation:**
   ```bash
   npm ls @qr-platform/api-qr-platform
   ```

#### 2. TypeScript Errors

**Problem:** Type errors or missing declarations

**Solutions:**

1. **Ensure package is built:**

   ```bash
   cd packages/clients && npm run build
   ```

2. **Check entry points in package.json:**

   ```bash
   node -e "console.log(require('./packages/clients/package.json').exports)"
   ```

3. **Use explicit typing:**
   ```typescript
   import type { GetCodesResponse } from "@qr-platform/api-qr-platform/node";
   ```

#### 3. Build Failures

**Problem:** Build fails or generates incomplete files

**Solutions:**

1. **Clean and reinstall:**

   ```bash
   npm run clean
   npm install
   npm run build
   ```

2. **Check for OpenAPI spec issues:**

   ```bash
   npm run generate:node -- --dry-run
   ```

3. **Verify Node.js version** (requires Node.js 18+)

#### 4. Import Resolution

**Problem:** Module resolution errors in Node.js or bundlers

**Solutions:**

1. **Use full import paths:**

   ```typescript
   import { getCodes } from "@qr-platform/api-qr-platform/node";
   ```

2. **Check package linking** (for development):

   ```bash
   cd packages/clients
   npm link
   cd your-project
   npm link @qr-platform/api-qr-platform
   ```

3. **Verify exports field support** in your bundler/runtime

#### 5. API Generation Issues

**Problem:** `npm run generate` fails or overwrites custom code

**Solutions:**

1. **Check OpenAPI endpoint availability**
2. **Custom utilities are preserved** in `utils/` folder
3. **Review generation logs** for specific errors
4. **Use specific generators:**
   ```bash
   npm run generate:node  # Generate only Node.js client
   npm run generate:react # Generate only React client
   ```

### Getting Help

If you encounter issues not covered here:

1. **Check the package README:** [packages/clients/README.md](./packages/clients/README.md)
2. **Review bulk executor docs:** [docs/bulk-executor.md](./docs/bulk-executor.md)
3. **Verify your Node.js version** (18+ required)
4. **Check for console errors** in browser developer tools
5. **Use the reliable custom client pattern** as a fallback

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
