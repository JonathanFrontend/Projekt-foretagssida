import React, { Suspense } from 'react';
import Book from './Book'
import books from '../books.json';
import lang from '../lang.json';
import { useSelector, useDispatch } from 'react-redux';

function Startpage(){
    //const { t, i18n } = useTranslation();
    let text = useSelector(state => {
        return state.lang
    });
    let dispatch = useDispatch();
    console.log('State Lang:', text);
    
    return (
        <main className='wrapper'>
            <div className='hero'>
                <div className='hero-contents'>
                    <div className="hero-box hero-box-1">
                        <h1 className="hero-title">
                        { text.titleInHero }
                        </h1>
                    </div>
                    <div className="hero-box hero-box-2">
                        <p className="hero-text">
                        { text.textInHero }
                        </p>
                    </div>
                    <div className="hero-box hero-box-3">
                        <button className="btn">
                        { text.btnInHero }
                        </button>
                    </div>
                </div>
            </div>
            <section className='main-contents'>
                <div className='main-contents-top'>
                    <h2 className="title">{ text.titleInMain }</h2>
                </div>
                <div className="bookshelf">
                    <article className="shelf">
                        {
                            books.popularBooks.map(book => <Book book={book}/>)
                        }
                    </article>
                </div>
                <div className='main-contents-middle'>
                    <h2 className="title">{ text.newlyReleased }</h2>
                </div>
                <div className="bookshelf">
                    <article className="shelf">
                        {
                            books.newBooks.map(book => <Book book={book}/>)
                        }
                    </article>
                </div>
            </section>
        </main>
    )
}
export default Startpage