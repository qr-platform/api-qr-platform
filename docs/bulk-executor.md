# Bulk Executor

A simple, generic utility for executing bulk operations by automatically chunking large arrays and managing concurrent/sequential API requests.

## 🎯 Overview

The Bulk Executor solves a common problem: when you have a large array of items (e.g., 1000 QR code IDs) but your API endpoint can only handle a limited number per request (e.g., 100), you need to split the array into chunks and make multiple requests.

**Instead of manually managing this logic**, the Bulk Executor handles it automatically.

## 🔧 Current Usage Patterns

The bulk utilities support two client patterns:

### ✅ Recommended: Custom Client Instance

This pattern always works and is recommended for reliability:

```javascript
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

const result = await bulkExecute(
  (ids) => deleteCodesByCodeId({ client, body: { ids } }),
  arrayOfIds,
  { maxCount: 100 }
);
```

### 🔄 Alternative: Global Client (May Require Rebuild)

This pattern provides cleaner syntax but may require rebuilding the package:

```javascript
import {
  client,
  bulkExecute,
  deleteCodesByCodeId,
} from "@qr-platform/api-qr-platform/node";

client.setConfig({
  baseUrl: "https://api.qr-platform.com/v1",
  headers: { Authorization: "Bearer your-api-key" },
});

const result = await bulkExecute(
  (ids) => deleteCodesByCodeId({ body: { ids } }),
  arrayOfIds,
  { maxCount: 100 }
);
```

### 🚨 Troubleshooting

If you get "client is not exported" or similar errors:

1. **Use the custom client pattern** (always works)
2. **Rebuild the package:** `cd packages/clients && npm run build`
3. **Verify exports:** `node -e "console.log(require('./node.js').client)"`

All examples in this document show both patterns where applicable.

## 🏗️ Architecture

The bulk utilities are built with a **generation-proof architecture**:

- **`utils/` folder**: Contains custom utilities that persist through API regeneration
- **Automatic integration**: Build process merges utilities with generated API code
- **Universal availability**: Works with both Node.js and React packages
- **TypeScript support**: Full type safety with auto-generated declarations

### Available Utilities

- **`bulkExecute`**: Core bulk operation executor
- **`mergeBulkResponseData`**: Merge multiple API responses
- **`filterSuccessfulResponses`**: Filter out failed responses
- **`extractAllErrors`**: Extract all errors from responses
- **`getBulkResponseSummary`**: Get statistics from bulk operations

## 📦 Installation

The bulk executor is **automatically included** in the QR Platform API client. No additional installation required.

### Node.js Usage

```javascript
import { bulkExecute } from "@qr-platform/api-qr-platform/node";
```

### React Usage

```javascript
import { bulkExecute } from "@qr-platform/api-qr-platform/react";
```

### All Utilities

```javascript
import {
  bulkExecute,
  mergeBulkResponseData,
  filterSuccessfulResponses,
  extractAllErrors,
  getBulkResponseSummary,
} from "@qr-platform/api-qr-platform/node";
```

## 🚀 Basic Usage

### Simple Example

```javascript
import {
  bulkExecute,
  deleteCodesByCodeId,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/node";

// Create client instance
const client = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: { Authorization: "Bearer your-api-key" },
  })
);

// You have 1000 code IDs, but can only delete 100 at a time
const result = await bulkExecute(
  (ids) => deleteCodesByCodeId({ client, body: { ids } }),
  arrayOf1000CodeIds,
  { maxCount: 100 }
);

// Automatically creates 10 requests with 100 IDs each
console.log(`Processed ${result.totalChunks} chunks`);
console.log(`Successful: ${result.successful.length}`);
console.log(`Failed: ${result.failed.length}`);
```

**Alternative: Global Client (If Available)**

