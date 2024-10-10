import React from 'react';
import './styles/Keypad.css';

function Keypad({ handleClick }) {
  const buttons = [
    'C', '/', '*', '-', 
    '7', '8', '9', '+', 
    '4', '5', '6', '=', 
    '1', '2', '3', '.', 
    '0',               
  ];

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        //para que los botones tengan estilos definidos agrego la clase button a cada boton 
        //para que los estilos se apliquen correctamente y no salgan los estilos predeterminados
        <button key={index} className="button" onClick={() => handleClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
