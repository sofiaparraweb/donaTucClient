import React from "react";
import { FaRegHandshake, FaRegCalendarAlt, FaRegSmileBeam } from "react-icons/fa";

const BePart: React.FC = () => {
  return (
    <section className="features-section">
      <h2>Funciones y características</h2>
      <ul className="features-list">
        <li>
          <FaRegHandshake className="feature-icon" />
          <h3>Facilidad de uso</h3>
          <p>
            Donar a través de nuestra plataforma es fácil y rápido. Puedes encontrar
            causas que te importan y hacer una donación en cuestión de minutos.
          </p>
        </li>
        <li>
          <FaRegCalendarAlt className="feature-icon" />
          <h3>Donaciones recurrentes</h3>
          <p>
            Puedes configurar donaciones recurrentes para apoyar a tus causas
            favoritas de manera continua.
          </p>
        </li>
        <li>
          <FaRegSmileBeam className="feature-icon" />
          <h3>Transparencia</h3>
          <p>
            Nos enfoque en la transparencia y la rendición de cuentas. Puedes ver
            exactamente dónde van tus donaciones y cómo se utilizan.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default BePart;
