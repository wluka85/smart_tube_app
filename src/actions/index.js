export const userLogIn = (token) => {
  return {
    type: 'USER_LOGGED_IN',
    token,
    message: 'Okay'
  }
};

export const userNotLogIn = () => {
  return {
    type: 'USER_NOT_LOGGED_IN',
    message: 'Oops!'
  }
};

export const fetchResultsBegin = (searchCriteria) => ({
  type: 'FETCH_RESULTS_BEGIN',
  searchCriteria
});

export const fetchResultsSuccess = (results) => ({
  type: 'FETCH_RESULTS_SUCCESS',
  results
});

export const fetchResultsError = (error) => ({
  type: 'FETCH_RESULTS_ERROR',
  error
});