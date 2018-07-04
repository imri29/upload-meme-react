import React from 'react';
import Dropzone from 'react-dropzone';
import './file-input.css';

export default class FileInput extends React.Component {
  state = { files: [] };


  onFileSelect = files => {
    const blobAsString = this.blobToString(files[0]);
    console.log(blobAsString);
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
       <section>
         <div>
           <Dropzone className="file-upload" onDrop={this.onFileSelect}>
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
