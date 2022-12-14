import React from 'react';
import { useRef } from 'react';
import { useState, useEfect } from 'react';
import ArticleService from '../../service/ArticleService';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import AlertComponent from './AlertComponent';


/*const initialState = {
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



}*/

function FormArticle({ handleInputChange, article, saveArticle, show, notShow }) {
    return (
        <Container  >
            <div className="mx-auto"  >
                <h1>form the Article</h1>
                <div>
                    < AlertComponent
                        show={show}
                        notShow={notShow} />
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title
                                <input className='form-control'
                                    placeholder='Enter title the Article'
                                    name='title'
                                    type="text"
                                    onChange={handleInputChange}
                                    value={article.title}
                                ></input>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description
                                <input className='form-control'
                                    placeholder='Enter description the Article'
                                    name='description'
                                    type="text"
                                    onChange={handleInputChange}
                                    value={article.description}
                                ></input>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Url
                                <input className='form-control'
                                    placeholder='Enter url the Article'
                                    name='url'
                                    type="text"
                                    onChange={handleInputChange}
                                    value={article.url}
                                ></input>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label> UrlToImage
                                <input className='form-control'
                                    placeholder='Enter urlToImage the Article'
                                    name='urlToImage'
                                    type="text"
                                    onChange={handleInputChange}
                                    value={article.urlToImage}
                                ></input>
                            </Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Content
                                <textarea className='form-control'
                                    name="content"
                                    placeholder="Enter content article"
                                    onChange={handleInputChange}
                                    value={article.content}
                                ></textarea>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button
                                onClick={saveArticle}
                            >Guardar</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div >
        </Container >

    );
}


export default FormArticle;