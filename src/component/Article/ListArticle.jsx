import React from 'react';

function ListArticle({ data }) {
    const array = data.reverse();
    return (
        <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <h2> Last article created</h2>
            {
                array.map(a =>
                    <div className='article' key={a.title} >
                        <div className='article_rigth' >
                            <h2>{a.title}</h2>
                            <p>{a.description} </p>
                            <p>{a.content} </p>
                        </div>
                        <div className='article_left' >
                            <img src={a.urlToImage} />
                        </div>
                    </div>)
            }
        </div >
    );
}

export default ListArticle;