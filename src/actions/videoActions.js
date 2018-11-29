
export const openVideo = (video) => ({

    type: 'VIDEO_ITEM_CLICKED',
    videoId: video.videoId,
    description: video.description,
    title: video.title,
});

export const closeVideo = () => {
    return {
        type: 'VIDEO_CLOSED'
  }
};

export const openPlaylist = (playlist) => {
    return {
        type: 'PLAYLIST_PLAYBACK_CHOSEN',
        playlistId: playlist.id,
        description: playlist.description,
        title: playlist.title
    }
};
