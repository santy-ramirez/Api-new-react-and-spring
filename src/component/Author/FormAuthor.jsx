import React from 'react';
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';


function FormAuthor({ handleInputChange, author, saveAuthor }) {

    return (
        <Container>
            <div>


                <div>
                    <h2>Create a Authors</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>name
                                <input className='form-control'
                                    placeholder='enter name author'
                                    name='name'
                                    type="text"
                                    onChange={handleInputChange}
                                    value={author.name}
                                ></input>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> lasname
                                <input className='form-control'
                                    placeholder='enter lastname author'
                                    name='lastname'
                                    type="text"
                                    onChange={handleInputChange}
                                    value={author.lastname}
                                ></input>
                            </Form.Label>
                        </Form.Group>

                        <br />
                        <Button
                            onClick={saveAuthor}
                        >Guardar</Button>
                    </Form>
                </div>

            </div>
        </Container>
    );
}

export default FormAuthor;