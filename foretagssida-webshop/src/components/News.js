import React, { useState } from 'react';

// Import Json file
import articles from "../data/articles.json"

// Import Pictures
import arrowDown from '../components/arrow-down.svg'

export default function News() {

    let [addFilter, setAddFilter] = useState(false);
    let [addSort, setAddSort] = useState(false);
    let [content, setContent] = useState(articles)

    const [checked, setChecked] = useState(false);


    function newsClick() {
        console.log(checked)
        if (checked === true) {
            setContent(articles)

        } else if (checked === false) {
            console.log('sant itryckt')
            const news = articles.filter(article => article.label === 'news')
            setContent(news)

        } else {
            console.log('nada')
        }
    }
    function artClick() {
        console.log(checked)
        if (checked === true) {
            console.log('inte itryckt')
            setContent(articles)

        } else if (checked === false) {
            console.log('sant itryckt')
            const news = articles.filter(article => article.label === 'articles')
            setContent(news)

        } else {
            console.log('nada')
        }
    }





    return (
        <div>

            <div className="header-img">
                <h1 className="header-text">Nyheter</h1>
            </div>

            <h2>Våra Nyheter och Artiklar</h2>

            <div className="newsBoxforFilterandSort">

                <div className="newsBoxFilter">

                    <div>
                        <p>Filtrera</p>
                        <button className="arrow_down" onClick={() => setAddFilter(!addFilter)}>
                            <img className="arrow_size" src={arrowDown} alt="arrow_down" />
                        </button>
                    </div>
                    {addFilter ?
                        <div>
                            <button>Nyheter</button>
                            <input type="checkbox" defaultChecked={checked} onClick={newsClick} onChange={() => setChecked(!checked)} />
                            <button>Artiklar</button>
                            <input type="checkbox" defaultChecked={checked} onClick={artClick} onChange={() => setChecked(!checked)} />
                        </div>
                        : ''}
                </div>

                <div className="newsBoxSort">

                    <div>
                        <p>Sortera</p>
                        <button className="arrow_down" onClick={() => setAddSort(!addSort)}>
                            <img className="arrow_size" src={arrowDown} alt="arrow_down" />
                        </button>
                    </div>
                    {addSort ?
                        <div>
                            <button>Datum - Senaste Först</button>
                            <input type="radio" name="sort" defaultChecked />
                            <button>Datum - Äldst Först</button>
                            <input type="radio" name="sort" />
                        </div>
                        : ''}
                </div>

            </div>

            <div>
                {content.map((data, key) =>
                    <div key={key}>
                        <h6>{data.headline}</h6>
                        <div>
                            <p>{data.date}</p>
                            <p>Författare: {data.author}</p>
                            <p>Inlägg: {data.label}</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
