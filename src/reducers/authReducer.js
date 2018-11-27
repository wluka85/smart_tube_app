const initialState = {
  accessToken: '',
  message: ''
};

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'USER_LOGGED_IN':

      return {...state, message: action.message, accessToken: action.accessToken};
    case 'USER_NOT_LOGGED_IN':
    return {...state, message: action.message};

      case 'USER_LOGGED_OUT':
        return {...state, message: action.message, accessToken: action.accessToken};

    default:
      return state;  
  }
  
};

export default authReducer;