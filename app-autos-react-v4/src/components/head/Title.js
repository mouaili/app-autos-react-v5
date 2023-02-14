import React from 'react';
import style from './Title.module.css';
console.log(style);

const Title = ({ color, children, onChangeStyle }) => {
  return (
    <h1 onMouseOver={onChangeStyle} style={{ color: color }}>
      {children}
    </h1>
  );
};

export default Title;
