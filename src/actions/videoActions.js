export const openVideo = (video) => ({
  type: 'VIDEO_CLICKED',
  videoId: video.videoId,
  imageURL: video.imageURL,
  title: video.title
});