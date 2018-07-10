import React, {Component} from 'react';
import logo from '../../logo.png';
import './app.css';

//components
import Header from '../Header/Header';
import Form from '../Form/Form';
import Modal from "../Modal/BootstrapModal";

class App extends Component {
  render() {
    return (
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt="logo" />
        <Header />
        <Form />
        <Modal />
      </div>
    );
  }
}
export default App;
