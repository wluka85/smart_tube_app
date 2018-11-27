import Playlist from "./playlist";
import Video from "./video";

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
        this.shouldBeShownCatalogCreator = false;
        this.typeContentToPlayInPlayer = null;
    }

    setVideos(videos) {
        this.videos = videos;
    }

    setCurrentPlaylist(playlistId) {
        this.catalogs.forEach(element => {
            if (element.id === playlistId) {
                this.currentPlaylist = element;
            }
        })

    }

    setVideoList(videos) {
        this.videoList = [];
        videos.forEach(element => {
            console.log(element)
            let result = element.snippet;
            let video = new Video(result.channelId, result.channelTitle,
                result.description, result.publishedAt, result.title, result.thumbnails.high.url, result.resourceId.videoId, element.id);
            this.videoList.push(video);
        })
    }

    setCatalogs(array) {
        this.catalogs = [];
        array.forEach(element => {
            let playlist = new Playlist(element.id, element.snippet.title, element.snippet.description, element.etag, element.snippet.publishedAt);
            this.catalogs.push(playlist);
            console.log(playlist)
        })

        if (this.currentPlaylist === null) {
            this.currentPlaylist = this.catalogs[0];
        }
        
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