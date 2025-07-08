# QR Platform API Clients

This package provides TypeScript/JavaScript clients for the QR Platform API, with separate optimized clients for Node.js and React applications.

## Installation

```bash
npm install @qr-platform/api-qr-platform
```

## Usage

### Node.js Client

For server-side applications, CLI tools, or any Node.js environment:

```typescript
// Import the Node.js client
import {
  getCodes,
  postCodes,
  client,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/node";

// Configure the default client
client.setConfig({
  baseUrl: "https://api.qr-platform.com/v1",
  headers: {
    Authorization: "Bearer your-api-key-here",
  },
});

// Or create a custom client
const myClient = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: {
      Authorization: "Bearer your-api-key-here",
    },
  })
);

// Make API calls using SDK functions
try {
  const codes = await getCodes();
  console.log("QR Codes:", codes.data);

  const newCode = await postCodes({
    body: {
      name: "My QR Code",
      data: "https://example.com",
    },
  });
  console.log("Created:", newCode.data);
} catch (error) {
  console.error("API Error:", error);
}
```

### React Client

For React applications with TanStack React Query integration:

```typescript
// Import React Query options and mutations
import {
  getCodesOptions,
  postCodesMutation,
  getCodesByCodeIdOptions,
} from "@qr-platform/api-qr-platform/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@qr-platform/api-qr-platform/node";

// Configure authentication (in your app setup)
client.setConfig({
  baseUrl: "https://api.qr-platform.com/v1",
  headers: {
    Authorization: "Bearer your-api-key-here",
  },
});

function MyComponent() {
  const queryClient = useQueryClient();

  // Use query options with useQuery
  const { data: codes, isLoading, error } = useQuery(getCodesOptions());

  // Use mutation options with useMutation
  const createCode = useMutation({
    ...postCodesMutation(),
    onSuccess: (data) => {
      console.log("Code created:", data);
      // Invalidate and refetch codes
      queryClient.invalidateQueries({ queryKey: ["getCodes"] });
    },
    onError: (error) => {
      console.error("Error creating code:", error);
    },
  });

  const handleCreate = () => {
    createCode.mutate({
      body: {
        name: "My QR Code",
        data: "https://example.com",
      },
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

```typescript
import {
  client,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/node";

// Configure default client
client.setConfig({
  baseUrl: "https://api.qr-platform.com/v1",
  headers: {
    Authorization: "Bearer your-api-key",
  },
});

// Or create a new client instance
const customClient = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: {
      Authorization: "Bearer your-api-key",
    },
  })
);
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
