// src/App.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Pages/Home";
import AboutPage from "./components/Pages/About";
import RecipesPage from "./components/Pages/Recipes";
import TestimonialsPage from "./components/Pages/Testimonials";
import ContactPage from "./components/Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/testimonials' element={<TestimonialsPage />} />
          {/* <Route path='/contact' element={<ContactPage />}/> */}
        </Routes>
      </Router>
      {/* <FillerPage /> */}
    </div>
  );
}

export default App;
