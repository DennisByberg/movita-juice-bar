import { Container } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Navbar from './components/Navar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import JuiceDetailPage from './pages/JuiceDetailPage/JuiceDetailPage';
import JuicesPage from './pages/JuicesPage/JuicesPage';
import VideoPage from './pages/VideoPage/VideoPage';

function App() {
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
    </Container>
  );
}

export default App;
