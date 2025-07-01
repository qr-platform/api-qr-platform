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
  QrCodesService,
  OpenAPI,
  ApiError,
} from "@qr-platform/api-qr-platform/node";

// Configure authentication
OpenAPI.TOKEN = "your-api-key-here";

// Make API calls
try {
  const codes = await QrCodesService.getCodes();
  console.log("QR Codes:", codes);
} catch (error) {
  if (error instanceof ApiError) {
    console.error("API Error:", error.status, error.body);
  }
}
```

### React Client

For React applications with React Query integration:

```typescript
// Import React hooks
import { useGetCodes, usePostCodes } from "@qr-platform/api-qr-platform/react";
import { OpenAPI } from "@qr-platform/api-qr-platform/node";

// Configure authentication (in your app setup)
OpenAPI.TOKEN = "your-api-key-here";

function MyComponent() {
  // Use query hooks
  const { data: codes, isLoading, error } = useGetCodes();

  // Use mutation hooks
  const createCode = usePostCodes({
    onSuccess: (data) => {
      console.log("Code created:", data);
    },
    onError: (error) => {
      console.error("Error creating code:", error);
    },
  });

  const handleCreate = () => {
    createCode.mutate({
      requestBody: {
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
      {codes?.map((code) => (
        <div key={code.id}>{code.name}</div>
      ))}
      <button onClick={handleCreate}>Create Code</button>
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
    │   ├── core/        # Core HTTP client functionality
    │   ├── services.gen.ts
    │   ├── types.gen.ts
    │   └── index.ts
    └── react/           # Compiled React client
        ├── hooks/       # React Query hooks
        └── index.ts
```

## API Reference

### Node.js Client

#### Configuration

- `OpenAPI.TOKEN` - Set your API key
- `OpenAPI.BASE` - API base URL (default: auto-detected)

#### Available Services

- `AuthService` - Authentication endpoints
- `QrCodesService` - QR code management
- `ApiKeysService` - API key management
- `WorkspacesService` - Workspace management
- `TemplatesService` - Template management
- `StylesService` - Style management
- And many more...

#### Error Handling

All API errors are thrown as `ApiError` instances with:

- `status: number` - HTTP status code
- `statusText: string` - HTTP status message
- `body: unknown` - Error response body
- `url: string` - Request URL

### React Client

The React client provides all the same services as the Node.js client, plus:

#### Query Hooks

- `useGetCodes()` - Fetch QR codes
- `useGetCodesByCodeId({ codeId })` - Fetch specific code
- `useGetTemplates()` - Fetch templates
- And many more...

#### Mutation Hooks

- `usePostCodes()` - Create QR code
- `usePutCodesByCodeId()` - Update QR code
- `useDeleteCodesByCodeId()` - Delete QR code
- And many more...

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
