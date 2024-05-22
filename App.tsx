import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
