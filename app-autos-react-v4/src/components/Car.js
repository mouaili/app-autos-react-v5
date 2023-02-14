import React from 'react';
import Wrapper from './Wrapper';

const Car = ({ color, children }) => {
  let infoColor;
  if (color) {
    infoColor = color;
  } else {
    infoColor = ' No information about the color';
  }

  return (
    children && (
      <Wrapper>
        <p>Brand : {children}</p>
        <p>Color : {infoColor}</p>
      </Wrapper>
    )
  );
};

export default Car;
