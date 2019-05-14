import 'bootstrap/dist/css/bootstrap.css';
// import 'babel-polyfill';
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
import './css/mainWindow.css';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga, store.dispatch, store.getState);

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


