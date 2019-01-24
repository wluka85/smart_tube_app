import Video from "./video";

export default class Playlist {

    constructor(id, title, description, etag, publishedAt) {
        this.id =id;
        this.title = title;
        this.description = description;
        this.etag = etag;
        this.publishedAt = publishedAt;
    }
}

export const getCatalogs = (array) => {
    let catalogs = [];
    array.forEach(element => {
        let playlist = new Playlist(element.id, element.snippet.title, element.snippet.description, element.etag, element.snippet.publishedAt);
        catalogs.push(playlist);
    })

    return catalogs;
};

export const getVideoList = (videos) => {
    let videoList = [];
    videos.forEach(element => {
        let result = element.snippet;
        let video = new Video(
            result.channelId, 
            result.channelTitle,
            result.description, 
            result.publishedAt, 
            result.title, 
            result.thumbnails.high.url,
            element.id.videoId);
        videoList.push(video);
    });
    return videoList;
};