import Playlist from "./playlist";

export default class Model {

    constructor() {
        this.observerList = [];
        this.message = '';
        this.videos = [];
        this.isSignedIn = false;
        this.currentPlaylist = null;
        this.catalogs = [];
        this.videoList = [];
        this.chosenVideo = null;
    }

    setCurrentPlaylist(playlist) {
        this.currentPlaylist = playlist;
    }

    setCatalogs(array) {
        this.catalogs = [];
        array.forEach(element => {
            let playlist = new Playlist(element.id, element.snippet.title, element.snippet.description, element.etag, element.snippet.publishedAt);
            this.catalogs.push(playlist);
            console.log(playlist)
        })
        
    }

    attach(observer) {
        this.observerList.push(observer);
        console.log(observer)
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