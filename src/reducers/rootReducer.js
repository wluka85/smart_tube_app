import {combineReducers} from 'redux';
import authReducer from './authReducer';
import catalogReducer from "./catalogReducer";


const rootReducer = combineReducers({
  authReducer, catalogReducer
});

export default rootReducer;