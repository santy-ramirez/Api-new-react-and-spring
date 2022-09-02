import React from 'react';


function ListAuthors(props) {
    const { data } = props;

    return (
        <div>
            {
                data.map(a =>
                    <div>
                        <span> {a.name} </span><span>{a.lastname}</span>
                    </div>


                )
            }
        </div>
    );
}

export default ListAuthors;