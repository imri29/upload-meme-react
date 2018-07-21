import React from 'react';
import Dropzone from 'react-dropzone';
import './file-input.css';

const FileInput = ({ onFileUpload }) => {

  const onFileSelect = files => {
    const blobAsString = blobToString(files[0]);
    blobAsString.then(file => onFileUpload(file));
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
    <section>
      <Dropzone className="file-upload" onDrop={onFileSelect}>
        <p>העלאת תמונה</p>
        <i className="box-icon size-md theme-default fas fa-upload pull-left" />
      </Dropzone>
    </section>
  );
};

export default FileInput;
