import React from 'react';
import { useState, useEffect } from "react";
import ArticleService from '../../service/ArticleService';
import FormArticle from './FormArticle';
import ListArticle from './ListArticle';


const initialState = {
    "title": "",
    "description": " ",
    "url": "",
    "urlToImage": "",
    "content": "",
    "publishedAt": "",
    "published": true,
    "author": {
        "id": null
    },
    "source": {
        "id": null
    }



}

function MainArticle(props) {
    const list = [];
    const [data, setData] = useState(list);
    const [show, setShow] = useState(false);
    const [article, setArticle] = useState(initialState);

    const retrieveArticles = async () => {
        try {
            const res = await ArticleService.getAll()
            const resArray = res.data.content;
            console.log(resArray);
            //setArticle(resArray);
            setData(resArray)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(
        () => {
            retrieveArticles()
        }
        , [article])


    const handleInputChange = event => {
        const { name, value } = event.target;
        setArticle({ ...article, [name]: value });
        console.log(name, value)


    };
    const saveArticle = () => {
        let today = new Date();
        var data = {
            "title": article.title,
            "description": article.description,
            "url": article.url,
            "urlToImage": article.urlToImage,
            "content": article.content,
            "publishedAt": today.toISOString(),
            "published": true,
            "author": {
                id: 1
            },
            "source": {
                id: 1
            }
        };
        console.log(data);
        ArticleService.create(data)
            .then(response => {
                console.log(response.status)
                const stado = response.status;
                if (stado == 201) {
                    setShow(true)
                    setArticle(
                        {
                            title: response.data.title,
                            description: response.data.description,
                            url: response.data.url,
                            urlToImage: response.data.urlToImage

                        }
                    )
                }
            })
            .catch(e => {
                console.log(e)
            })
    };
    const notShow = () => {
        setShow(false);
    }

    return (

        <div  >
            <FormArticle
                show={show}
                notShow={notShow}
                handleInputChange={handleInputChange}
                article={article}
                saveArticle={saveArticle}
            ></FormArticle>

            <ListArticle data={data} />

        </div>
    );
}

export default MainArticle;