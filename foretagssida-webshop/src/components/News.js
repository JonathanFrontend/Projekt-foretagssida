import React, { useState } from 'react';

// Import Json file
import articles from "../data/articles.json"

// Import Pictures
import arrowDown from '../components/arrow-down.svg'

export default function News() {

    let [addFilter, setAddFilter] = useState(false);
    let [addSort, setAddSort] = useState(false);

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
                            <input type="checkbox" defaultChecked />
                            <button>Artiklar</button>
                            <input type="checkbox" defaultChecked />
                        </div>
                        : '' }
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
                    : '' }
                </div>

            </div>

            <div>
                {articles.map((data, key) => 
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
