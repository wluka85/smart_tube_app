class Controller {

    constructor(model) {
        this.model = model;
        this.videos = [];
        this.accessToken = '';
    }

    singIn(accessToken) {
        this.accessToken = accessToken;
        this.model.isSignedIn = true;
        this.model.notifyAllObservers();
    }

    setSearchCriteria(searchCriteria) {
        this.searchCriteria = searchCriteria;
    }

    prepareFailureSignInMessage() {
        this.model.isSignedIn = false;
        this.model.message = 'Failure! Wrong Login or Password';
        this.model.notifyAllObservers();
    }

    searchVideo(searchCriteria) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchCriteria}`, {
            method: 'GET',
            headers: new Headers({ 'Authorization': 'Bearer ' + this.accessToken })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.items);
                this.videos = data.items;
                this.model.notifyAllObservers();
            })
    }

    searchUserPlaylists() {
        fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true`, {
            method: 'GET',
            headers: new Headers({'Authorization': 'Bearer ' + this.accessToken})
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.items);
                this.videos = data.items;
                this.model.notifyAllObservers();
            })
    }
}
export default Controller;