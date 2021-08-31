import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/Vector.png'

import arrowDown from '../components/arrow-down.svg'





function Header() {
    return (
        <nav className="nav_bar">


            <div className="nav_company">
                <img className="nav_logo" src={logo} alt="company_logo" />
                <h3 className="nav_head">Bookstore</h3>
            </div>

            <section className="nav_menu">
                <ul>
                    <Link className="nav_link">Om oss</Link>
                    <Link className="nav_link">Vanliga frågor</Link>
                    <Link className="nav_link">Kontakt</Link>
                </ul>
            </section>


            <section className="nav_buttons">
                <p className="first_btn">SV
                    <button className="arrow_down">
                        <img className="arrow_size" src={arrowDown} alt="arrow_down" />
                    </button>
                </p>

            </section>




        </nav>




    )
}


export default Header;