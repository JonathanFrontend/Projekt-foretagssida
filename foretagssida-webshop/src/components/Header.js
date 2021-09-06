import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/Vector.png';
import arrowDown from '../components/arrow-down.svg';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();

    let [meny, setMeny] = useState(true);
    let [lang, setLang] = useState(['en', 'se']);

    function handleClick(l){
        console.log(l)
        i18n.changeLanguage(l);
        console.log(lang);
        const newLang = lang.reverse();
        console.log(newLang);
        setLang(newLang);
    }

    return (
        <nav className="nav_bar">

            <Link className="link_head" to="/">
                <div className="nav_company">
                    <img className="nav_logo" src={logo} alt="company_logo" />
                    <h3 className="nav_head">Bookstore</h3>
                </div>
            </Link>

            <section className="nav_menu">
                <ul>
                    <Link to="/news" className="nav_link">{t('News.1')}</Link>
                    <Link to="/about" className="nav_link">{t('About.1')}</Link>
                    <Link to="/faq" className="nav_link">{t('FAQ.1')}</Link>
                    <Link to="/contact" className="nav_link">{t('Contact.1')}</Link>
                </ul>
            </section>


            <section className="nav_buttons">
                {meny ?
                    <div className="one">
                        <p className="first_btn">{lang[0]}</p>
                        <button onClick={() => setMeny(!meny)} className="arrow_down">
                            <img className="arrow_size" src={arrowDown} alt="arrow_down" />
                        </button>
                    </div>
                    :
                    <section>
                        <div className="one">
                            <p id="swe" className="first_btn">{lang[0]}</p>
                            <button onClick={() => setMeny(!meny)}
                                className="arrow_down">
                                <img className="arrow_size" src={arrowDown} alt="arrow_down" />
                            </button>
                        </div>
                        <button className="hidden two" onClick={() => handleClick(lang[1])}>{lang[1]}</button>
                    </section>
                }

            </section>
        </nav>
    )
}

export default Header;