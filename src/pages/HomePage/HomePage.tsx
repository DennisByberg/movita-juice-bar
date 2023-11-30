import { Box, Typography } from '@mui/material';
import juicePNG from '/images/juicePNG.png';

function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '80vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '400px',
          display: 'flex',
          gap: '1rem',
          flexDirection: 'column',
          alignItems: 'center',
          '@media (max-height: 1000px)': {
            maxWidth: '250px',
          },
        }}
      >
        <Typography
          sx={{
            padding: '1rem 2rem',
            color: 'movitaGreen.light',
          }}
          variant='h1'
        >
          mo
          <span style={{ color: '#deb3ff' }}>vita</span>
        </Typography>
        <Typography sx={{ color: 'linkColor.notActive' }} variant='h2'>
          - Juice Bar -
        </Typography>
        <Box
          sx={{
            width: '100%',
          }}
          component='img'
          src={juicePNG}
        />
      </Box>
    </Box>
  );
}
export default HomePage;
