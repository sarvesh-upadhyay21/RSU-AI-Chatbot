import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import ChatBot from './pages/ChatBot';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/chatbot" element={<ChatBot />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
