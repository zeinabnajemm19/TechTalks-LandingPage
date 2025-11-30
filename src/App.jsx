import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { AboutPage } from './pages/AboutPage';
import { ChampionsPage } from './pages/ChampionsPage';
import { DevBountyPage } from './pages/DevBountyPage';
import { WhatsApp } from './components/WhatsAppIcon';
function App() {
  return (
    <>
      <WhatsApp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CoursesPage" element={<CoursesPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ChampionsPage" element={<ChampionsPage />} />
        <Route path="/DevBountyPage" element={<DevBountyPage />} />
      </Routes>


    </>
  )
    ;
}
export default App;