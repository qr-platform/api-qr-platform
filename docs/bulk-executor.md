# Bulk Executor

A simple, generic utility for executing bulk operations by automatically chunking large arrays and managing concurrent/sequential API requests.

## 🎯 Overview

The Bulk Executor solves a common problem: when you have a large array of items (e.g., 1000 QR code IDs) but your API endpoint can only handle a limited number per request (e.g., 100), you need to split the array into chunks and make multiple requests.

**Instead of manually managing this logic**, the Bulk Executor handles it automatically.

## 📦 Installation

The bulk executor is included in the QR Platform API client:

```javascript
import { bulkExecute } from "@qr-platform/api-qr-platform/node";
```

## 🚀 Basic Usage

### Simple Example

```javascript
import { bulkExecute, deleteCodesByCodeId } from "@qr-platform/api-qr-platform/node";

// You have 1000 code IDs, but can only delete 100 at a time
const result = await bulkExecute(
  (ids) => deleteCodesByCodeId({ body: { ids } }),
  arrayOf1000CodeIds,
  { maxCount: 100 }
);

// Automatically creates 10 requests with 100 IDs each
console.log(`Processed ${result.totalChunks} chunks`);
console.log(`Successful: ${result.successful.length}`);
console.log(`Failed: ${result.failed.length}`);
```

## 🔧 Configuration

### BulkExecutorConfig

```typescript
interface BulkExecutorConfig {
  maxCount: number;        // Maximum items per request (required)
  delay?: number;          // Delay between requests in milliseconds (optional)
  parallel?: boolean;      // Execute chunks in parallel (default: true)
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
  successful: T[];                               // Array of successful responses
  failed: Array<{ chunk: any[]; error: unknown }>; // Failed chunks with errors
  totalChunks: number;                           // Total number of chunks processed
  totalProcessed: number;                        // Total chunks attempted
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
import { bulkExecute, deleteCodesByCodeId } from "@qr-platform/api-qr-platform/node";

// Delete 500 QR codes, 100 at a time
const deleteResult = await bulkExecute(
  (ids) => deleteCodesByCodeId({ body: { ids } }),
  arrayOf500CodeIds,
  { maxCount: 100 }
);

console.log(`Deleted ${deleteResult.successful.length * 100} codes`);
```

### 2. Bulk Update Operations

```javascript
import { bulkExecute, putCodesByCodeId } from "@qr-platform/api-qr-platform/node";

// Update codes in batches
const updates = codeIds.map(id => ({ id, data: { name: "Updated" } }));

const updateResult = await bulkExecute(
  (batch) => Promise.all(
    batch.map(update => putCodesByCodeId({ 
      path: { codeId: update.id }, 
      body: update.data 
    }))
  ),
  updates,
  { maxCount: 25 }
);
```

### 3. Rate-Limited APIs (Sequential Processing)

```javascript
// For APIs with strict rate limits
const result = await bulkExecute(
  (ids) => deleteCodesByCodeId({ body: { ids } }),
  largeIdArray,
  {
    maxCount: 50,        // Smaller batches
    parallel: false,     // Sequential processing
    delay: 2000         // 2 second delay between requests
  }
);
```

### 4. Custom Bulk Operations

```javascript
// Works with any function that accepts an array
const customOperation = async (items) => {
  // Your custom logic here
  return await someApiCall(items);
};

const result = await bulkExecute(
  customOperation,
  yourDataArray,
  { maxCount: 75 }
);
```

## 🎛️ Execution Modes

### Parallel Execution (Default)

- **All chunks execute simultaneously**
- **Faster overall completion**
- **Higher server load**

```javascript
const result = await bulkExecute(func, data, { 
  maxCount: 100, 
  parallel: true  // Default
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
  delay: 1000  // 1 second between each request
});
```

## 📈 Performance Examples

### Scenario Comparison

| Input Size | Max Count | Mode | Requests | Time Estimate |
|------------|-----------|------|----------|---------------|
| 1000 items | 100 | Parallel | 10 simultaneous | ~2-3 seconds |
| 1000 items | 100 | Sequential | 10 sequential | ~10-15 seconds |
| 1000 items | 100 | Sequential + 1s delay | 10 with delays | ~19 seconds |
| 90 items | 100 | Any | 1 | ~1 second |

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
  const retryIds = result.failed.flatMap(f => f.chunk);
  // ... retry logic
}
```

### 3. Monitor Progress
```javascript
console.log(`Processing ${data.length} items in ${Math.ceil(data.length / maxCount)} chunks...`);

const result = await bulkExecute(func, data, config);

console.log(`Completed: ${result.totalProcessed}/${result.totalChunks} chunks`);
console.log(`Success rate: ${(result.successful.length / result.totalChunks * 100).toFixed(1)}%`);
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

## 🔧 Advanced Usage

### Custom Wrapper Functions

```javascript
// Create reusable wrapper functions
const bulkDeleteCodes = (codeIds, batchSize = 100) => 
  bulkExecute(
    (ids) => deleteCodesByCodeId({ body: { ids } }),
    codeIds,
    { maxCount: batchSize }
  );

const bulkRestoreCodes = (codeIds, batchSize = 50) => 
  bulkExecute(
    (ids) => postCodesByCodeIdRestore({ body: { ids } }),
    codeIds,
    { maxCount: batchSize, parallel: false, delay: 500 }
  );

// Usage
const deleteResult = await bulkDeleteCodes(myCodeIds);
const restoreResult = await bulkRestoreCodes(deletedCodeIds);
```

### Progress Tracking

```javascript
// For very large operations, you might want progress updates
const processLargeDataset = async (data) => {
  const chunkSize = 100;
  const totalChunks = Math.ceil(data.length / chunkSize);
  
  console.log(`Starting bulk operation: ${data.length} items in ${totalChunks} chunks`);
  
  const result = await bulkExecute(
    async (chunk) => {
      const response = await yourApiFunction(chunk);
      console.log(`Processed chunk: ${result.totalProcessed + 1}/${totalChunks}`);
      return response;
    },
    data,
    { maxCount: chunkSize, parallel: false, delay: 100 }
  );
  
  return result;
};
```

## 🚫 Common Pitfalls

### 1. Don't Use Extremely Large Batch Sizes
```javascript
// ❌ Avoid - might timeout or overwhelm server
{ maxCount: 1000 }

// ✅ Better - reasonable batch size
{ maxCount: 100 }
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
  console.log('No data to process');
  return;
}

const result = await bulkExecute(func, data, config);
```

## 📚 API Reference

### Function Signature

```typescript
async function bulkExecute<T>(
  func: (items: any[]) => Promise<T>,
  items: any[],
  config: BulkExecutorConfig
): Promise<BulkExecutorResult<T>>
```

### Parameters

- **`func`**: Function that processes a chunk of items
- **`items`**: Array of items to process
- **`config`**: Configuration object with maxCount, delay, and parallel options

### Returns

Promise that resolves to `BulkExecutorResult<T>` containing successful results, failed chunks, and processing statistics.

---

The Bulk Executor provides a simple, reliable way to handle large-scale operations while respecting API limits and providing comprehensive error handling.