```javascript
import {
  client,
  bulkExecute,
  deleteCodesByCodeId,
} from "@qr-platform/api-qr-platform/node";

// Configure global client once (requires rebuild if not working)
client.setConfig({
  baseUrl: "https://api.qr-platform.com/v1",
  headers: { Authorization: "Bearer your-api-key" },
});

// Use without passing client (if global client is available)
const result = await bulkExecute(
  (ids) => deleteCodesByCodeId({ body: { ids } }),
  arrayOf1000CodeIds,
  { maxCount: 100 }
);
```

### React Component Example

```javascript
import React, { useState } from "react";
import {
  bulkExecute,
  deleteCodesByCodeId,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/react";

// Create client instance (typically in your app setup)
const client = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: { Authorization: "Bearer your-api-key" },
  })
);

function BulkDeleteComponent({ codeIds }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const handleBulkDelete = async () => {
    setIsProcessing(true);
    try {
      const result = await bulkExecute(
        (ids) => deleteCodesByCodeId({ client, body: { ids } }),
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

## 🔧 Configuration

### BulkExecutorConfig

```typescript
interface BulkExecutorConfig {
  maxCount: number; // Maximum items per request (required)
  delay?: number; // Delay between requests in milliseconds (optional)
  parallel?: boolean; // Execute chunks in parallel (default: true)
}
```

### Configuration Examples

```javascript
// Basic configuration
{ maxCount: 100 }

// Sequential execution with delay (for rate-limited APIs)
{ maxCount: 50, parallel: false, delay: 1000 }

// Parallel execution (default)
{ maxCount: 100, parallel: true }
```

## 📊 Return Value

### BulkExecutorResult

```typescript
interface BulkExecutorResult<T> {
  successful: T[]; // Array of successful responses
  failed: Array<{ chunk: any[]; error: unknown }>; // Failed chunks with errors
  totalChunks: number; // Total number of chunks processed
  totalProcessed: number; // Total chunks attempted
}
```

### Example Result

```javascript
{
  successful: [
    { deleted: 100, codes: [...] },
    { deleted: 100, codes: [...] },
    { deleted: 50, codes: [...] }
  ],
  failed: [
    { chunk: [id1, id2, id3], error: "Network timeout" }
  ],
  totalChunks: 4,
  totalProcessed: 4
}
```

## 💡 Use Cases & Examples

### 1. Bulk Delete Operations

```javascript
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

// Delete 500 QR codes, 100 at a time
const deleteResult = await bulkExecute(
  (ids) => deleteCodesByCodeId({ client, body: { ids } }),
  arrayOf500CodeIds,
  { maxCount: 100 }
);

