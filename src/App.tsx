import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import JuicesPage from './pages/JuicesPage/JuicesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import VideoPage from './pages/VideoPage/VideoPage';
import JuiceDetailPage from './pages/JuiceDetailPage/JuiceDetailPage';
import { Container } from '@mui/material';
import Navbar from './components/Navar/Navbar';

function App() {
  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Router>
        <Navbar />
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
