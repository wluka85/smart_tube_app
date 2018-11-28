import {combineReducers} from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import videoReducer from './videoReducer';


const rootReducer = combineReducers({
  authReducer,
  searchReducer,
  videoReducer
});


export default rootReducer;