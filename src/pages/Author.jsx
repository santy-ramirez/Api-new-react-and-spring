import React from 'react';
import MainAuthor from '../component/Author/MainAuthor';
import "../App.css"
import NavComponent from './NavComponent';
function Author(props) {
    return (
        <div >
            <NavComponent></NavComponent>
            <MainAuthor></MainAuthor>
        </div>
    );
}

export default Author;