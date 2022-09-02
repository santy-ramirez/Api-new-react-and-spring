import React from 'react';
import { useEfect, useState, useRef } from "react"
import ArticleService from '../../service/ArticleService';
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
        <div>
            <form onSubmit={searchQuery}>
                <input type='text' value={word} onChange={heandleOnchage} ></input>
                <button>enviar</button>
            </form>
            {
                results.map(a => <p>{a.title}</p>
                )

            }
        </div>
    );
}

export default Search;