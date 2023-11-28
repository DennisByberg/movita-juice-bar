import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import movitaLogo from '../../assets/logos/movitaLogoBig.png';
import { getNavLinksColor, getNavLinksWeight } from './helpers';

export default function DrawerAppBar() {
  const links: ILink[] = [
    {
      label: 'HOME',
      href: '/',
      color: getNavLinksColor('/'),
      weight: getNavLinksWeight('/'),
    },
    {
      label: 'JUICES',
      href: '/juices',
      color: getNavLinksColor('/juices'),
      weight: getNavLinksWeight('/juices'),
    },
    {
      label: 'ABOUT US',
      href: '/about',
      color: getNavLinksColor('/about'),
      weight: getNavLinksWeight('/about'),
    },
    {
      label: 'CONTACT',
      href: '/contact',
      color: getNavLinksColor('/contact'),
      weight: getNavLinksWeight('/contact'),
    },
  ];

  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawer = (
    <Box onClick={(prev) => setMobileOpen(!prev)} sx={{ textAlign: 'center' }}>
      <Avatar role='img' src={movitaLogo} sx={{ margin: '1rem auto' }} />
      <Divider />
      <List>
        {links.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.href)}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          display: 'flex',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={(prev) => setMobileOpen(!prev)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar role='img' src={movitaLogo} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {links.map((item) => (
              <Button
                onClick={() => navigate(item.href)}
                key={item.label}
                sx={{ color: `${item.color}`, fontWeight: `${item.weight}` }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={(prev) => setMobileOpen(!prev)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 260,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
