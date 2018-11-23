import Video from "../model/video";
import JSON from 'circular-json';

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
        let snippet = video.snippet;
        let videoTemp = new Video(snippet.channelId, snippet.channelTitle,
            snippet.description, snippet.publishedAt, snippet.title, snippet.thumbnails.high.url, video.id.videoId);
        this.model.chosenVideo = videoTemp;
        this.model.notifyAllObservers();
    }

    playVideoFromPlaylist(video) {
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
                this.searchUserCatalogs();
            })
    }

    deletePlaylistElement(elementId, playlistId) {
        console.log(elementId)
        fetch('https://www.googleapis.com/youtube/v3/playlistItems?id=' + elementId, {
            method: 'DELETE',
            headers: new Headers({'Authorization': 'Bearer ' + this.accessToken})
        })
            .then(response => {
                this.getPlaylist(playlistId);
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

    showModalCatalogCreator() {
        this.model.shouldBeShownCatalogCreator = true;
        this.model.notifyAllObservers();
    }

    hideAddCatalogWindow() {
        this.model.shouldBeShownCatalogCreator = false;
        this.model.notifyAllObservers();
    }

    addNewPlaylist(playlistTitle, playlistDescription) {
        fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet', {
            method: 'POST',
            headers: new Headers({ 'Authorization': 'Bearer ' + this.accessToken, 'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'}),
            body: JSON.stringify({snippet: {
                    "title": playlistTitle,
                    "description": playlistDescription
                }
            })

        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.model.shouldBeShownCatalogCreator = false;
                this.searchUserCatalogs();
            })

    }

    addToPlaylist(videoId, event) {
        fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet', {
            method: 'POST',
            headers: new Headers({ 'Authorization': 'Bearer ' + this.accessToken, 'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'}),
            body: JSON.stringify({"snippet": {
                    "playlistId": this.model.currentPlaylist.id,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": videoId
                    }
                }
            })

        })
            .then((response) => response.json())
            .then((data) => {
                this.getPlaylist(this.model.currentPlaylist.id);
            })
    }
}
export default Controller;