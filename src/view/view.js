import React from 'react';
import * as ReactDOM from "react-dom";
import AuthorizationComponent from "./components/authorizationComponent";
import '../css/headerStyles.css';
import '../css/mainWindow.css';
import AppPage from './components/appPage';

export default class View {
    constructor(controller) {
        this.controller = controller;
        this.loadPage();
    }

    loadPage() {
        if (this.controller.model.isSignedIn) {
            ReactDOM.render(<AppPage 
                controller={this.controller} 
                loadPageAction={this.loadPage.bind(this)}/>
                , document.getElementById('root'));

        } else {
            ReactDOM.render(<AuthorizationComponent 
                loadPageAction={this.loadPage.bind(this)} 
                controller={this.controller}/>
                , document.getElementById('root'));
        }
    }

}