class Controller {

    constructor(model) {
        this.model = model;
        this.videos = [];
    }

    searchVideo(accessToken, searchCriteria) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchCriteria}`, {
            method: 'GET',
            headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.items);
                this.videos = data.items;
            })
    }

    searchUserPlaylists(accessToken) {
        fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true`, {
            method: 'GET',
            headers: new Headers({'Authorization': 'Bearer ' + accessToken})
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.items);
                this.videos = data.items;
            })
    }
}
export default Controller;