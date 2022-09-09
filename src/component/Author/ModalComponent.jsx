import React from 'react';
//import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({ show, handleClose }) {

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mensaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>Estas seguro que quieres eliminar</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        no
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        si
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalComponent;