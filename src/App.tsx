// src/App.tsx
import "./App.css";
import FillerPage from "./pages/FillerPage";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
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
      <FillerPage />
    </div>
  );
}

export default App;
