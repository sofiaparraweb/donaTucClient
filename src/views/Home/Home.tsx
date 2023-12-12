// src/pages/Home/index.tsx
import React, { useEffect } from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import BePart from '../../components/BePart/BePart';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

const Home: React.FC = () => {
useEffect(() => {

}, []);

  return (
    <div className="homeContainer">
    <NavBar />
    <Header />
    <BePart />
    <About />
    <Contact />
    <Footer />
  </div>
  );
};

export default Home;
