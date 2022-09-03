import React from 'react';
import { useRef } from 'react';
import { useState, useEfect } from 'react';
import ArticleService from '../../service/ArticleService';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';


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

function FormArticle(props) {

    const [article, setArticle] = useState(initialState);
    const [published, setPublished] = useState(false);
    // const inputPublished = useRef(null);

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
                id: 5
            },
            "source": {
                id: 4
            }
        };
        console.log(data);
        ArticleService.create(data)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
    };



    return (
        <Container>
            <div>
                <h1>form the Article</h1>
                <div>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title
                                <input className='form-control'
                                    placeholder='enter name author'
                                    name='title'
                                    type="text"
                                    onChange={handleInputChange}
                                    value={article.title}
                                ></input>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>description
                                <input className='form-control'
                                    placeholder='enter name author'
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
                                    placeholder='enter name author'
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
                                    placeholder='enter name author'
                                    name='urlToImage'
                                    type="text"
                                    onChange={handleInputChange}
                                    value={article.urlToImage}
                                ></input>
                            </Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                <textarea className='form-control'
                                    name="content"
                                    placeholder="content article"
                                    onChange={handleInputChange}
                                    value={article.content}
                                ></textarea>
                            </Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                <input className='form-control'
                                    name='published'
                                    type="checkbox"
                                    onChange={handleInputChange}
                                    // ref={inputPublished}
                                    value={article.content}
                                ></input>
                            </Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Button
                                onClick={saveArticle}
                            >enviar</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div >
        </Container>

    );
}


export default FormArticle;