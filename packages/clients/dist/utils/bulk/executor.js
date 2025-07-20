"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkExecute = bulkExecute;
/**
 * Generic bulk executor that splits large arrays into smaller chunks
 * and executes a function multiple times
 *
 * @param func - Function to execute (e.g., deleteCodesByCodeId)
 * @param ids - Array of IDs to process
 * @param config - Configuration with maxCount, delay, parallel options
 */
async function bulkExecute(func, ids, config) {
    const { maxCount, delay = 0, parallel = true } = config;
    // Split IDs into chunks
    const chunks = [];
    for (let i = 0; i < ids.length; i += maxCount) {
        chunks.push(ids.slice(i, i + maxCount));
    }
    const result = {
        successful: [],
        failed: [],
        totalChunks: chunks.length,
        totalProcessed: 0,
    };
    if (parallel) {
        // Execute all chunks in parallel
        const promises = chunks.map(async (chunk) => {
            try {
                const response = await func(chunk);
                result.successful.push(response);
                result.totalProcessed++;
                return { success: true, response };
            }
            catch (error) {
                result.failed.push({ chunk, error });
                result.totalProcessed++;
                return { success: false, error };
            }
        });
        await Promise.all(promises);
    }
    else {
        // Execute chunks sequentially
        for (const chunk of chunks) {
            try {
                const response = await func(chunk);
                result.successful.push(response);
                result.totalProcessed++;
            }
            catch (error) {
                result.failed.push({ chunk, error });
                result.totalProcessed++;
            }
            // Add delay between requests if specified
            if (delay > 0 && chunk !== chunks[chunks.length - 1]) {
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }
    return result;
}
