import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {fetchDeletePlaylistItem} from "../actions/playlistAction";
import {openPlaylist, openVideo} from "../actions/videoActions";

class PlaylistComponent extends Component {


    render() {
        const {currentPlaylist, videoList, handleDeletePlaylistItem, handlePlayVideo, handlePlayPlaylist} = this.props;



        const playlistItemsComponent = (video, i) =>  {
            const {title, imageURL, playlistElementId} = video;
            return (
                <li className="card playlist-card" key={i}>
                    <img src={imageURL} alt={title} className="card-img-top img-fluid"/>
                    <div className="card-body playlist-item">
                        <div className="card-title"> {title}</div>
                        <div className="btn btn-outline-primary btn-sm btn-sets" onClick={() => {handleDeletePlaylistItem(playlistElementId, currentPlaylist)}}>
                            <i className="fas fa-trash-alt"/>
                        </div>
                        <div className="btn btn-outline-primary btn-sm btn-sets" data-toggle="modal" data-target="#detailed-video" onClick={() => {handlePlayVideo(video)}}>
                            <i className="fas fa-play" id="play-button"/>
                        </div>
                    </div>
                </li>
            )
        };

        const playlistItemList = (
                <React.Fragment>
                    {videoList.map((element, i) => {
                        return (playlistItemsComponent(element, i))})
                    }
                </React.Fragment>
            );

        return (
            <div className="col-xs-6 col-sm-4 col-md-3 sidebar right-sidebar">
                <div className="playlist-option">
                    <button className="btn btn-primary btn-sm catalog-name btn-sets" disabled>{currentPlaylist.title}</button>
                    <div className="btn btn-outline-primary btn-sm btn-sets" onClick={() => handlePlayPlaylist(currentPlaylist)}>
                        <i className="fas fa-play"/>
                    </div>
                </div>
                <div className="playlist-scroll">
                    <ul className="nav nav-sidebar">
                        {playlistItemList}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.authReducer.accessToken,
        videoList: state.playlistReducer.videoList,
        currentPlaylist: state.playlistReducer.currentPlaylist
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDeletePlaylistItem: (playlistElementId, playlist) => dispatch(fetchDeletePlaylistItem(playlistElementId, playlist)),
        handlePlayVideo: (video) => dispatch(openVideo(video)),
        handlePlayPlaylist: (playlist) => dispatch(openPlaylist(playlist))

    };
};

export default PlaylistComponent = connect(mapStateToProps, mapDispatchToProps)(PlaylistComponent);