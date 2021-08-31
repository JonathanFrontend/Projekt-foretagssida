import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/Vector.png'

import arrowDown from '../components/arrow-down.svg'



function Header() {

    let [meny, setMeny] = useState(true);


    console.log(meny)
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
                    <Link to="/about" className="nav_link">Om oss</Link>
                    <Link to="/faq" className="nav_link">Vanliga frågor</Link>
                    <Link to="/contact" className="nav_link">Kontakt</Link>
                </ul>
            </section>


            <section className="nav_buttons">
                {meny ?
                    <div className="one">
                        <p className="first_btn">SV</p>
                        <button onClick={() => setMeny(!meny)} className="arrow_down">
                            <img className="arrow_size" src={arrowDown} alt="arrow_down" />
                        </button>
                    </div>
                    :
                    <section>
                        <div className="one">
                            <p className="first_btn">SV</p>
                            <button onClick={() => setMeny(!meny)} className="arrow_down">
                                <img className="arrow_size" src={arrowDown} alt="arrow_down" />
                            </button>
                        </div>

                        <button className="hidden two">EN</button>


                    </section>
                }






            </section>




        </nav>




    )
}


export default Header;