console.log(`Deleted ${deleteResult.successful.length * 100} codes`);
```

### 2. Bulk Update Operations

```javascript
import {
  bulkExecute,
  putCodesByCodeId,
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

// Update codes in batches
const updates = codeIds.map((id) => ({ id, data: { name: "Updated" } }));

const updateResult = await bulkExecute(
  (batch) =>
    Promise.all(
      batch.map((update) =>
        putCodesByCodeId({
          client,
          path: { codeId: update.id },
          body: update.data,
        })
      )
    ),
  updates,
  { maxCount: 25 }
);
```

### 3. Rate-Limited APIs (Sequential Processing)

```javascript
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

// For APIs with strict rate limits
const result = await bulkExecute(
  (ids) => deleteCodesByCodeId({ client, body: { ids } }),
  largeIdArray,
  {
    maxCount: 50, // Smaller batches
    parallel: false, // Sequential processing
    delay: 2000, // 2 second delay between requests
  }
);
```

### 4. Custom Bulk Operations

```javascript
import {
  bulkExecute,
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

// Works with any function that accepts an array
const customOperation = async (items) => {
  // Your custom logic here
  return await someApiCall({ client, data: items });
};

const result = await bulkExecute(customOperation, yourDataArray, {
  maxCount: 75,
});
```

### 5. Using Response Utilities

```javascript
import {
  bulkExecute,
  mergeBulkResponseData,
  getBulkResponseSummary,
  filterSuccessfulResponses,
} from "@qr-platform/api-qr-platform/node";

const result = await bulkExecute(func, data, { maxCount: 100 });

// Merge all successful response data
const successfulOnly = filterSuccessfulResponses(result.successful);
const mergedData = mergeBulkResponseData(successfulOnly);

// Get comprehensive summary
const summary = getBulkResponseSummary(result.successful);
console.log(`Success rate: ${summary.successRate}%`);
console.log(`Total items processed: ${summary.totalItems}`);
```

## 🎛️ Execution Modes

### Parallel Execution (Default)

- **All chunks execute simultaneously**
- **Faster overall completion**
- **Higher server load**

```javascript
const result = await bulkExecute(func, data, {
  maxCount: 100,
  parallel: true, // Default
});
```

### Sequential Execution

- **Chunks execute one after another**
- **Slower but gentler on server**
- **Supports delays between requests**

```javascript
const result = await bulkExecute(func, data, {
  maxCount: 100,
  parallel: false,
  delay: 1000, // 1 second between each request
});
```

## 📈 Performance Examples

### Scenario Comparison

| Input Size | Max Count | Mode                  | Requests        | Time Estimate  |
| ---------- | --------- | --------------------- | --------------- | -------------- |
| 1000 items | 100       | Parallel              | 10 simultaneous | ~2-3 seconds   |
| 1000 items | 100       | Sequential            | 10 sequential   | ~10-15 seconds |
| 1000 items | 100       | Sequential + 1s delay | 10 with delays  | ~19 seconds    |
| 90 items   | 100       | Any                   | 1               | ~1 second      |

## ⚠️ Error Handling

The bulk executor **continues processing even if some chunks fail**:

```javascript
const result = await bulkExecute(func, data, { maxCount: 100 });

// Handle successful operations
result.successful.forEach((response, index) => {
  console.log(`Chunk ${index + 1}: Success`);
});

// Handle failed operations
result.failed.forEach((failure, index) => {
  console.log(`Chunk failed:`, failure.chunk);
  console.log(`Error:`, failure.error);
});

// Calculate success rate
const successRate = (result.successful.length / result.totalChunks) * 100;
console.log(`Success rate: ${successRate.toFixed(1)}%`);
```

### Advanced Error Handling with Utilities

```javascript
import {
  bulkExecute,
  extractAllErrors,
  getBulkResponseSummary,
} from "@qr-platform/api-qr-platform/node";

const result = await bulkExecute(func, data, { maxCount: 100 });

// Get detailed summary
const summary = getBulkResponseSummary(result.successful);

if (summary.hasErrors) {
  const allErrors = extractAllErrors(result.successful);
  console.error(`Found ${allErrors.length} errors:`, allErrors);
}

console.log(`Overall success rate: ${summary.successRate.toFixed(1)}%`);
```

## 🛡️ Best Practices

### 1. Choose Appropriate Batch Sizes

```javascript
// For delete operations (usually fast)
{ maxCount: 100 }

// For complex operations (slower)
{ maxCount: 25 }

// For rate-limited APIs
{ maxCount: 10, parallel: false, delay: 1000 }
```

### 2. Handle Errors Gracefully

```javascript
const result = await bulkExecute(func, data, config);

if (result.failed.length > 0) {
  console.warn(`${result.failed.length} chunks failed`);
  // Optionally retry failed chunks
  const retryIds = result.failed.flatMap((f) => f.chunk);
  // ... retry logic
}
```

### 3. Monitor Progress

```javascript
console.log(
  `Processing ${data.length} items in ${Math.ceil(
    data.length / maxCount
  )} chunks...`
);

const result = await bulkExecute(func, data, config);

console.log(`Completed: ${result.totalProcessed}/${result.totalChunks} chunks`);
console.log(
  `Success rate: ${(
    (result.successful.length / result.totalChunks) *
    100
  ).toFixed(1)}%`
);
```

### 4. Test with Small Batches First

```javascript
// Test with a small subset first
const testResult = await bulkExecute(func, data.slice(0, 10), { maxCount: 5 });

if (testResult.failed.length === 0) {
  // Proceed with full dataset
  const fullResult = await bulkExecute(func, data, { maxCount: 100 });
}
```

### 5. Use Response Utilities for Better Data Management

```javascript
import {
  bulkExecute,
  mergeBulkResponseData,
  filterSuccessfulResponses,
} from "@qr-platform/api-qr-platform/node";

const result = await bulkExecute(func, data, config);

// Only work with successful responses
const successfulResponses = filterSuccessfulResponses(result.successful);

// Merge all the data into a single response
const mergedData = mergeBulkResponseData(successfulResponses);

console.log(`Successfully processed ${mergedData.data.length} items`);
```

## 🔧 Advanced Usage

### Custom Wrapper Functions

```javascript
import {
  bulkExecute,
  deleteCodesByCodeId,
  postCodesByCodeIdRestore,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/node";

// Create client instance
const client = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: { Authorization: "Bearer your-api-key" },
  })
);

