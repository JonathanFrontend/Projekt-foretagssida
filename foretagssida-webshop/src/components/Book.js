import React from 'react';

function Book(props){
    return (
        <aside className="book-container">
            <img src={`./images/${props.poster}`} alt="poster"/>
            <div className="book-poster" style={{backgroundImage: `url(../images/${props.poster})`}}>

            </div>
            <div>
                <h3>
                    {props.title}
                </h3>
            </div>
        </aside>
    )
}

export default Book