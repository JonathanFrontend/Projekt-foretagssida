import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Book(props){
    const stateLang = useSelector(state => state.lang);
    const words = (_buy, _currency) => {
        return {
            buy: _buy,
            currency: _currency
        }
    }
    const text = () => {
        switch(stateLang){
            case "sv":
                return words("Köp", "Kr");
            case "en":
                return words("Buy", " SEK");
                default: return words("Buy", "SEK");
        }
    }
    const [wantToRead, setWantToRead] = useState(props.book.wantToRead);
    let typeOfCheck = wantToRead ? "green-check" : "black-check";
    const rating = props.book.rating;
    const title = props.book.title;
    const author = props.book.author;
    const price = props.book.price;
    const starPercentage = (rating / 5) * 100 + '%';
    console.log(starPercentage);

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
                    <div className="star-outer">
                        <div className="star-inner" style={{width: starPercentage}}></div>
                    </div>
                </div> : ""
            }
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
                    {price + text().currency}
                </h3>
            </div>
            <div className="buy-box">
                <button className="buy-btn">
                    {text().buy}
                </button>
            </div>
        </aside>
    )
}

export default Book