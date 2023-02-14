import React from 'react';

const Wrapper = ({ children }) => {
  const style = {
    color: '#f1f1f1',
    background: '#45a',
    width: '40%',
    margin: '5px auto',
    padding: '8px 8px',
    listStyleType: 'none',
  };
  return <div style={style}>{children}</div>;
};

export default Wrapper;
