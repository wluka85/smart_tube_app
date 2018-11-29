import React, {Component} from "react";
import {fetchUserCatalogs} from "../actions/catalogAction";
import connect from "react-redux/es/connect/connect";
import '../css/playlist.css';
import {fetchDeletePlaylistItem} from "../actions/playlistAction";
import {openVideo} from "../actions/videoActions";

class PlaylistComponent extends Component {


    render() {
        const {currentPlaylist, videoList, handleDeletePlaylistItem, handlePlayVideo, handlePlayPlaylist} = this.props;



        const playlistItemsComponent = (video, i) =>  {
            const {title, imageURL, playlistElementId} = video;
            return (
                <div className="playlist-element-component" key={i}>
                    <img src={imageURL} alt={title} className="video-picture"/>
                    <div className="video-name"> {title}</div>
                    <div className="video-buttons">
                        <i className="fas fa-trash-alt" onClick={() => {handleDeletePlaylistItem(playlistElementId, currentPlaylist)}}/>
                        <i className="fas fa-play" id="play-button" onClick={() => {handlePlayVideo(video)}}/>
                    </div>
                </div>
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
            <React.Fragment>
                <div className="playlist-option">
                    <div className="playlist-name">{currentPlaylist.title}</div>
                    <i className="fas fa-play" id="play-button" onClick={handlePlayPlaylist}/>
                </div>
            <div id="playlist-scroll">
                <div id="playlist-container">
                    {playlistItemList}
                </div>
            </div>
            </React.Fragment>
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
        handlePlayPlaylist: () => dispatch(fetchUserCatalogs()),

    };
}

export default PlaylistComponent = connect(mapStateToProps, mapDispatchToProps)(PlaylistComponent);