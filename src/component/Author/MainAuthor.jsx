import React from 'react';
import FormAuthor from './FormAuthor';
import AuthorService from '../../service/AuthorService';
import { useEffect, useState } from 'react'
import TableComponent from './TableComponent';

function MainAuthor(props) {

    const list = [];
    const [count, setCount] = useState(0)
    const [author, setauthor] = useState(list);
    const [data, setData] = useState(list);

    const retrieveAuthors = async () => {
        try {
            let res = await AuthorService.getAll()
            let datas = res.data.content;
            console.log(datas);
            setauthor(datas)

        } catch (error) {
            console.error(error)
        }

    }

    useEffect(
        () => {
            retrieveAuthors();

        }, []);


    return (
        <div className="main__author">
            <FormAuthor />
            <TableComponent data={author} />
        </div>
    )
}

export default MainAuthor;