import React, {Component} from 'react';
import logo from '../../logo.png';
import './app.css';

//components
import Header from '../Header/Header';
import Form from '../Form/Form';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <img className="logo" src={logo} alt="logo" />
        <Header />
        <Form />
      </div>
    );
  }
}
export default App;
