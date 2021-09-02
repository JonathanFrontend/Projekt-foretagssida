import React, { useState } from 'react';

// Import Json file
import articles from "../data/articles.json"

// Import Pictures
import arrowDown from '../components/arrow-down.svg'

export default function News() {

    let [addFilter, setAddFilter] = useState(false);
    let [addSort, setAddSort] = useState(false);
    let [content, setContent] = useState(articles)

    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);



    function newsClick() {
        console.log('Blank')

        if (checkedOne === false && checkedTwo === false) {
            console.log('Version 1')
            const news = articles.filter(article => article.label === 'news')
            setContent(news)

        } /* else if (checkedOne === false && checkedTwo === false) {
            console.log('Version 66')
            setContent(articles)

        } */ else if (checkedOne === true && checkedTwo === false) {
            setContent(articles)
            console.log('version 88')
        }
        else if (checkedOne === true && checkedTwo === true) {
            const news = articles.filter(article => article.label === 'articles')
            setContent(news)
            console.log('version 3')
        }
        else {
            setContent(articles)
            console.log('version 34')
            setContent(articles)
        }
    }

    function artClick() {
        console.log('Blank')

        if (checkedTwo === false && checkedOne === false) {
            console.log('Version 44')
            const news = articles.filter(article => article.label === 'articles')
            setContent(news)

        } else if (checkedTwo === false && checkedOne === false) {
            console.log('Version 5')
            /* const news = articles.filter(article => article.label === 'articles')
            setContent(news) */
            setContent(articles)

        } else if (checkedTwo === true && checkedOne === false) {
            console.log('Version 5')
            setContent(articles)


        } else if (checkedTwo === true && checkedOne === true) {
            console.log('Version 71')
            const news = articles.filter(article => article.label === 'news')
            setContent(news)
        }
        else {
            console.log('nada article')
            setContent(articles)
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
                            <input type="checkbox" defaultChecked={checkedOne} onClick={newsClick} onChange={() => setCheckedOne(!checkedOne)} />
                            <button>Artiklar</button>
                            <input type="checkbox" defaultChecked={checkedTwo} onClick={artClick} onChange={() => setCheckedTwo(!checkedTwo)} />
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
