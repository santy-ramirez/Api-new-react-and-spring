import React from 'react';

function ListArticle({ data }) {
    const array = data.reverse();
    return (
        <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <h2> Last article created</h2>
            {
                array.map(a => < p key={a.title} > {a.title} </p>)
            }
        </div >
    );
}

export default ListArticle;