import React from 'react';
import { useState } from 'react';
import AuthorService from '../service/AuthorService';

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
        var data = {
            name: author.name,
            lastname: author.lastname,
            fullName: author.fullName,
            createAt: author.createAt

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
        <div>
            hola form

            <div>
                <input
                    placeholder='enter name author'
                    name='name'
                    type="text"
                    onChange={handleInputChange}
                    value={author.name}
                ></input>
                <br />
                <input
                    placeholder='enter lastname author'
                    name='lastname'
                    type="text"
                    onChange={handleInputChange}
                    value={author.lastname}
                ></input>
                <br />
                <input
                    placeholder='enter fullname author'
                    name='fullName'
                    type="text"
                    onChange={handleInputChange}
                    value={author.fullName}
                ></input>
                <br />
                <button
                    onClick={saveAuthor}
                >enviar</button>
            </div>

        </div>
    );
}

export default FormAuthor;