import React, { Component } from 'react';
import BootstrapButton from 'react-bootstrap/lib/Button';
import classnames from 'classnames';
import './button.css';

const Button = props => {



  return <BootstrapButton className={props.theme}>{props.children}</BootstrapButton>;
};

export default Button;