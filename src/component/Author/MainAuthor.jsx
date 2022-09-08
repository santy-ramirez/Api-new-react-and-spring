import React from 'react';
import FormAuthor from './FormAuthor';
import AuthorService from '../../service/AuthorService';
import { useEffect, useState } from 'react'
import TableComponent from './TableComponent';


const initialState = {
    "name": "",
    "lastname": "",
    "fullName": "",
    "createAt": ""
}
function MainAuthor(props) {

    const list = [];
    const [author, setAuthor] = useState(initialState);
    const [data, setData] = useState(list);
    const [delet, setDelet] = useState(false);

    const retrieveAuthors = async () => {
        try {
            let res = await AuthorService.getAll()
            let datas = res.data.content;

            console.log(datas)
            setData(datas)

        } catch (error) {
            console.error(error)
        }

    }

    useEffect(
        () => {
            retrieveAuthors();
            console.log("hola")

        }, [delet, author]);

    //-----------------DELETE AUTHOR ------------------//

    const handleDelete = (e) => {
        setDelet("deliting")
        const elementSelected = e.target.innerText;
        deleteAuth(elementSelected);
        setDelet("deleted")

    }

    async function deleteAuth(id) {
        try {
            const resp = await AuthorService.deleteAthor(id);
            console.log(resp.status)


            if (resp.status == 204) {
                setDelet(false)
                setDelet(true)
            }

        } catch (error) {
            console.error(error);

        }
    }
    //---------------SAVE AUTHOR--------------------//

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
            fullName: author.name + " " + author.lastname,
            createAt: today.toISOString()

        };
        console.log(data);

        AuthorService.create(data)
            .then(response => {
                console.log(response)
                setAuthor(
                    {
                        name: response.data.name,
                        lastname: response.data.lastname,
                        fullName: response.data.fullName,
                        createAt: response.data.createAt
                    }
                )


            })
            .catch(e => {
                console.log(e);
            });
    };


    return (
        <div className="main__author">
            <FormAuthor
                handleInputChange={handleInputChange}
                author={author}
                saveAuthor={saveAuthor}

            />
            <TableComponent handleDelete={handleDelete} data={data} />
        </div>
    )
}

export default MainAuthor;