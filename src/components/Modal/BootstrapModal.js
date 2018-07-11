import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import logo from '../../logo.png';
import './bootstrap-modal.css';

const BootstrapModal = ({ show, onHide, message }) => {
  return (
    <div className="modal-container">
      <Modal bsClass="modal" show={show} onHide={onHide}>
        <i className="fas fa-times" onClick={onHide} />
        <img src={logo} alt="logo" />
        <Modal.Body />
        {message}
      </Modal>
    </div>
  );
};

export default BootstrapModal;

/*
message={
  message ? (
     <p className="success">המם הועלה בהצלחה!</p>
  ) : (
     <p className="failure">שגיאה! אנא נסו שנית!</p>
  )
}*/