// Create reusable wrapper functions
const bulkDeleteCodes = (codeIds, batchSize = 100) =>
  bulkExecute(
    (ids) => deleteCodesByCodeId({ client, body: { ids } }),
    codeIds,
    {
      maxCount: batchSize,
    }
  );

const bulkRestoreCodes = (codeIds, batchSize = 50) =>
  bulkExecute(
    (ids) => postCodesByCodeIdRestore({ client, body: { ids } }),
    codeIds,
    {
      maxCount: batchSize,
      parallel: false,
      delay: 500,
    }
  );

// Usage
const deleteResult = await bulkDeleteCodes(myCodeIds);
const restoreResult = await bulkRestoreCodes(deletedCodeIds);
```

### Progress Tracking

```javascript
import {
  bulkExecute,
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

// For very large operations, you might want progress updates
const processLargeDataset = async (data) => {
  const chunkSize = 100;
  const totalChunks = Math.ceil(data.length / chunkSize);
  let processedChunks = 0;

  console.log(
    `Starting bulk operation: ${data.length} items in ${totalChunks} chunks`
  );

  const result = await bulkExecute(
    async (chunk) => {
      const response = await yourApiFunction({ client, data: chunk });
      processedChunks++;
      console.log(
        `Processed chunk: ${processedChunks}/${totalChunks} (${(
          (processedChunks / totalChunks) *
          100
        ).toFixed(1)}%)`
      );
      return response;
    },
    data,
    { maxCount: chunkSize, parallel: false, delay: 100 }
  );

  return result;
};
```

### React Hook Example

```javascript
import { useState, useCallback } from "react";
import {
  bulkExecute,
  createClient,
  createConfig,
} from "@qr-platform/api-qr-platform/react";

// Create client instance (typically in app setup)
const client = createClient(
  createConfig({
    baseUrl: "https://api.qr-platform.com/v1",
    headers: { Authorization: "Bearer your-api-key" },
  })
);

function useBulkOperation() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(async (func, data, config) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const result = await bulkExecute(func, data, config);
      setResult(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { execute, isLoading, result, error };
}

// Usage in component
function MyComponent({ codeIds }) {
  const { execute, isLoading, result } = useBulkOperation();

  const handleBulkDelete = () => {
    execute((ids) => deleteCodesByCodeId({ client, body: { ids } }), codeIds, {
      maxCount: 100,
    });
  };

  return (
    <div>
      <button onClick={handleBulkDelete} disabled={isLoading}>
        {isLoading ? "Processing..." : "Delete Codes"}
      </button>
      {result && <div>Processed {result.totalChunks} chunks</div>}
    </div>
  );
}
```

## 🚫 Common Pitfalls

### 1. Don't Use Extremely Large Batch Sizes

```javascript
// ❌ Avoid - might timeout or overwhelm server
{
  maxCount: 1000;
}

// ✅ Better - reasonable batch size
{
  maxCount: 100;
}
```

### 2. Consider Server Limits

```javascript
// ❌ Too aggressive for rate-limited APIs
{ maxCount: 100, parallel: true }

// ✅ Respectful of rate limits
{ maxCount: 25, parallel: false, delay: 1000 }
```

### 3. Handle Empty Arrays

```javascript
if (data.length === 0) {
  console.log("No data to process");
  return;
}

const result = await bulkExecute(func, data, config);
```

### 4. Don't Ignore Failed Chunks

```javascript
// ❌ Ignoring failures
const result = await bulkExecute(func, data, config);
// Only use result.successful

// ✅ Handle failures appropriately
const result = await bulkExecute(func, data, config);
if (result.failed.length > 0) {
  console.warn(`${result.failed.length} chunks failed`);
  // Decide: retry, log, or alert user
}
```

## 🔄 Persistence Through API Regeneration

The bulk utilities are designed to **persist through API regeneration**:

### How It Works

1. **Separate `utils/` folder**: Custom utilities live outside the generated `src/` folder
2. **Automatic build integration**: Build process combines utilities with generated code
3. **No manual intervention**: Run `npm run generate` anytime without losing utilities

### Project Structure

```
packages/clients/
├── utils/                    # 🔒 Your custom utilities (preserved)
│   └── bulk/
│       ├── executor.ts       # Bulk execution logic
│       ├── response.ts       # Response utilities
│       └── index.ts         # Exports
├── src/                     # Generated API code (overwritten)
├── dist/                    # Built output (auto-generated)
└── scripts/                 # Build scripts
```

### Regeneration Workflow

```bash
# 1. Regenerate API clients (utils are preserved)
npm run generate

# 2. Build everything (utils + generated code)
npm run build

# 3. Utilities are automatically available
# No manual steps required!
```

## 📚 API Reference

### Core Function

```typescript
async function bulkExecute<T>(
  func: (items: any[]) => Promise<T>,
  items: any[],
  config: BulkExecutorConfig
): Promise<BulkExecutorResult<T>>;
```

### Utility Functions

```typescript
// Merge response data from multiple API calls
function mergeBulkResponseData(responses: BulkResponseData[]): {
  data: any[];
  errors: any[] | null;
  summaries: any[] | null;
  totalResponses: number;
};

// Filter successful responses only
function filterSuccessfulResponses(
  responses: BulkResponseData[]
): BulkResponseData[];

// Extract all errors from responses
function extractAllErrors(responses: BulkResponseData[]): any[];

// Get comprehensive statistics
function getBulkResponseSummary(responses: BulkResponseData[]): {
  totalResponses: number;
  successfulResponses: number;
  failedResponses: number;
  totalItems: number;
  totalErrors: number;
  hasErrors: boolean;
  successRate: number;
};
```

### Type Definitions

```typescript
interface BulkExecutorConfig {
  maxCount: number;
  delay?: number;
  parallel?: boolean;
}

interface BulkExecutorResult<T> {
  successful: T[];
  failed: Array<{ chunk: any[]; error: unknown }>;
  totalChunks: number;
  totalProcessed: number;
}

interface BulkResponseData {
  data: {
    data: any[];
    summary?: any;
    errors?: any;
  };
  request?: any;
  response?: any;
}
```

### Parameters

- **`func`**: Function that processes a chunk of items
- **`items`**: Array of items to process
- **`config`**: Configuration object with maxCount, delay, and parallel options

### Returns

Promise that resolves to `BulkExecutorResult<T>` containing successful results, failed chunks, and processing statistics.

---

The Bulk Executor provides a simple, reliable way to handle large-scale operations while respecting API limits and providing comprehensive error handling. The **generation-proof architecture** ensures your utilities persist through any API updates.
