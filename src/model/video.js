export default class Video {

    constructor(channelId, channelTitle, description, publishedAt, title, imageURL, videoId) {
        this.channelId = channelId;
        this.channelTitle = channelTitle;
        this.description = description;
        this.publishedAt = publishedAt;
        this.title = title;
        this.imageURL = imageURL;
        this.videoId = videoId;
    }
}