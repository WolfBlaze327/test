import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function HomeModal(props) {
  const { show, handleClose, modalTitle, modalContent } = props;

  return (
    <Modal show={show} onHide={handleClose} size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header className="bg-black rounded-0" closeButton>
        <Modal.Title className='text-primary bg-black' >{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-black">
        <p className="text-light">{modalContent}</p>
      </Modal.Body>
      <Modal.Footer className="bg-black rounded-0">
        <Button className="rounded-0" variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HomeModal;
