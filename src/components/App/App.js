import React from 'react';
import logo from '../../logo.png';
import './app.css';

//components
import Header from '../Header/Header';
import Form from '../Form/Form';

const App = () => {
  return (
    <div className="wrapper">
      <img className="logo" src={logo} alt="logo" />
      <Header />
      <Form />
    </div>
  );
};
export default App;
