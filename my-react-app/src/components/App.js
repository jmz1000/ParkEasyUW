import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homepage.js';
import Information from './information.js';
import { Footer } from './footer.js';
import Header from './header.js';
import About from "./About";

export function App(props) {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/information" element={<Information />} />
                    <Route path="/about" element={<About />} />  
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
