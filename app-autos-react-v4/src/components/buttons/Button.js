import React from 'react';
import style from './Button.module.css';

function Button({ children, changeTheTitle }) {
  return (
    <button className={style.button} onClick={changeTheTitle}>
      {children}
    </button>
  );
}

export default Button;
