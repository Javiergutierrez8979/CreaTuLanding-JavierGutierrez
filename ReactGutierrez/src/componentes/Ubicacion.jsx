import React from 'react';
import '../styles/Ubicacion.css'; // Asegúrate de tener este archivo CSS

const Location = () => {
  return (
    <div className="location-page">
      <h1>Visítanos en El Palomar</h1>
      <p className="location-description">
        Nos encontramos en una ubicación estratégica en El Palomar, Buenos Aires. Ofrecemos un ambiente cómodo y seguro para realizar tus compras. ¡Te esperamos!
      </p>
      <div className="location-details">
        <h3>Dirección:</h3>
        <p>Calle Falsa 123, El Palomar, Buenos Aires</p>
        <h3>Horario de Atención:</h3>
        <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
        <p>Sábados: 10:00 AM - 2:00 PM</p>
        <p>Domingos: Cerrado</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9080455083516!2d-58.5903740847737!3d-34.60668018045924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb844fae12109%3A0x2f9b5679d4f1e3d4!2sEl%20Palomar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1692100000000!5m2!1ses!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación en El Palomar"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
