const initialState = {
    catalogList: []
};

const catalogReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_CATALOGS_SUCCESS':

            return {...state, catalogList: action.catalogList};

        default:
            return state;
    }

};

export default catalogReducer;