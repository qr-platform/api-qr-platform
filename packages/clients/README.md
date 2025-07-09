# QR Platform API Clients

This package provides TypeScript/JavaScript clients for the QR Platform API, with separate optimized clients for Node.js and React applications.

## 🌟 Key Features

### Global Client Configuration

Configure authentication and settings once, use everywhere. No need to pass client to every API call.

```typescript
// ✅ With global client (new approach)
import { client, getCodes, postCodes } from "@qr-platform/api-qr-platform/node";

client.setConfig({
  /* auth config */
});
const codes = await getCodes();
const newCode = await postCodes({
  body: {
    /* data */
  },
});

// ❌ Old approach (still supported)
const codes = await getCodes({ client: myClient });
const newCode = await postCodes({
  client: myClient,
  body: {
    /* data */
  },
});
```

### Bulk Operations Made Simple

Execute large-scale operations with automatic chunking and error handling.

```typescript
import {
  bulkExecute,
  deleteCodesByCodeId,
} from "@qr-platform/api-qr-platform/node";

// Delete 1000 codes in batches of 100, automatically
const result = await bulkExecute(
  (ids) => deleteCodesByCodeId({ body: { ids } }),
  arrayOf1000CodeIds,
  { maxCount: 100 }
);
```

### Persistence Through API Regeneration

Custom utilities and configurations survive `npm run generate` - no manual intervention needed.

## Installation

```bash
npm install @qr-platform/api-qr-platform
```

## Usage

### Node.js Client

For server-side applications, CLI tools, or any Node.js environment:

#### Recommended Approach

```typescript
// Import the Node.js client
import {
  getCodes,
  postCodes,
  getAuthMe,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/node";

// Create and configure client instance
const client = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: {
      Authorization: "Bearer your-api-key-here",
    },
  })
);

// Make API calls
try {
  const codes = await getCodes({ client });
  console.log("QR Codes:", codes.data);

  const newCode = await postCodes({
    client,
    body: {
      name: "My QR Code",
      data: "https://example.com",
    },
  });
  console.log("Created:", newCode.data);

  const user = await getAuthMe({ client });
  console.log("Current user:", user.data);
} catch (error) {
  console.error("API Error:", error);
}
```

#### Global Client Pattern (Experimental)

```typescript
// This pattern may require rebuilding the package
import {
  client,
  getCodes,
  postCodes,
  getAuthMe,
} from "@qr-platform/api-qr-platform/node";

// Configure the global client once (if available)
client.setConfig({
  baseUrl: "https://api.qr-platform.com/v1",
  headers: {
    Authorization: "Bearer your-api-key-here",
  },
});

// Use API functions without passing client
const codes = await getCodes();
const newCode = await postCodes({
  body: {
    name: "My QR Code",
    data: "https://example.com",
  },
});
```

#### Bulk Operations

```typescript
import {
  bulkExecute,
  deleteCodesByCodeId,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/node";

// Create client
const client = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: { Authorization: "Bearer your-api-key" },
  })
);

// Execute bulk operations
const result = await bulkExecute(
  (ids) => deleteCodesByCodeId({ client, body: { ids } }),
  arrayOf1000CodeIds,
  { maxCount: 100 }
);

console.log(`Processed ${result.totalChunks} chunks`);
console.log(`Successful: ${result.successful.length}`);
console.log(`Failed: ${result.failed.length}`);
```

#### Dynamic Authentication

```typescript
import {
  getCodes,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/node";

// Create client with initial config
let client = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
  })
);

// Function to update authentication
const updateAuth = (token) => {
  client = createClient(
    createConfig({
      baseUrl: "https://api.qr-platform.com/v1",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    })
  );
};

// Usage
updateAuth(userToken);
const codes = await getCodes({ client });
```

### React Client

For React applications with TanStack React Query integration:

#### Recommended Approach

```typescript
// App setup (e.g., main.tsx or App.tsx)
import { createClient, createConfig } from "@qr-platform/api-qr-platform/node";

const apiClient = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: {
      Authorization: "Bearer your-api-key-here",
    },
  })
);

// Export for use in components
export { apiClient };
```

```typescript
// In your components
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCodes, postCodes } from "@qr-platform/api-qr-platform/react";
import { apiClient } from "./app-setup"; // Your client instance

function MyComponent() {
  const queryClient = useQueryClient();

  // Query with explicit client
  const {
    data: codes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getCodes"],
    queryFn: () => getCodes({ client: apiClient }),
  });

  // Mutation with explicit client
  const createCode = useMutation({
    mutationFn: (data) =>
      postCodes({
        client: apiClient,
        body: data,
      }),
    onSuccess: (data) => {
      console.log("Code created:", data);
      queryClient.invalidateQueries({ queryKey: ["getCodes"] });
    },
    onError: (error) => {
      console.error("Error creating code:", error);
    },
  });

  const handleCreate = () => {
    createCode.mutate({
      name: "My QR Code",
      data: "https://example.com",
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>QR Codes</h1>
      {codes?.data?.map((code) => (
        <div key={code.id}>{code.name}</div>
      ))}
      <button onClick={handleCreate} disabled={createCode.isPending}>
        {createCode.isPending ? "Creating..." : "Create Code"}
      </button>
    </div>
  );
}
```

#### Bulk Operations in React

