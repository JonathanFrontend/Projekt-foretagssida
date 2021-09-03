import React from 'react';
import { useState } from 'react';

function Book(props){
    console.log(props);
    const [wantToRead, setWantToRead] = useState(props.book.wantToRead);
    let typeOfCheck = wantToRead ? "green-check" : "black-check";
    const rating = props.book.rating;
    const title = props.book.title;
    const author = props.book.author;
    const price = props.book.price;
    return (
        <aside className="book-container" key={props.book.id}>
            <span className={"check " + typeOfCheck} onClick={() => setWantToRead(!wantToRead)}>
            {wantToRead ? <i className="fas fa-check"></i> : <i className="fas fa-plus"></i>}
            </span>
            {/* <img src={`/images/${props.book.poster}`} alt="{props.book.title}" className="book-image"/> */}
            <div className="book-poster" style={{backgroundImage: `url("/images/${props.book.poster}")`}}>

            </div>
            {rating ? 
            <div className="rating-box">
                <h3>
                    {rating} <i className="fas fa-star"></i>
                </h3>
            </div> : ""}
            <div className="title-box">
                <h3>
                    {title}
                </h3>
            </div>
            <div className="author-box">
                <h3>
                    {author}
                </h3>
            </div>
            <div className="price-box">
                <h3>
                    {price}Kr
                </h3>
            </div>
            <div className="buy-box">
                <button className="buy-btn">
                    Köp
                </button>
            </div>
        </aside>
    )
}

export default Book