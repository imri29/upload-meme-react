import React from 'react';
import BootstrapButton from 'react-bootstrap/lib/Button';
import './button.css';

const Button = ({theme, onClick, children}) => {

  return (
    <BootstrapButton className={theme} onClick={onClick}>
      {children}
    </BootstrapButton>
  );
};

export default Button;
