import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import juices from '../../juicesData.json';

function JuiceDetailPage() {
  const drinkLinkName = useLocation().pathname.split('/').pop();
  const drink = juices.find((juice) => juice.link_name === drinkLinkName);

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '80vh',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width:750px)': {
          flexDirection: 'column',
          textAlign: 'center',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '250px',
        }}
        component='img'
        alt={drink?.alt_text}
        src={drink?.image}
      />
      <Box
        sx={{
          maxWidth: '500px',
          display: 'flex',
          gap: '1rem',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: '3rem',
            '@media (max-width:750px)': {
              textAlign: 'center',
            },
          }}
          variant='h1'
        >
          {drink?.name}
        </Typography>
        <Typography variant='body1'>{drink?.description}</Typography>
      </Box>
    </Box>
  );
}

export default JuiceDetailPage;
