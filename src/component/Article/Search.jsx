import React from 'react';
import { useEfect, useState, useRef } from "react"
import ArticleService from '../../service/ArticleService';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavComponent from '../../pages/NavComponent';

function Search(props) {

    const [word, setWord] = useState("");
    const [results, setResults] = useState([]);

    const searchQuery = (e) => {
        e.preventDefault();
        console.log(word)
        ArticleService.search(word)
            .then(response => {

                const resultado = response.data.content;
                console.log(resultado)
                setResults(resultado);
            })

            .catch(e => {
                console.error(e)
            })

    }
    const heandleOnchage = (e) => {
        const wordAdd = e.target.value
        console.log(wordAdd)
        setWord(wordAdd)
        console.log(wordAdd)
    }

    return (
        <Container>
            <NavComponent />
            <div >
                <Row  >
                    <div>
                        <form className='search' onSubmit={searchQuery}>
                            <input type='text' value={word} onChange={heandleOnchage} ></input>
                            <button>Search</button>
                        </form>
                    </div>
                </Row>
                <Row>
                    <ul>
                        {
                            results.map(a =>
                                <div className='item-list' key={a.title} >
                                    <h4>{a.title}</h4>
                                    <p>{a.description} </p>
                                    <img width='400px' height='100px' src={a.urlToImage} />
                                    <p>{a.content} </p>
                                </div>
                            )

                        }
                    </ul>

                </Row>
            </div >
        </Container >
    );
}

export default Search;