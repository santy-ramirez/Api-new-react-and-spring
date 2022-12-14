import React from 'react';
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';


function FormAuthor({ handleInputChange, author, saveAuthor, updateAuthor }) {

    return (
        <Container>
            <div  >
                <div>
                    <h2>Create a Authors</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name
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
                            <Form.Label> Lastname
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
                        <Button style={{ margin: 4 }}
                            onClick={saveAuthor}
                        >Guardar</Button>
                        <Button
                            onClick={updateAuthor}
                        >update</Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
}

export default FormAuthor;