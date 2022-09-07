import React from 'react';

function ListArticle({ data }) {

    return (
        <div className="mx-auto" style={{ maxWidth: 1000 }}>
            {
                data.map(a => <p key={a.title} >{a.title} </p>)
            }
        </div>
    );
}

export default ListArticle;