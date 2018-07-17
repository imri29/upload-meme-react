import React, { Component } from 'react';
import axios from 'axios/index';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

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
    memeStatus: null,
    serverReply: ''
  };

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
          this.status = response.status;
          this.serverReply = response.data;
          this.setState({
            isLoading: false,
            show: true,
            memeStatus: this.status,
            serverReply: this.serverReply
          });
          console.log(response);
        })
        .catch(error => {
          this.setState({ memeStatus: error });
          console.error(error);
        });
    });
  };

  getInitialState = () => {
    this.setState({
      name: '',
      email: '',
      description: '',
      file: null,
      isLoading: false,
      show: false,
      memeStatus: null
    });
  };

  handleClose = () => {
    this.setState({ show: false });
    this.getInitialState();
  };

  render() {
    let message;
    if (
      (this.state.memeStatus !== 200 && this.state.memeStatus !== null) ||
      this.state.serverReply === 'error, urlPath must be a string'
    ) {
      message = <p className="failure">שגיאה! אנא נסו שנית</p>;
    } else {
      message = <p className="success">המם הועלה בהצלחה!</p>;
    }

    return (
      <FormGroup>
        <form onSubmit={e => e.preventDefault()}>
          <FormControl
            type="text"
            name="name"
            placeholder="שם"
            onChange={this.onChange}
            value={this.state.name}
          />
          <FormControl
            type="email"
            name="email"
            placeholder="אימייל"
            onChange={this.onChange}
            value={this.state.email}
          />
          <FormControl
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
            message={message}
          />
        </form>
      </FormGroup>
    );
  }
}
