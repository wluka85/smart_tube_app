import React, {Component} from "react";
import '../../css/playlist.css';

export default class PlaylistElementComponent extends Component {

    render() {
        return (
            <div className="playlist-element-component">
                <img src={this.props.imageURL} alt={this.props.title} className="video-picture" onClick={() => {this.props.playlistElementAction(this.props.video)}}/>
                <div className="video-name"> {this.props.name}</div>
                <i className="fas fa-trash-alt" onClick={() => {this.props.deleteAction(this.props.playlistElementId)}}/>
            </div>
        )
    }
}

