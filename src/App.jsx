import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/contact' element={<ContactPage />} />

      </Routes>
      
    </>
  )
}

export default App
