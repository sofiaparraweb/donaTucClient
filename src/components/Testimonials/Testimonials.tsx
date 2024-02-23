import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2>Testimonios y opiniones de usuarios</h2>
      <ul className="testimonials-list">
        <li>
          <blockquote>
            <p>
              Donar a través de Donar Online ha sido una experiencia increíble. He
              podido apoyar causas que me importan y ver el impacto que estoy
              haciendo en la vida de otras personas.
            </p>
            <cite>- Jane Doe</cite>
          </blockquote>
          <img
            src="/images/testimonial1.jpg"
            alt="Foto de Jane Doe"
            className="testimonial-image"
          />
        </li>
        <li>
          <blockquote>
            <p>
              Me encanta la facilidad de uso de Donar Online. Puedo encontrar causas
              que me importan y hacer una donación en cuestión de minutos. Además,
              me siento seguro sabiendo que mis donaciones están llegando a donde
              necesitan.
            </p>
            <cite>- John Doe</cite>
          </blockquote>
          <img
            src="/images/testimonial2.jpg"
            alt="Foto de John Doe"
            className="testimonial-image"
          />
        </li>
      </ul>
    </section>
  );
};

export default TestimonialsSection;