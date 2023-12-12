import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import LogIn from './views/LogIn/LogIn';
import Profile from './views/Profile/Profile';
import Donations from './views/Donations/Donations';
import About from './components/About/About';

import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
