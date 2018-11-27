const userLogIn = (token) => {
  return {
    type: 'USER_LOGGED_IN',
    token,
    message: 'Okay'
  }
};

const userNotLogIn = () => {
  return {
    type: 'USER_NOT_LOGGED_IN',
    message: 'Oops!'
  }
};

const fetchResultsBegin = (searchCriteria) => ({
  type: 'FETCH_RESULTS_BEGIN',
  searchCriteria
});

const fetchResultsSuccess = (results) => ({
  type: 'FETCH_RESULTS_SUCCESS',
  results
});

const fetchResultsError = (error) => ({
  type: 'FETCH_RESULTS_ERROR',
  error
});