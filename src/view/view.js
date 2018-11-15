import React from 'react';

import * as ReactDOM from "react-dom";
import AppPage from './components/appPage';
import GoogleLogin from "react-google-login";

export default class View {
    constructor(controller) {
        this.controller = controller;
        this.authorization = true;
        this.addComponents();
    }

    responseGoogle(response) {
        console.log(response.accessToken);
        this.controller.searchUserPlaylists(response.accessToken);
        ReactDOM.render(<AppPage />, document.getElementById('container'));
    }



    addComponents() {
        if (this.authorization === false) {
            ReactDOM.render(this.getSmartTubeContainer(), document.getElementById('root'));

        } else {
            ReactDOM.render(<GoogleLogin
                clientId="549983921860-7ctt7f0r7777vuir9e1pe3bj7p1siea6.apps.googleusercontent.com"
                buttonText="Login"
                scope="https://www.googleapis.com/auth/youtube"
                onSuccess={this.responseGoogle.bind(this)}
                onFailure={this.responseGoogle}
            />, document.getElementById('root'));
        }



    }

    // getSmartTubeContainer(){
    //     return (
    //         <div id="container">
    //             <AppPage 
    //                 searchCriteria = {searchInput => this.setState({searchCriteria : searchInput})}/>
    //             <p>{this.searchCriteria}</p>
    //         </div>
    //     );
    // }
}