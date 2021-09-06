import React from 'react';
import Book from './Book'
import books from '../books.json';
import { useTranslation } from 'react-i18next';

function Startpage(){
    const { t, i18n } = useTranslation();
    return (
        <main className='wrapper'>
            <div className='hero'>
                <div className='hero-contents'>
                    <div className="hero-box hero-box-1">
                        <h1 className="hero-title">
                        {t('titleInHero')}
                        </h1>
                    </div>
                    <div className="hero-box hero-box-2">
                        <p className="hero-text">
                        {t('textInHero')}
                        </p>
                    </div>
                    <div className="hero-box hero-box-3">
                        <button className="btn">
                        {t('btnInHero')}
                        </button>
                    </div>
                </div>
            </div>
            <section className='main-contents'>
                <div className='main-contents-top'>
                    <h2 className="title">{t('titleInMain')}</h2>
                </div>
                <div className="bookshelf">
                    <article className="shelf">
                        {
                            books.popularBooks.map(book => <Book book={book}/>)
                        }
                    </article>
                </div>
                <div className='main-contents-middle'>
                    <h2 className="title">Newly released</h2>
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