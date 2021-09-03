import React from 'react';
import { useState } from 'react';

function Book(props){
    console.log(props);
    const [wantToRead, setWantToRead] = useState(props.book.wantToRead);
    let typeOfCheck = wantToRead ? "green-check" : "black-check";
    return (
        <aside className="book-container" key={props.book.id}>
            <span className={"check " + typeOfCheck} onClick={() => setWantToRead(!wantToRead)}>
            {wantToRead ? <i class="fas fa-check"></i> : <i class="fas fa-plus"></i>}
            </span>
            {/* <img src={`/images/${props.book.poster}`} alt="{props.book.title}" className="book-image"/> */}
            <div className="book-poster" style={{backgroundImage: `url("/images/${props.book.poster}")`}}>

            </div>
            <div>
                <h3>
                    {props.book.rating}
                </h3>
            </div>
            <div>
                <h3>
                    {props.book.title}
                </h3>
            </div>
            <div>
                <h3>
                    {props.book.author}
                </h3>
            </div>
            <div>
                <h3>
                    {props.book.price}
                </h3>
            </div>
            <div>
                <button className="buy-btn">
                    Köp
                </button>
            </div>
        </aside>
    )
}

export default Book