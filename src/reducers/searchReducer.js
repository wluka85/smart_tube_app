
const initialState = {
  items: [],
  loading: false,
  error: null,
  searchCriteria: ''
};

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_RESULTS_BEGIN':
      return {
        ...state,
        loading: true,
        error: null,
        searchCriteria: action.searchCriteria
      };
    case 'FETCH_RESULTS_SUCCESS':
      return {
        ...state,
        loading: false,
        items: state.items.slice(0, 0).concat(action.items)
      };
    case 'FETCH_RESULTS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
        items:[]
      }
    default:
      return state;  
  }
};

export default searchReducer;