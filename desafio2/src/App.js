import './App.css';
import { useState } from 'react';
import flechad from './img/flechaderecha.svg'
import flechai from './img/flechai.svg'
import moment from 'moment';
//logica
export default function () {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [fecha, setFecha] = useState(moment());
  const [horaActual, setHoraActual] = useState(moment());
  let urlImg = 'https://static.vecteezy.com/system/resources/previews/009/662/828/original/sun-sun-ray-icon-transparent-free-png.png';

  function menos() {
    setIndex(index - 1);
  }
  function mas() {
    setIndex(index + 1);
  }
  function restar() {
    setIndex1(index1 - index);
    const newFecha = moment(fecha).subtract(index, 'day');
    setFecha(newFecha);
  }
  function sumar() {
    setIndex1(index1 + index);
    const newFecha = moment(fecha).add(index, 'day');
    setFecha(newFecha);
  }
  if (horaActual.hours() < 19) {
    urlImg = 'https://static.vecteezy.com/system/resources/previews/009/662/828/original/sun-sun-ray-icon-transparent-free-png.png';
  } 
  else {
    urlImg = 'https://cdn-icons-png.flaticon.com/512/3026/3026346.png';
  }

  

//estructura
  return (
    <div className="App">
      <header className="App-header">
      <h1>Desafio 2</h1>
        <div className='steps'>
          <button onClick={menos}><img src={flechai}/></button>
          <h1 className='index'>{index}</h1>
          <button onClick={mas}><img src={flechad}/></button>
        </div>
        <div className='change'>
          <button onClick={restar}><img src={flechai}/></button>
          <h2>{index1}</h2>
          <button onClick={sumar}><img src={flechad}/></button>
        </div> 
        <p>{fecha.format('DD-MM-YYYY')}</p>
        <p>{horaActual.format('hh:mm:ss')}</p>
        <img src={urlImg} className="App-logo" />
      </header>
    </div>
  );
  }


