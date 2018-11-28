import {combineReducers} from 'redux';
import authReducer from './authReducer';
import catalogReducer from "./catalogReducer";
import playlistReducer from "./playlistReducer";


const rootReducer = combineReducers({
  authReducer, catalogReducer, playlistReducer
});

export default rootReducer;