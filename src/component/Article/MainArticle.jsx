import React from 'react';
import { useState, useEffect } from "react";
import ArticleService from '../../service/ArticleService';
import FormArticle from './FormArticle';
import Search from './Search';



function MainArticle(props) {
    const list = [];
    const [article, setArticle] = useState(list);
    const retrieveArticles = async () => {
        try {
            const res = await ArticleService.getAll()
            const resArray = res.data.content;
            console.log(resArray);
            setArticle(resArray);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(
        () => {
            retrieveArticles()
        }
        , [])
    return (
        <div>
            {
                article.map(a => <p> {a.title} </p>)
            }
            <FormArticle></FormArticle>

        </div>
    );
}

export default MainArticle;