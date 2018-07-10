import React, { Component } from 'react';
import axios from 'axios/index';
import './form.css';

//Components
import Button from '../Button/Button';
import FileInput from '../FileInput/FileInput';
import Spinner from '../Spinner/Spinner';
import BootstrapModal from '../Modal/BootstrapModal';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    description: '',
    file: null,
    isLoading: false,
    show: false,
    // memeSent: true
  };

  //consider adding error in state for the difference modal texts.

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFileUpload = file => {
    this.setState({ file });
  };

  submitFormHandler = () => {
    const API_URL = 'http://www.memeking.co.il/api/upload-suggested-new-meme';
    const formData = {
      name: this.state.name,
      email: this.state.email,
      description: this.state.description,
      urlPath: this.state.file
    };
    console.log(formData);
    this.setState({ isLoading: true }, () => {
      axios
        .post(`https://cors-anywhere.herokuapp.com/${API_URL}`, formData)
        .then(response => {
          this.setState({ isLoading: false, show: true });
          console.log(response);
        })
        .catch(error => console.error(error));
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="שם"
          onChange={this.onChange}
          value={this.state.name}
        />
        <input
          type="email"
          name="email"
          placeholder="אימייל"
          onChange={this.onChange}
          value={this.state.email}
        />
        <input
          type="text"
          name="description"
          placeholder="תיאור המם"
          onChange={this.onChange}
          value={this.state.description}
        />
        <FileInput onFileUpload={this.onFileUpload} />
        <Button
          theme="white"
          bsStyle="primary"
          bsSize="lg"
          block
          onClick={this.submitFormHandler}
        >
          <span>שליחה</span>
          {this.state.isLoading ? <Spinner /> : null}
        </Button>
        <BootstrapModal
          show={this.state.show}
          onHide={this.handleClose}
          // message={this.state.memeSent}
        />
      </form>
    );
  }
}

// if this.state.memeSent = true, render the .success p. else render the .failure
//maybe conditionally render P's with class name?