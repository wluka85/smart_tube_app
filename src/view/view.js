import * as ReactDOM from "react-dom";

export default class View {
    constructor(controller) {
        this.controller = controller;
        this.authorization = true;
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


            </div>
        )

    }
}