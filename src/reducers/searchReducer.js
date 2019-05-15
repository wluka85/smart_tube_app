
const initialState = {
  items: [],
  loading: false,
  error: null,
  searchCriteria: ''
};

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_SEARCH_RESULTS_REQUESTED':
      return {
        ...state,
        loading: true,
        error: null,
        searchCriteria: action.searchCriteria
      };
    case 'GET_SEARCH_RESULTS_SUCCESS':
      return {
        ...state,
        loading: false,
        items: state.items.slice(0, 0).concat(action.items)
      };
    case 'GET_SEARCH_RESULTS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.errorMessage,
        items:[]
      }
    default:
      return state;  
  }
};

export default searchReducer;