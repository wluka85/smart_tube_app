export default class Model {

    constructor() {
        this.observerList = [];
    }

    attach(observer) {
        this.observerList.push(observer);
    }

    detach(observer) {
        let index = this.observerList.indexOf(observer);
        this.observerList.splice(index, 1);
    }

    notifyAllObservers() {
        this.observerList.forEach(element => {
            element.update(this);
        });
    }
}