// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      {/* <Heading /> */}
      {/* <HomePage /> */}
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
      {/* <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          {/* <Route path='/coaching' element={<CoachingPage />} />
          <Route path='/testimonials' element={<TestimonialsPage />} />
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/workshops' element={<WorkshopsPage />} />
          <Route path='/contact' element={<ContactPage />} /> 
          <Route path='/discovery' element={<DiscoveryCallPage />} />
        </Routes>
      </Router> */}
      {/* <FillerPage /> */}
    </div>
  );
}

export default App;
