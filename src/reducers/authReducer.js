const initialState = {
  accessToken: '',
  message: ''
};

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'USER_LOGGED_IN':
    console.log('were in reducer', action.accessToken);
      return {...state, message: 'Cool!', accessToken: action.accessToken};
    case 'USER_NOT_LOGGED_IN':
    console.log('were not in reducer', action.message);
    return {...state, message: action.message};
    default:
      return state;  
  }
  
};


export default authReducer;