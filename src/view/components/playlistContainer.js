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
            playlistId: '',
            playlistElements: []
        }
        this.handleRefreshPlaylist();
    }

    render() {
        return (
            <React.Fragment>
                <div className="playlist-option">
                    <div className="playlist-name">{this.state.playlistName}</div>
                    <i className="fas fa-play" id="play-button" onClick={this.handlePlayPlaylist.bind(this)}/>
                </div>
            <div id="playlist-scroll">
                <div id="playlist-container">
                    {this.getPlaylistElements()}
                </div>
            </div>
            </React.Fragment>
        )
    }

    handlePlayPlaylist() {
        this.controller.playPlaylist();
    }

    handleRefreshPlaylist() {
        this.controller.getCurrentPlaylist();
    }

    handleDeletePlaylistElement(etag) {
        this.controller.deletePlaylistElement(etag, this.state.playlistId);
    }

    handlePlayVideo(video) {
        this.controller.playVideoFromPlaylist(video);
    }

    getPlaylistElements() {
        return (
            <React.Fragment>
                {this.state.playlistElements.map((element, i) => {
                    return (<PlaylistElementComponent key={i}
                                                      video={element}
                                                      imageURL={element.imageURL}
                                                      id={element.videoId}
                                                      playlistElementId={element.playlistElementId}
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
                playlistElements: model.videoList, playlistId: model.currentPlaylist.id});
        }

    }
}