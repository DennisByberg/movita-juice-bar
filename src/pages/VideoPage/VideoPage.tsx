import './VideoPage.scss';

function VideoPage() {
  return (
    <div className='video-page'>
      <video controls>
        <source type='video/mp4' src='/videos/juicebar-video.mp4' />
        <track
          kind='captions'
          src='/videos/captions.vtt'
          srcLang='en'
          label='English'
        />
      </video>
    </div>
  );
}
export default VideoPage;
