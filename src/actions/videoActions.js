
export const openVideo = (video) => ({

  type: 'VIDEO_ITEM_CLICKED',
  videoId: video.videoId,
  description: video.imageURL,
  title: video.title,
  playlistElementId: video.playlistElementId
});

export const closeVideo = () => {
  return {
    type: 'VIDEO_CLOSED'
  }
};