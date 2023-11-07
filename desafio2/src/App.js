import React, { useState } from 'react';
import NameForm from './PopupForm';

const App = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombreIngresado, setNombreIngresado] = useState('');

  const mostrarFormularioHandler = () => {
    setMostrarFormulario(true);
  };

  const cerrarFormularioHandler = () => {
    setMostrarFormulario(false);
  };

  const manejarFormulario = (nombre) => {
    setNombreIngresado(nombre);
  };

  return (
    <div className="App">
      <h1>Bienvenido, {nombreIngresado}</h1>
      <button onClick={mostrarFormularioHandler}>Mostrar Formulario</button>
      {mostrarFormulario && (
        <NameForm onSubmit={manejarFormulario} onClose={cerrarFormularioHandler} />
      )}
    </div>
  );
};

export default App;
