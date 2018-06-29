import React, { Component } from 'react';
import axios from 'axios';
import './file-input.css';

export default class FileInput extends Component {
  state = {
    selectedFile: null
  };

  selectedFile = e => {
    this.setState({ selectedFile: e.target.files[0] });
  };


  fileUploadHandler = () => {
    const API_URL = 'http://www.memeking.co.il/api/upload-suggested-new-meme';
    const formData = new FormData();
    formData.append(
      'image',
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(formData);
    axios
      .post(`https://cors-anywhere.herokuapp.com/${API_URL}`, {
        headers: { 'Access-Control-Allow-Origin': '*' },
        formData
      })
      .then(response => console.log(response));
  };

  render() {
    return (
      <div>
        <input type="file" name="upload-file" onChange={this.selectedFile} />
        <button onClick={this.fileUploadHandler}>
          <span>שליחה</span>
        </button>
      </div>
    );
  }
}

//TODO: move button and POST logic to Form. pass <FileInput /> in Form as another input.
