import Model from "./model/model";
import Controller from "./controller/controller";
import View from "./view/view";

export default class Main {
    constructor() {
        this.model = new Model();
        this.controller = new Controller(this.model);
        this.view = new View(this.controller);
    }
}