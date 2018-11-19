import Video from "../model/video";

class Controller {

    constructor(model) {
        this.model = model;
        this.videos = [];
        this.accessToken = '';
    }

    singIn(accessToken) {
        this.accessToken = accessToken;
        this.model.isSignedIn = true;
        this.model.notifyAllObservers();
    }

    setSearchCriteria(searchCriteria) {
        this.searchCriteria = searchCriteria;
    }

    prepareFailureSignInMessage() {
        this.model.isSignedIn = false;
        this.model.message = 'Failure! Wrong Login or Password';
        this.model.notifyAllObservers();
    }

    showSelectedVideo(video) {
        this.model.chosenVideo = video;
        this.model.notifyAllObservers();
    }

    hideSelectedVideo() {
        this.model.chosenVideo = null;
        this.model.notifyAllObservers();
    }

    searchVideo(searchCriteria) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchCriteria}&maxResults=10`, {
            method: 'GET',
            headers: new Headers({ 'Authorization': 'Bearer ' + this.accessToken })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.items);
                this.model.videos = data.items;
                this.model.notifyAllObservers();
            })
    }

    searchUserPlaylists() {
        fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true`, {
            method: 'GET',
            headers: new Headers({'Authorization': 'Bearer ' + this.accessToken})
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.items);
                this.model.videos = data.items;
                this.model.notifyAllObservers();
            })
    }

    searchUserCatalogs() {
        fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true', {
            method: 'GET',
            headers: new Headers({'Authorization': 'Bearer ' + this.accessToken})
        })
        .then(response => response.json())
        .then(data => {
            this.model.setCatalogs(data.items);
            this.model.notifyAllObservers();
        })
    }

    deleteCatalog(etag) {
        fetch('https://www.googleapis.com/youtube/v3/playlists?id=' + etag, {
            method: 'DELETE',
            headers: new Headers({'Authorization': 'Bearer ' + this.accessToken})
        })
            .then(response => {
                this.searchUserCatalogs()
            })
    }

    getPlaylist(etag) {
        fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + etag, {
            method: 'GET',
            headers: new Headers({ 'Authorization': 'Bearer ' + this.accessToken })
        })
            .then((response) => response.json())
            .then((data) => {
                let videos = data.items;
                this.model.setCurrentPlaylist(etag, videos);
                this.model.notifyAllObservers();
            })
    }

    getCurrentPlaylist() {
        this.model.notifyAllObservers();
    }

    addNewPlaylist() {
        console.log('Add new');
    }
}
export default Controller;