import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './VideoPage.scss';

function VideoPage() {
  return (
    <div className='video-page'>
      <video
        title='Video about the juice bar, including a girl talking about the juice bar while standing in the bar'
        controls
      >
        <source type='video/mp4' src='/videos/juicebar-video.mp4' />
        <track
          kind='captions'
          src='/videos/captions.vtt'
          srcLang='en'
          label='English'
        />
      </video>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <YouTubeIcon
          sx={{
            fontSize: 25,
            color: 'red',
            borderRadius: 100,
          }}
        />
        <Link
          className='youtubeLink'
          to='https://www.youtube.com/@movitajuicebar1657'
          target='_blank'
        >
          Visit our youtube
        </Link>
      </Box>
    </div>
  );
}
export default VideoPage;