```typescript
import React, { useState } from "react";
import {
  bulkExecute,
  deleteCodesByCodeId,
} from "@qr-platform/api-qr-platform/react";
import { apiClient } from "./app-setup"; // Your client instance

function BulkDeleteComponent({ codeIds }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const handleBulkDelete = async () => {
    setIsProcessing(true);
    try {
      const result = await bulkExecute(
        (ids) => deleteCodesByCodeId({ client: apiClient, body: { ids } }),
        codeIds,
        { maxCount: 100 }
      );
      setResult(result);
    } catch (error) {
      console.error("Bulk operation failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <button onClick={handleBulkDelete} disabled={isProcessing}>
        {isProcessing ? "Processing..." : `Delete ${codeIds.length} codes`}
      </button>
      {result && (
        <div>
          Successful: {result.successful.length}, Failed: {result.failed.length}
        </div>
      )}
    </div>
  );
}
```

## Package Structure

```
@qr-platform/api-qr-platform/
├── node.js              # Node.js entry point
├── node.d.ts            # Node.js types entry point
├── react.js             # React entry point
├── react.d.ts           # React types entry point
└── dist/
    ├── node/            # Compiled Node.js client
    │   ├── client/      # Core HTTP client functionality
    │   ├── core/        # Core utilities
    │   ├── sdk.gen.ts   # Generated SDK functions
    │   ├── types.gen.ts
    │   └── index.ts
    └── react/           # Compiled React client
        ├── @tanstack/   # TanStack React Query hooks
        └── index.ts
```

## API Reference

### Node.js Client

#### Configuration

##### Recommended: Custom Client Instance

```typescript
import { createClient, createConfig } from "@qr-platform/api-qr-platform/node";

// Create a client instance with your configuration
const client = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: {
      Authorization: "Bearer your-api-key",
    },
  })
);

// Use with all API functions
const codes = await getCodes({ client });
const user = await getAuthMe({ client });
```

**Benefits of Custom Client:**

- ✅ Always works regardless of build configuration
- ✅ Multiple client instances for different environments
- ✅ Full TypeScript support
- ✅ Explicit and clear code
- ✅ No rebuild dependencies

##### Alternative: Global Client (If Available)

```typescript
import { client } from "@qr-platform/api-qr-platform/node";

// If the global client export is available after rebuilding
client.setConfig({
  baseUrl: "https://api.qr-platform.com/v1",
  headers: {
    Authorization: "Bearer your-api-key",
  },
});

// Use API functions without client parameter (if supported)
const codes = await getCodes();
```

**Note:** If global client import fails:

1. Run `npm run build` in the package directory
2. Verify exports with: `node -e "console.log(require('./node.js').client)"`
3. Use the custom client pattern as fallback

##### Dynamic Authentication

```typescript
import {
  createClient,
  createConfig,
  getCodes,
} from "@qr-platform/api-qr-platform/node";

let currentClient = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
  })
);

// Function to update authentication
const updateAuth = (token) => {
  currentClient = createClient(
    createConfig({
      baseUrl: "https://api.qr-platform.com/v1",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
  );
};

// Usage
updateAuth(userToken);
const codes = await getCodes({ client: currentClient });

// Logout
updateAuth(null);
// Further calls will be unauthenticated
```

##### Multiple Environments

```typescript
import { createClient, createConfig } from "@qr-platform/api-qr-platform/node";

// Production client
const prodClient = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: { Authorization: "Bearer prod-key" },
  })
);

// Development client
const devClient = createClient(
  createConfig({
    baseUrl: "https://dev-api.qr-platform.com/v1",
    headers: { Authorization: "Bearer dev-key" },
  })
);

// Use appropriate client based on environment
const client = process.env.NODE_ENV === "production" ? prodClient : devClient;
const codes = await getCodes({ client });
```

#### Available SDK Functions

- `getAuthMe()` - Get current user
- `postAuthSignIn()` - Sign in user
- `getCodes()` - Fetch QR codes
- `postCodes()` - Create QR code
- `getCodesByCodeId()` - Get specific code
- `putCodesByCodeId()` - Update QR code
- `deleteCodesByCodeId()` - Delete QR code
- `getTemplates()` - Fetch templates
- `postTemplates()` - Create template
- `getStyles()` - Fetch styles
- `postStyles()` - Create style
- And many more...

#### Error Handling

All API functions return a result object with either `data` or `error`:

```typescript
try {
  const result = await getCodes();
  console.log(result.data); // Success data
} catch (error) {
  console.error(error); // Network or other errors
}
```

### React Client

The React client provides TanStack React Query options for all API endpoints:

#### Query Options

- `getCodesOptions()` - Fetch QR codes
- `getCodesByCodeIdOptions({ path: { codeId } })` - Fetch specific code
- `getTemplatesOptions()` - Fetch templates
- `getAuthMeOptions()` - Get current user
- And many more...

#### Mutation Options

- `postCodesMutation()` - Create QR code
- `putCodesByCodeIdMutation()` - Update QR code
- `deleteCodesByCodeIdMutation()` - Delete QR code
- `postTemplatesMutation()` - Create template
- And many more...

#### Usage with TanStack React Query

```typescript
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getCodesOptions,
  postCodesMutation,
} from "@qr-platform/api-qr-platform/react";

// Query
const { data, isLoading, error } = useQuery(getCodesOptions());

// Mutation
const mutation = useMutation(postCodesMutation());
```

## Development

### Building

```bash
npm run build
```

### Generating API Clients

```bash
# Generate Node.js client
npm run generate:node

# Generate React client
npm run generate:react

# Generate both
npm run generate
```

## License

ISC
