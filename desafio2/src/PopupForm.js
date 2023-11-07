import React, { useState } from 'react';
import './App.css';
const PopupForm = ({ onClose }) => {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes hacer algo con el nombre ingresado aquí
    console.log('Nombre ingresado:', nombre);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Ingrese su nombre</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
