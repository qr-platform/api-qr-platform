export interface BulkResponseData {
  data: {
    data: any[]
    summary?: any
    errors?: any
  }
  request?: any
  response?: any
}

export const mergeBulkResponseData = (responses: BulkResponseData[]) => {
  const mergedData: any[] = []
  const errors: any[] = []
  const summaries: any[] = []

  responses.forEach(response => {
    if (response.data?.data && Array.isArray(response.data.data)) {
      mergedData.push(...response.data.data)
    }

    if (response.data?.errors) {
      errors.push(response.data.errors)
    }

    if (response.data?.summary) {
      summaries.push(response.data.summary)
    }
  })

  return {
    data: mergedData,
    errors: errors.length > 0 ? errors : null,
    summaries: summaries.length > 0 ? summaries : null,
    totalResponses: responses.length
  }
}

/**
 * Filter out only successful responses (without errors)
 */
export const filterSuccessfulResponses = (responses: BulkResponseData[]) => {
  return responses.filter(response => !response.data?.errors)
}

/**
 * Extract all errors from bulk responses
 */
export const extractAllErrors = (responses: BulkResponseData[]) => {
  return responses
    .map(response => response.data?.errors)
    .filter(Boolean)
    .flat()
}

/**
 * Get summary statistics from merged bulk responses
 */
export const getBulkResponseSummary = (responses: BulkResponseData[]) => {
  const merged = mergeBulkResponseData(responses)
  const successful = filterSuccessfulResponses(responses)
  const allErrors = extractAllErrors(responses)
  
  return {
    totalResponses: responses.length,
    successfulResponses: successful.length,
    failedResponses: responses.length - successful.length,
    totalItems: merged.data.length,
    totalErrors: allErrors.length,
    hasErrors: allErrors.length > 0,
    successRate: responses.length > 0 ? (successful.length / responses.length) * 100 : 0
  }
}
