import {combineReducers} from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import catalogReducer from "./catalogReducer";
import videoReducer from './videoReducer';


const rootReducer = combineReducers({
  authReducer,
  catalogReducer,
  searchReducer,
  videoReducer
});


export default rootReducer;