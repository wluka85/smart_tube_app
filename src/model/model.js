export default class Model {

    constructor() {
        this.observerList = [];
        this.message = '';
        this.videos = [];
        this.isSignedIn = false;
        this.chosenVideo = null;
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