import React from 'react';
import MainArticle from '../component/Article/MainArticle';
import NavComponent from './NavComponent';

function Articles(props) {
    return (
        <div>
            <NavComponent />
            <MainArticle />
        </div>
    );
}

export default Articles;