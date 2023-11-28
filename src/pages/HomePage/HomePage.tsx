import { Box, Typography } from '@mui/material';
import juicePNG from '../../assets/images/juicePNG.png';

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
        }}
      >
        <Typography variant='h1'>Movita</Typography>
        <Typography variant='h2'>- Juice Bar -</Typography>
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
