import React from 'react';

function Book(props){
    console.log(props);
    console.log(props.book.poster);
    return (
        <aside className="book-container" key={props.book.id}>
            <img src={`/images/${props.book.poster}`} alt="poster"/>
            <div className="book-poster" style={{backgroundImage: `url("/images/${props.book.poster}")`}}>
            </div>
            <div>
                <h3>
                    {props.book.title}
                </h3>
            </div>
        </aside>
    )
}

export default Book