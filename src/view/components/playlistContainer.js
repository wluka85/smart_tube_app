import React, {Component} from "react";
import CatalogComponent from "./catalogComponent";
import PlaylistElementComponent from "./playlistElementComponent";

export default class PlaylistContainer extends Component {

    constructor(props) {
        super();
        this.controller = props.controller;
        this.controller.model.attach(this);
        this.state = {
            playlistName: '',
            playlistElements: []
        }
        this.handleRefreshPlaylist();
    }

    render() {
        return (
            <div id="playlist-container">
                <div id="playlist-name">{this.state.playlistName}</div>
                {this.getPlaylistElements()}
            </div>
        )
    }

    handleRefreshPlaylist() {
        this.controller.getCurrentPlaylist();
    }

    handleDeletePlaylistElement(etag) {
        this.controller.deletePlaylistElement(etag);
    }

    handlePlayVideo(etag) {
        this.controller.setCurrentVideo(etag);
    }

    getPlaylistElements() {
        return (
            <React.Fragment>
                {this.state.playlistElements.map((element, i) => {
                    return (<PlaylistElementComponent key={i}
                                                      imageURL={element.imageURL}
                                                      id={element.id}
                                                      name={element.title}
                                                      date={element.publishedAt}
                                                      description={element.description}
                                                      playlistElementAction={this.handlePlayVideo.bind(this)}
                                                      deleteAction={this.handleDeletePlaylistElement.bind(this)}
                    />)
                })}
            </React.Fragment>
        )
    }

    update(model) {
        if(model.currentPlaylist) {
            this.setState({playlistName: model.currentPlaylist.title,
                playlistElements: model.videoList});
        }

    }
}