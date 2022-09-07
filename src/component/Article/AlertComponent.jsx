import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertComponent({ show, notShow }) {


    return (
        <div>
            <Alert show={show} variant="success">
                <Alert.Heading>Envio de formulario</Alert.Heading>
                <p>
                    Los datos han sido enviados con exito y fueron guardados correctamente en la base de datos.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={notShow} variant="outline-success">
                        Close me y'all!
                    </Button>
                </div>
            </Alert>
        </div>
    );
}

export default AlertComponent;