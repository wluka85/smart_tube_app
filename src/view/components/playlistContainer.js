import React, {Component} from "react";
import CatalogComponent from "./catalogComponent";

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
                    return (<CatalogComponent key={i}
                                              id={element.id}
                                              name={element.title}
                                              publishedAt={element.publishedAt}
                                              playlistElementAction={this.handlePlayVideo.bind(this)}
                                              deleteAction={this.handleDeletePlaylistElement().bind(this)}
                    />)
                })}
            </React.Fragment>
        )
    }

    update(model) {
        this.setState({playlistName: model.currentPlaylist.name,
                        playlistElements: model.currentPlaylist});
    }
}