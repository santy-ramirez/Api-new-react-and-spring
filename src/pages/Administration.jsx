import React from 'react';
import { Link } from 'react-router-dom';
import NavComponent from './NavComponent';
import image from "../assets/profile.jpg"

function Administration(props) {
    return (
        <div  >
            <NavComponent></NavComponent>
            <div className='admin'>
                <div className='admin__header' >
                    <h2>Welcome User administration</h2>
                    <img src={image} />
                </div>
                <div className='admin__body' >
                    <button ><Link to="/author" >administrar Authors</Link></button>
                    <button ><Link to="/article" >administrar Articles</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Administration;