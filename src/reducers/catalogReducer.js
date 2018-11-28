const initialState = {
    catalogList: [],
    showAddNewCatalogWindow: false
};

const catalogReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_CATALOGS_SUCCESS':
            return {...state, catalogList: action.catalogList};

        case 'SHOW_ADD_NEW_CATALOG':
            return {...state, showAddNewCatalogWindow: action.showAddNewCatalogWindow};

        default:
            return state;
    }

};

export default catalogReducer;