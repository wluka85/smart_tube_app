import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux';

import authReducer from './reducers/authReducer';

console.log('root reducer',rootReducer);

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={App} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));


