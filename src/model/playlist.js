export default class Playlist {

    constructor(id, title, description, etag, publishedAt) {
        this.id =id;
        this.title = title;
        this.description = description;
        this.etag = etag;
        this.publishedAt = publishedAt;
    }
}