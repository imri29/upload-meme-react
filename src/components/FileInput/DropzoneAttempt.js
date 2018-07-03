import React from 'react';
import Dropzone from 'react-dropzone';

export default class Basic extends React.Component {
  state = { files: [] };

  onDrop = (files) => {
    this.setState({
      files
    });
  };

  //  onFileSelect = e => {
  //   const blobAsString = blobToString(e.target.files[0]);
  //   blobAsString.then(file => props.onFileUpload(file));
  //   console.log(blobAsString);
  // };
  //
  //  blobToString = blob => {
  //   return new Promise(resolve => {
  //     const reader = new FileReader();
  //     reader.onload = event => {
  //       resolve(event.target.result);
  //     };
  //     reader.readAsDataURL(blob);
  //   });
  // };



  render() {
    return (
      <section>
        <div>
          <Dropzone className="file-upload" onDrop={this.onDrop}>
            <p>
            העלאת תמונה
            </p>
            <i className="box-icon size-md theme-default fas fa-upload pull-left" />
          </Dropzone>
        </div>
      </section>
    );
  }
}
