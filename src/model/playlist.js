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
            result.thumbnails.default.url,
            element.id.videoId);
        videoList.push(video);
    });
    return videoList;
}