import React from 'react';
import { Link } from 'react-router-dom';
import NavComponent from './NavComponent';
import image from "../assets/descarga.jpeg"

function Administration(props) {
    return (
        <div>
            <NavComponent></NavComponent>
            <div className='admin__header' >
                <h2>Welcome User administration</h2>
                <img src={image} />
            </div>
            <div className='admin__body' >
                <button ><Link to="/author" >administrar Author</Link></button>
                <button ><Link to="/article" >administrar Article</Link></button>
            </div>
        </div>
    );
}

export default Administration;