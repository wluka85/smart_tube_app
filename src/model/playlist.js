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
    console.log('in getVideoList', videos);
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
            element.id);
        videoList.push(video);
    });
    return videoList;
}