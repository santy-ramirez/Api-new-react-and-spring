import React from 'react';
import FormAuthor from './FormAuthor';
import AuthorService from '../../service/AuthorService';
import { useEffect, useState } from 'react'
import TableComponent from './TableComponent';
import ModalComponent from './ModalComponent';


const initialState = {
    "name": "",
    "lastname": "",
    "fullName": "",
    "createAt": ""
}
function MainAuthor(props) {

    const list = [];
    const [show, setShow] = useState(false);
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
        const elementSelected = e.target.value;
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

    const heandleUpdate = (e) => {
        console.log(e.target.value);
        const id = e.target.value;

        data.map((a) => {
            if (a.id == id) {
                console.log(a);
                setAuthor(
                    a
                )
            }

        })

    }



    const updateAuthor = () => {

        let today = new Date();
        var data = {
            name: author.name,
            lastname: author.lastname,
            fullName: author.name + " " + author.lastname,
            createAt: today.toISOString()

        };

        AuthorService.updateAuthor(author.id, data)
            .then(response => {
                console.log(response)
                setAuthor(
                    {
                        name: "",
                        lastname: "",
                        fullName: "",
                        createAt: ""
                    }
                )


            })
            .catch(e => {
                console.log(e);
            });


    }

    const handleClose = () => setShow(false);


    return (
        <div className="main__author">
            <ModalComponent
                show={show}
                handleClose={handleClose}
            />
            <FormAuthor
                handleInputChange={handleInputChange}
                author={author}
                saveAuthor={saveAuthor}
                updateAuthor={updateAuthor}

            />
            <TableComponent
                heandleUpdate={heandleUpdate}
                handleDelete={handleDelete} data={data} />
        </div>
    )
}

export default MainAuthor;