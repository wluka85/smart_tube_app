import React from 'react';
import * as ReactDOM from "react-dom";
import AppPage from './components/appPage';

export default class View {
    constructor(controller) {
        this.controller = controller;
        this.authorization = true;
        this.addComponents();
    }

    addComponents() {
        if (this.authorization) {
            ReactDOM.render(this.getSmartTubeContainer(), document.getElementById('root'));

        } else {
            ReactDOM.render(this.getAuthorizationContainer(), document.getElementById('root'));
        }



    }

    getAuthorizationContainer() {

    }

    getSmartTubeContainer() {
        return (
            <div id="container">
                <AppPage />

            </div>
        )

    }
}