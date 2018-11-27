const initialState = {
  accessToken: '',
  message: '',
    redirect: false
};

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'USER_LOGGED_IN':

      return {...state, message: action.message, accessToken: action.accessToken, redirect: action.redirect};
      case 'USER_REDIRECTED':

          return {...state, redirect: action.redirect};
    case 'USER_NOT_LOGGED_IN':
    return {...state, message: action.message};

      case 'USER_LOGGED_OUT':
        return {...state, message: action.message, accessToken: action.accessToken};

    default:
      return state;  
  }
  
};

export default authReducer;