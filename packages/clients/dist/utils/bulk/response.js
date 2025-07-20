"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBulkResponseSummary = exports.extractAllErrors = exports.filterSuccessfulResponses = exports.mergeBulkResponseData = void 0;
const mergeBulkResponseData = (responses) => {
    const mergedData = [];
    const errors = [];
    const summaries = [];
    responses.forEach(response => {
        if (response.data?.data && Array.isArray(response.data.data)) {
            mergedData.push(...response.data.data);
        }
        if (response.data?.errors) {
            errors.push(response.data.errors);
        }
        if (response.data?.summary) {
            summaries.push(response.data.summary);
        }
    });
    return {
        data: mergedData,
        errors: errors.length > 0 ? errors : null,
        summaries: summaries.length > 0 ? summaries : null,
        totalResponses: responses.length
    };
};
exports.mergeBulkResponseData = mergeBulkResponseData;
/**
 * Filter out only successful responses (without errors)
 */
const filterSuccessfulResponses = (responses) => {
    return responses.filter(response => !response.data?.errors);
};
exports.filterSuccessfulResponses = filterSuccessfulResponses;
/**
 * Extract all errors from bulk responses
 */
const extractAllErrors = (responses) => {
    return responses
        .map(response => response.data?.errors)
        .filter(Boolean)
        .flat();
};
exports.extractAllErrors = extractAllErrors;
/**
 * Get summary statistics from merged bulk responses
 */
const getBulkResponseSummary = (responses) => {
    const merged = (0, exports.mergeBulkResponseData)(responses);
    const successful = (0, exports.filterSuccessfulResponses)(responses);
    const allErrors = (0, exports.extractAllErrors)(responses);
    return {
        totalResponses: responses.length,
        successfulResponses: successful.length,
        failedResponses: responses.length - successful.length,
        totalItems: merged.data.length,
        totalErrors: allErrors.length,
        hasErrors: allErrors.length > 0,
        successRate: responses.length > 0 ? (successful.length / responses.length) * 100 : 0
    };
};
exports.getBulkResponseSummary = getBulkResponseSummary;
