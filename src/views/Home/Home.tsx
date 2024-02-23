import React, { useEffect } from 'react';
// import { GiPayMoney } from 'react-icons/gi';
import styles from './Home.module.css';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import BePart from '../../components/BePart/BePart';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import TestimonialsSection from '../../components/Testimonials/Testimonials';

const Home: React.FC = () => {
  useEffect(() => {
    // Tu lógica aquí
  }, []);

  return (
    <div className={styles.landingPageContainer}>
      {/* <h1 className={styles.landingPageTitle}>
        ¡Bienvenido a nuestra plataforma!
      </h1>
      <h2 className={styles.landingPageSubtitle}>
        Haz donaciones a tus causas favoritas de manera rápida y segura.
      </h2>
      <a href="/logIn" className={styles.landingPageButton}>
        <GiPayMoney />
        Regístrate
      </a> */}
      <NavBar />
     <Header />
     <BePart />
     <About />
     <TestimonialsSection />
     <Contact />
     <Footer />
    </div>
  );
};

export default Home;
