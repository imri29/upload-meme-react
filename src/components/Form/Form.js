import React, { Component } from 'react';
import './form.css';
// import FileInput from '../FileInput/FileInput';
import axios from 'axios/index';
import Button from '../Button/Button';
import Basic from '../FileInput/DropzoneAttempt';


export default class Form extends Component {
  state = {
    name: '',
    email: '',
    description: '',
    file: null
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
    axios
      .post(`https://cors-anywhere.herokuapp.com/${API_URL}`, formData)
      .then(response => console.log(response))
      .catch(error => console.error(error));
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
        {/*<FileInput onFileUpload={this.onFileUpload} />*/}
        <Basic onFileUpload={this.onFileUpload}/>
        <Button theme="deep-blue" bsStyle="primary" bsSize="lg" block onClick={this.submitFormHandler}>
          <span>שליחה</span>
        </Button>
      </form>
    );
  }
}

//FileInput - after the file has been uploaded (via onFileSelect on the input element itself), add it to the form's state via onFileUploaded.

