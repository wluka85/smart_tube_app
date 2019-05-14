const initialState = {
    catalogList: [],
    showAddNewCatalogWindow: false,
    isFetching: false,
    errorMessage: '',
};

const catalogReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_USER_CATALOGS_REQUESTED':
            return { ...state, isFetching: true }
        
        case 'GET_USER_CATALOGS_SUCCESS':
            return {...state, catalogList: action.catalogList, isFetching: false };

        case 'GET_USER_CATALOGS_FAILED':
            return {...state, isFetching: false, errorMessage: action.errorMessage }

        case 'SHOW_ADD_NEW_CATALOG':
            return {...state, showAddNewCatalogWindow: action.showAddNewCatalogWindow};

        default:
            return state;
    }

};

export default catalogReducer;