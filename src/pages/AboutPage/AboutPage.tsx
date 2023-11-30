import { Box, List, ListItem, SxProps, Typography } from '@mui/material';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

function AboutPage() {
  const listItemSX: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    '@media (max-width: 500px)': {
      alignItems: 'center',
      textAlign: 'center',
    },
  };

  const listSX: SxProps = {
    display: 'flex',
    gap: '3rem',
    flexDirection: 'column',
  };

  const typographyh2SX: SxProps = {
    color: 'movitaPurple.light',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    '@media (max-width: 500px)': {
      fontSize: '2rem',
      flexDirection: 'column-reverse',
      gap: '0',
    },
  };

  const boxSX: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    mb: 6,
    '@media (max-width: 500px)': {
      alignItems: 'center',
    },
  };

  return (
    <Box sx={boxSX}>
      <List sx={listSX}>
        <ListItem sx={listItemSX}>
          <Typography sx={typographyh2SX} variant='h2'>
            Welcome
            <WavingHandIcon sx={{ fontSize: '2.5rem', color: 'white' }} />
          </Typography>
          <Typography variant='body1'>
            Welcome to The Juice – where the vibrant energy of Gothenburg meets
            the refreshing zest of nature! Nestled in the heart of this
            enchanting city, The Juice is not just a juice bar; its a
            celebration of all things juicy and joyous.
          </Typography>
        </ListItem>

        <ListItem sx={listItemSX}>
          <Typography sx={typographyh2SX} variant='h2'>
            Our team
            <Diversity1Icon sx={{ fontSize: '2.5rem', color: 'white' }} />
          </Typography>
          <Typography variant='body1'>
            Our team of juice artisans, also known as the Sip Squad, handpick
            each fruit with love and blend them into symphonies of flavor that
            will make your taste buds do the salsa.
          </Typography>
        </ListItem>

        <ListItem sx={listItemSX}>
          <Typography sx={typographyh2SX} variant='h2'>
            We are for everyone
            <FamilyRestroomIcon sx={{ fontSize: '2.5rem', color: 'white' }} />
          </Typography>
          <Typography variant='body1'>
            Whether you re a seasoned juice enthusiast or a newbie to the world
            of liquid refreshment, our menu has something for everyone.
          </Typography>
        </ListItem>

        <ListItem sx={listItemSX}>
          <Typography sx={typographyh2SX} variant='h2'>
            Join us
            <VolunteerActivismIcon
              sx={{ fontSize: '2.5rem', color: 'white' }}
            />
          </Typography>
          <Typography variant='body1'>
            Join us at The Juice, where every sip is a step into a world of
            fantasy and flavor. Let the juiciness flow through you as you embark
            on a sensory journey like no other. After all, life is too short to
            be anything but juicy!
          </Typography>
        </ListItem>
      </List>
      <DefaultButton
        marginTop='32px'
        marginLeft='16px'
        buttonText='Video About Us'
        variant='outlined'
        navigationURL='/about/video'
      />
    </Box>
  );
}
export default AboutPage;
