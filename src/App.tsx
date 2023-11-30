import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import JuicesPage from './pages/JuicesPage/JuicesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import VideoPage from './pages/VideoPage/VideoPage';
import JuiceDetailPage from './pages/JuiceDetailPage/JuiceDetailPage';
import { Container, Typography } from '@mui/material';
import Navbar from './components/Navar/Navbar';
import { grey } from '@mui/material/colors';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

function App() {
  const typographySX = {
    position: 'absolute',
    fontSize: '13px',
    bottom: '0.2rem',
    fontStyle: 'italic',
    left: '0.4rem',
    letterSpacing: '2px',
    color: grey[700],
    userSelect: 'none',
  };

  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Router>
        <Navbar />
        <Breadcrumbs />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/juices' element={<JuicesPage />} />
          <Route path='/juices/:id' element={<JuiceDetailPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/about/video' element={<VideoPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
      <Typography variant='body1' sx={typographySX}>
        v1.0.3
      </Typography>
    </Container>
  );
}

export default App;
