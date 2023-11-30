import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import juicesDatabase from '../../juicesData.json';
import DefaultButton from '../DefaultButton/DefaultButton';

function JuiceList() {
  const juices = juicesDatabase;

  const listItemSX = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: 2,
    borderBottom: `1px solid ${grey[800]}`,
    '&:last-child': {
      borderBottom: 'none',
    },
    '@media (min-width:800px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'left',
    },
  };

  const listItemTextSX = {
    '@media (max-width:800px)': {
      mb: '20px',
    },
  };

  return (
    <List sx={{ mb: 4 }}>
      {juices.map((juice) => (
        <ListItem key={juice.id} sx={listItemSX}>
          <ListItemAvatar>
            <Box
              component='img'
              sx={{ width: '2.5rem' }}
              src={juice.image}
              alt={juice.alt_text}
            />
          </ListItemAvatar>
          <ListItemText
            sx={listItemTextSX}
            primary={juice.name}
            secondary={juice.small_description}
          />
          <DefaultButton
            navigationURL={`${juice.link_name}`}
            buttonText={`More About ${juice.name}`}
            variant='outlined'
          />
        </ListItem>
      ))}
    </List>
  );
}
export default JuiceList;
