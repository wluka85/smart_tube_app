class Playlist {

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
}