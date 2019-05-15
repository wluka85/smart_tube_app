export const getSearchResultsRequested = searchCriteria => ({
  type: 'GET_SEARCH_RESULTS_REQUESTED',
  searchCriteria,
});

export const getSearchResultsSuccess = videoList => ({
  type: 'GET_SEARCH_RESULTS_SUCCESS',
  items: videoList,
});

export const getSearchResultsFailed = errorMessage => ({
  type: 'GET_SEARCH_RESULTS_FAILED',
  errorMessage,
});