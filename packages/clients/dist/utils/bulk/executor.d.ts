export interface BulkExecutorConfig {
    maxCount: number;
    delay?: number;
    parallel?: boolean;
}
export interface BulkExecutorResult<T> {
    successful: T[];
    failed: Array<{
        chunk: any[];
        error: unknown;
    }>;
    totalChunks: number;
    totalProcessed: number;
}
/**
 * Generic bulk executor that splits large arrays into smaller chunks
 * and executes a function multiple times
 *
 * @param func - Function to execute (e.g., deleteCodesByCodeId)
 * @param ids - Array of IDs to process
 * @param config - Configuration with maxCount, delay, parallel options
 */
export declare function bulkExecute<T>(func: (ids: any[]) => Promise<T>, ids: any[], config: BulkExecutorConfig): Promise<BulkExecutorResult<T>>;
