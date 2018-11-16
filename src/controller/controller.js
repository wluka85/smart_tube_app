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

    searchVideo(searchCriteria) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchCriteria}`, {
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

    searchUserPlaylists() {
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
                this.searchUserPlaylists()
            })
    }

    getPlaylist(etag) {
        fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + etag, {
            method: 'GET',
            headers: new Headers({ 'Authorization': 'Bearer ' + this.accessToken })
        })
            .then((response) => response.json())
            .then((data) => {
                this.model.currentPlaylist = etag;
                let videos = data.items;
                videos.forEach(element => {
                    let result = element.snippet;
                    let video = new Video(result.channelId, result.channelTitle,
                        result.description, result.publishedAt, result.title, result.thumbnails.high.url, element.id);
                    this.model.videoList.push(video);
                })
                console.log(this.model.videoList)
                this.model.notifyAllObservers();
            })
    }

    addNewPlaylist() {
        console.log('Add new');
    }
}
export default Controller;