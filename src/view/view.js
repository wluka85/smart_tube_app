import React from 'react';

import * as ReactDOM from "react-dom";
import AuthorizationComponent from "./components/authorizationComponent";
import CatalogContainer from "./components/catalogContainer";
import HeaderContainer from './components/headerContainer';
import ItemsList from './components/itemsList';
import DetailedVideo from './components/detailedVideo';
import PlaylistContainer from "./components/playlistContainer";
import CatalogCreatorComponent from "./components/catalogCreatorComponent";
require ('../css/headerStyles.css');
require ('../css/mainWindow.css');

export default class View {
    constructor(controller) {
        this.controller = controller;
        this.loadPage();
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
                <div id="main-container">
                    <CatalogContainer controller={this.controller} />
                    <CatalogCreatorComponent controller={this.controller}/>
                    <div id="video-list-container">
                        <ItemsList controller = {this.controller}/>
                        <DetailedVideo controller = {this.controller}/>
                    </div>
                    <PlaylistContainer controller={this.controller} />
                </div>
            </div>
        );        
    }
}