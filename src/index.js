import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import AppLoggedIn from "./AppLoggedIn";
import {Switch} from "react-router";


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
      <Route exact path='/' component={App} />
        <Route exact path='/log' component={AppLoggedIn} />
        </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));


