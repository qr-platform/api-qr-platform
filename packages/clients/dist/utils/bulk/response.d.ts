export interface BulkResponseData {
    data: {
        data: any[];
        summary?: any;
        errors?: any;
    };
    request?: any;
    response?: any;
}
export declare const mergeBulkResponseData: (responses: BulkResponseData[]) => {
    data: any[];
    errors: any[] | null;
    summaries: any[] | null;
    totalResponses: number;
};
/**
 * Filter out only successful responses (without errors)
 */
export declare const filterSuccessfulResponses: (responses: BulkResponseData[]) => BulkResponseData[];
/**
 * Extract all errors from bulk responses
 */
export declare const extractAllErrors: (responses: BulkResponseData[]) => any[];
/**
 * Get summary statistics from merged bulk responses
 */
export declare const getBulkResponseSummary: (responses: BulkResponseData[]) => {
    totalResponses: number;
    successfulResponses: number;
    failedResponses: number;
    totalItems: number;
    totalErrors: number;
    hasErrors: boolean;
    successRate: number;
};
