import React, { Component } from 'react';
import BootstrapModal from 'react-bootstrap/lib/Modal';

class Modal extends Component {
  state = {
    show: false
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <BootstrapModal show={this.state.show} onHide={this.handleClose}>
          <BootstrapModal.Header>
            <Modal.Title>
              <i className="fas fa-times" onClick={this.handleClose} />
            </Modal.Title>
          </BootstrapModal.Header>
          <BootstrapModal.Body>
            <h4>{this.props.text}</h4>
          </BootstrapModal.Body>
        </BootstrapModal>
      </div>
    );
  }
}

export default Modal;
