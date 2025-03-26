// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/Pages/About";
import HomePage from "./components/Pages/Home";
import RecipesPage from "./components/Pages/Recipes";
import TestimonialsPage from "./components/Pages/Testimonials";
import ProgramsPage from "./components/Pages/Programs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/recipes' element={<RecipesPage />} />x
          <Route path='/testimonials' element={<TestimonialsPage />} />
          <Route path='/programs' element={<ProgramsPage   />} />
          {/* <Route path='/contact' element={<ContactPage />}/> */}
        </Routes>
      </Router>
      {/* <FillerPage /> */}
    </div>
  );
}

export default App;
