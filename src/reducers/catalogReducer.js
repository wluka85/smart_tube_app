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
            return {...state, isFetching: false, errorMessage: action.errorMessage };

        case 'ADD_USER_CATALOG_REQUESTED':
            return { ...state, isFetching: true };
        
        case 'ADD_USER_CATALOG_SUCCESS':
            const tempCatalogList = JSON.parse(JSON.stringify(state.catalogList));
            tempCatalogList.push(action.catalog);
            return { ...state, catalogList: tempCatalogList, isFetching: false };

        case 'ADD_USER_CATALOG_FAILED':
            return { ...state, errorMessage: action.errorMessage, isFetching: false }

        case 'SHOW_ADD_NEW_CATALOG':
            return {...state, showAddNewCatalogWindow: action.showAddNewCatalogWindow};

        default:
            return state;
    }

};

export default catalogReducer;