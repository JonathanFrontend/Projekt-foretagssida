import React, { useEffect, useState } from 'react';

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

    // This usestate and if else is for sorting our News and Articles
    const [radioChecked, setRadioChecked] = useState(true);
    
    if (radioChecked) {
        content.sort((a, b) => (parseInt(b.date)  - parseInt(a.date)))
    } else {
        content.sort((a, b) => (parseInt(a.date)  - parseInt(b.date))) 
    }

    // This useeffect is handling the Filter function

    useEffect(() => {
        if (checkedOne === false && checkedTwo === false) {
            setContent(articles)

        } else if (checkedOne === true && checkedTwo === false) {
            const news = articles.filter(article => article.label === 'news')
            setContent(news)
        }
        else if (checkedOne === true && checkedTwo === true) {
            setContent(articles)
        }
        else {
            const art = articles.filter(article => article.label === 'articles')
            setContent(art)
        }
    }, [checkedOne, checkedTwo])

    return (
        <div>

            <div className="header-img">
                <h1 className="header-text">Nyheter</h1>
            </div>

            <div className="newsWrapper">

                <h2 className="newsH2">Våra Nyheter och Artiklar</h2>

                <div className="newsBoxforFilterandSort">

                    <div className="newsBoxFilter">

                        <div className="newsArrow">
                            <p>Filtrera</p>
                            <button className="arrow_down" onClick={() => setAddFilter(!addFilter)}>
                                <img className="arrow_size" src={arrowDown} alt="arrow_down" />
                            </button>
                        </div>
                        {addFilter ?
                            <div>
                                <button>Nyheter</button>
                                <input type="checkbox" checked={checkedOne} onChange={() => setCheckedOne(!checkedOne)} />
                                <button>Artiklar</button>
                                <input type="checkbox" checked={checkedTwo} onChange={() => setCheckedTwo(!checkedTwo)} />
                            </div>
                            : ''}
                    </div>

                    <div className="newsBoxFilter">

                        <div className="newsArrow">
                            <p>Sortera</p>
                            <button className="arrow_down" onClick={() => setAddSort(!addSort)}>
                                <img className="arrow_size" src={arrowDown} alt="arrow_down" />
                            </button>
                        </div>
                        {addSort ?
                            <div>
                                <button>Datum - Senaste Först</button>
                                <input type="radio" name="sort" defaultChecked  onClick={() => setRadioChecked(true)} />
                                <button>Datum - Äldst Först</button>
                                <input type="radio" name="sort" onClick={() => setRadioChecked(false)} />
                            </div>
                            : ''}
                    </div>

                </div>

                <div>
                    {content.map((data, key) =>
                        <div key={key}>
                            <h6>{data.headline}</h6>
                            <div>
                                <p>             {data.date}</p>
                                <p>Författare: {data.author}</p>
                                <p>Inlägg: {data.label}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}