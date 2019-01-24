export default class Video {

    constructor(channelId, channelTitle, description, publishedAt, title, imageURL, videoId, playlistElementId) {
        this.channelId = channelId;
        this.channelTitle = channelTitle;
        this.description = description;
        this.publishedAt = publishedAt;
        this.title = title;
        this.imageURL = imageURL;
        this.videoId = videoId;
        this.playlistElementId = playlistElementId;
    }


}

export const getVideoList = (videos) => {
    let videoList = [];
    if (videos) {
        videos.forEach(element => {
            let result = element.snippet;
            let video = new Video(result.channelId, result.channelTitle,
                result.description, result.publishedAt, result.title, result.thumbnails.high.url, result.resourceId.videoId, element.id);
            videoList.push(video);
        });
    }

    return videoList;
}