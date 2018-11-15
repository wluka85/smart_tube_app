import React from 'react';

import * as ReactDOM from "react-dom";
import AppPage from './components/appPage';
import AuthorizationComponent from "./components/authorizationComponent";

export default class View {
    constructor(controller) {
        this.controller = controller;
        this.loadPage(false);
        this.state= {
            searchCriteria: 'elvis'
        }
    }





    loadPage() {
        if (this.controller.model.isSignedIn) {
            console.log(this);
            ReactDOM.render(this.getSmartTubeContainer(), document.getElementById('root'));

        } else {
            ReactDOM.render(<AuthorizationComponent loadPageAction={this.loadPage.bind(this)} controller={this.controller}/>,
                                                    document.getElementById('root'));
        }



    }

    getSmartTubeContainer() {
        return (
            <div id="container">
                <AppPage />

            </div>
        );
    }
}