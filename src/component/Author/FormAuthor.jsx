import React from 'react';
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import AuthorService from '../../service/AuthorService';



const initialState = {
    "name": "",
    "lastname": "",
    "fullName": "",
    "createAt": ""
}
function FormAuthor() {
    const [author, setAuthor] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setAuthor({ ...author, [name]: value });
        console.log(name, value)
    };


    const saveAuthor = () => {

        let today = new Date();
        var data = {
            name: author.name,
            lastname: author.lastname,
            fullName: author.fullName,
            createAt: today.toISOString()

        };
        console.log(data);

        AuthorService.create(data)
            .then(response => {
                console.log(response)

            })
            .catch(e => {
                console.log(e);
            });
    };


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
                        <Form.Label>
                            <Form.Label> fullName
                                <input className='form-control'
                                    placeholder='enter fullname author'
                                    name='fullName'
                                    type="text"
                                    onChange={handleInputChange}
                                    value={author.fullName}
                                ></input>
                            </Form.Label>
                        </Form.Label>
                        <br />
                        <Button
                            onClick={saveAuthor}
                        >enviar</Button>
                    </Form>
                </div>

            </div>
        </Container>
    );
}

export default FormAuthor;