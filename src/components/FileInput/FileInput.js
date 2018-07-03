import React from 'react';
// import Dropzone from 'react-dropzone';
import './file-input.css';

const FileInput = props => {

  const onFileSelect = e => {
    const blobAsString = blobToString(e.target.files[0]);
    blobAsString.then(file => props.onFileUpload(file));
    console.log(blobAsString);
  };

  const blobToString = blob => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = event => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  return (
    <div className="input-container">
      <input id="file-input" type="file" name="upload-file" onChange={onFileSelect} />
    </div>
  );
};

export default FileInput;
