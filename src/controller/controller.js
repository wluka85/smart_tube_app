import Video from "../model/video";
import JSON from 'circular-json';

class Controller {

    constructor(model) {
        this.model = model;
        this.videos = [];
        this.accessToken = '';
        this.api = 'https://www.googleapis.com/youtube/v3/';
    }

    singIn(accessToken) {
        this.accessToken = accessToken;
        this.model.isSignedIn = true;
        this.model.notifyAllObservers();
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
        this.model.typeContentToPlayInPlayer = 'video';
        this.model.notifyAllObservers();
    }

    playVideoFromPlaylist(video) {
        this.model.chosenVideo = video;
        this.model.typeContentToPlayInPlayer = 'video';
        this.model.notifyAllObservers();
    }

    playPlaylist() {
        this.model.typeContentToPlayInPlayer = 'playlist';
        this.model.notifyAllObservers()
    }

    hideSelectedVideo() {
        this.model.chosenVideo = null;
        this.model.typeContentToPlayInPlayer = null;
        this.model.notifyAllObservers();
    }


    fetchMethodGet(url, type) {
        fetch(this.api + url,  {
            method: 'GET',
            headers: new Headers({ 'Authorization': 'Bearer ' + this.accessToken })
            })
            .then((response) => response.json())
            .then((data) => {
                this.updateModel(type, data);
            })

    }


    updateModel(type, data) {
        switch (type) {
            case 'search-videos':
                this.model.videos = data.items;
                break;

            case 'search-user-catalogs':
                this.model.setCatalogs(data.items);
                break;

            case 'search-playlist':
                this.model.setVideoList(data.items);
                break;
        }

        this.model.notifyAllObservers();
    }

    searchVideo(searchCriteria) {
        if (searchCriteria.length === 0) {
            this.model.videos = [];
            this.model.notifyAllObservers();

        } else {
            const url = `search?part=snippet&q=${searchCriteria}&maxResults=10&type=video`;
            this.fetchMethodGet(url, 'search-videos');
        }


    }

    searchUserCatalogs() {
        const url = 'playlists?part=snippet&mine=true';
        this.fetchMethodGet(url, 'search-user-catalogs');
    }

    getPlaylist(etag) {
        const url = 'playlistItems?part=snippet&maxResults=10&playlistId=' + etag;
        this.model.setCurrentPlaylist(etag);
        this.fetchMethodGet(url, 'search-playlist');
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
            .then(() => {
                this.model.shouldBeShownCatalogCreator = false;
                this.searchUserCatalogs();
            })

    }


    addToPlaylist(videoId) {
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
            .then((response) => {
                this.getPlaylist(this.model.currentPlaylist.id);
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
}
export default Controller;