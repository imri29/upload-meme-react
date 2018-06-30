import React, { Component } from 'react';
import './file-input.css';

export default class FileInput extends Component {
  onFileSelect = e => {
    const blobAsString = this.blobToString(e.target.files[0]);
    blobAsString.then(file => this.props.onFileUpload(file));
    console.log(blobAsString);
  };

  blobToString = blob => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = event => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  render() {
    return (
      <div>
        <input type="file" name="upload-file" onChange={this.onFileSelect} />
      </div>
    );
  }
}
