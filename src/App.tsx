// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// import CoachingPage from './pages/CoachingPage';
// import ContactPage from './pages/ContactPage';
import DiscoveryCallPage from './pages/DiscoveryCallPage';
// import RecipesPage from './pages/RecipesPage';
// import TestimonialsPage from './pages/TestimonialsPage';
// import WorkshopsPage from './pages/WorkshopsPage';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          {/* <Route path='/coaching' element={<CoachingPage />} />
          <Route path='/testimonials' element={<TestimonialsPage />} />
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/workshops' element={<WorkshopsPage />} />
          <Route path='/contact' element={<ContactPage />} /> */}
          <Route path='/discovery' element={<DiscoveryCallPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
