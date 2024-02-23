import React from 'react';

const Header: React.FC = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h1>Conecta con causas que importan</h1>
        <p>Únete a nuestra comunidad de donantes y haz la diferencia.</p>
        <button className="welcome-button" >Regístrate ahora</button>
      </div>
      <div className="welcome-image">
        {/* <img src={Image} alt="Imagen de bienvenida" /> */}
      </div>
    </section>
  );
};

export default Header;