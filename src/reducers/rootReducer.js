import {combineReducers} from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import catalogReducer from "./catalogReducer";
import playlistReducer from "./playlistReducer";
import videoReducer from './videoReducer';
import messageReducer from './messageReducer';


const rootReducer = combineReducers({
  authReducer,
  catalogReducer,
  searchReducer,
  videoReducer,
  playlistReducer,
  messageReducer

});


export default rootReducer;