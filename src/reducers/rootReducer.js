import {combineReducers} from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import catalogReducer from "./catalogReducer";


const rootReducer = combineReducers({
  authReducer,
  catalogReducer,
  searchReducer
});


export default rootReducer;