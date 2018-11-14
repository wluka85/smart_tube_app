class Controller {

    constructor(model) {
        this.model = model;
    }

    searchVideo(accessToken, searchCriteria) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchCriteria}`, {
            method: 'GET',
            headers: new Headers({ 'Authorization': 'Bearer ' + accessToken })

        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })


    }
}
export default Controller;