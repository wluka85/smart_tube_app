import action from '../actions/index';

const initialState = {
  accessToken: '',
  message: ''
};

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'USER_LOGGED_IN':
    console.log('were in reducer', action.message);
      return {...state, message: 'Cool!'};
    case 'USER_NOT_LOGGED_IN':
    console.log('were not in reducer', action.message);
    return {...state, message: 'Oops!'};
    default:
      return state;  
  }
  
};


export default authReducer;