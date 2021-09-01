import React from 'react';
import Book from './Book'
import books from '../books.json';

function Startpage(){
    return (
        <main className='wrapper'>
            <div className='hero'>
                <div className='hero-contents'>
                    <div className="hero-box hero-box-1">
                        <h1 className="hero-title">
                        Something magical will happen when you read a good book.
                        </h1>
                    </div>
                    <div className="hero-box hero-box-2">
                        <p className="hero-text">
                        Bookplace helps you keep track of your reading,
                        & meet some new friends along the way.
                        </p>
                    </div>
                    <div className="hero-box hero-box-3">
                        <button className="btn">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
            <section className='main-contents'>
                <div className='main-contents-top'>
                    <h2 className="title">Popular books</h2>
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