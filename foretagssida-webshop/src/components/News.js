import React, { useEffect, useState } from 'react';

// Import Json file
import articlesJson from "../data/articles.json"

// Import Pictures
import arrowDownPurp from '../components/arrow-down-purp.png'

import { useSelector } from 'react-redux';

export default function News() {
    let stateLang = useSelector(state => {return state.lang});
    console.log(stateLang);

    let [addFilter, setAddFilter] = useState(false);
    let [addSort, setAddSort] = useState(false);
    let textObj = (articlesArr, news, articles, filter, sort, newsH2, date, newest, oldest, author, type) => {
        return {
            articlesArr: articlesArr,
            news: news,
            articles: articles,
            filter: filter,
            sort: sort,
            newsH2: newsH2,
            date: date,
            newest: newest,
            oldest: oldest,
            author: author,
            type: type
        }
    }
    
    const text = () => {
        switch(stateLang) {
            case 'sv':
                return textObj(articlesJson.sv, "Nyheter", "Artiklar", "Filter", "Sortera", "Våra nyheter och artiklar", "Datum", "Nyast först", "Äldsta först", "Författare", "Typ");
            case 'en':
                return textObj(articlesJson.en, "News", "Articles", "Filter", "Sort", "Our news and articles", "Date", "Newest first", "Oldest first", "Author", "Type");
            default: return textObj(articlesJson.en, "News", "Articles", "Filter", "Sort", "Our news and articles", "Date", "Newest first", "Oldest first", "Author", "Type");
        }
    }
    
    const articles = text().articlesArr;
    let [content, setContent] = useState(articles)

    

    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);

    // This usestate and if else is for sorting our News and Articles
    const [radioChecked, setRadioChecked] = useState(true);

    if (radioChecked) {
        content.sort((a, b) => (parseInt(b.date) - parseInt(a.date)))
    } else {
        content.sort((a, b) => (parseInt(a.date) - parseInt(b.date)))
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

    }, [checkedOne, checkedTwo, stateLang, articles]);


    return (
        <div>

            <div className="header-img">
                <h1 className="header-text">{text().news}</h1>
            </div>
            <div className="app-container">
                <div className="newsWrapper">

                    <h2 className="newsH2">{text().newsH2}</h2>

                    <div className="newsBoxforFilterandSort">

                        <div className="newsBoxFilter">

                            <div className="newsArrow">
                                <p>{text().filter}</p>
                                <button className="arrow_down" onClick={() => setAddFilter(!addFilter)}>
                                    <img className="arrow_size purp" src={arrowDownPurp} alt="arrow_down" />
                                </button>
                            </div>
                            {addFilter ?
                                <div className="newsButtonBox">
                                    <aside className="newsAside">
                                        <button className="newsButton">{text().news}</button>
                                        <input type="checkbox" checked={checkedOne} onChange={() => setCheckedOne(!checkedOne)} />
                                    </aside>

                                    <aside className="newsAside">
                                        <button className="newsButton">{text().articles}</button>
                                        <input type="checkbox" checked={checkedTwo} onChange={() => setCheckedTwo(!checkedTwo)} />
                                    </aside>
                                </div>

                                : ''}

                        </div>

                        <div className="newsBoxFilter">

                            <div className="newsArrow">
                                <p>{text().sort}</p>
                                <button className="arrow_down" onClick={() => setAddSort(!addSort)}>
                                    <img className="arrow_size" src={arrowDownPurp} alt="arrow_down" />
                                </button>
                            </div>
                            {addSort ?
                                <div className="articleButtonBox">
                                    <aside className="articleAside">
                                        <button className="articleButton">{text().date} - {text().newest}</button>
                                        <input type="radio" name="sort" defaultChecked onClick={() => setRadioChecked(true)} />
                                    </aside>


                                    <aside className="articleAside">
                                        <button className="articleButton">{text().articles} -{text().oldest}</button>
                                        <input type="radio" name="sort" onClick={() => setRadioChecked(false)} />
                                    </aside>
                                </div>
                                : ''}
                        </div>

                    </div>

                    <div className="content">
                        {content.map((data, key) =>
                            <div className="contentBox" key={key}>
                                <h6 className="contentHeadline">{data.headline}</h6>
                                <div className="miniContent">
                                    <p>{data.date}</p>
                                    <p>{text().author} - {data.author}</p>
                                    <p>{text().type} -  {data.label}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}