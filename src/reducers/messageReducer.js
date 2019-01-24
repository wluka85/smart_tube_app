const initialState = {
    message: '',
    isVisible: false
};

const messageReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CLOSE_BUTTON_CLICKED':
            return {...state, message: action.message, isVisible: action.isVisible };

        case 'MESSAGE_SETTED':
            return {...state, message: action.message, isVisible: action.isVisible };

        default:
            return state;
    }
};

export default messageReducer;