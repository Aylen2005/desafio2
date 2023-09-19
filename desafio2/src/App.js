import './App.css';
import { useState } from 'react';
import flechad from './img/flechaderecha.svg'
import flechai from './img/flechai.svg'
//logica
export default function () {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const fecha = 
  function menos() {
    setIndex(index - 1);
  }
  function mas() {
    setIndex(index + 1);
  }
  function restar() {
    setIndex1(index1 - index);
  }
  function sumar() {
    setIndex1(index1 + index);
  }
//estructura
  return (
    <div className="App">
      <h1>Desafio 2</h1>
      <header className="App-header">
        <div className='steps'>
          <button onClick={menos}><img src={flechai}/></button>
          <h1>{index}</h1>
          <button onClick={mas}><img src={flechad}/></button>
        </div>
        <div className='change'>
          <button onClick={restar}><img src={flechai}/></button>
          <h2>{index1}</h2>
          <button onClick={sumar}><img src={flechad}/></button>
        </div> 
        <h3>{fecha}</h3>
        <img src='https://static.vecteezy.com/system/resources/previews/009/662/828/original/sun-sun-ray-icon-transparent-free-png.png' className="App-logo" alt="logo" />
      </header>
    </div>
  );
  }


