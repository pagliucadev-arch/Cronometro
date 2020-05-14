import React, { useState, useEffect } from 'react';
import './global.css';

export default function App() {

  const [timer, setTimer] = useState(0);
  const [ativado, setDesativado] = useState(false);

  function Iniciar() {
    setDesativado(!ativado);
  }
 
  function Zerar() {
    setTimer(0);
    setDesativado(false);
  }

  useEffect(() => {
    let interval = null;
    if (ativado) {
      interval = setInterval(() => {
        setTimer(timer => timer + 0.013);
      }, 10);
    } else if (!ativado && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [ativado, timer]);

  return (
    <div className="container">
      <img src={require('./assets/cronometro.png')} className="img" />
      <a className="timer">{timer.toFixed(2)}</a>
      <div className="areaBtn">
        <button className="btn pulse" onClick={Iniciar}>Iniciar</button>
        <button className="btn pulse" onClick={Zerar}>Zerar</button>
      </div>

    </div>
  );
}