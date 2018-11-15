import React from 'react';

import * as ReactDOM from "react-dom";
import AppPage from './components/appPage';
import AuthorizationComponent from "./components/authorizationComponent";
import HeaderContainer from './components/headerContainer';

export default class View {
    constructor(controller) {
        this.controller = controller;
        this.authorization = true;
        this.loadPage();
    }

    responseGoogle(response) {
        console.log(response.accessToken);
        this.controller.searchUserPlaylists(response.accessToken);
        ReactDOM.render(this.getSmartTubeContainer(), document.getElementById('container'));
        this.loadPage(false);

    }

    loadPage() {
        if (this.controller.model.isSignedIn) {
            ReactDOM.render(this.getSmartTubeContainer(), document.getElementById('root'));

        } else {
            ReactDOM.render(<AuthorizationComponent 
                loadPageAction={this.loadPage.bind(this)} 
                controller={this.controller}/>, 
                document.getElementById('root'));
        }
    }

    getSmartTubeContainer() {
        return (
            <div id="container">
                <HeaderContainer 
                    controller = {this.controller} 
                    loadPageAction={this.loadPage.bind(this)}/>

            </div>
        );
    }
}