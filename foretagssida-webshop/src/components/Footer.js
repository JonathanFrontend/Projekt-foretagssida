import React from 'react'

// CSS
import '../App.css';

// Images
// import logo from "../assets/logo.png";
// import fbImg from "../assets/fb.png";
// import instaImg from "../assets/insta.png";
// import twitterImg from "../assets/twitter.png";

export default function Footer() {
    return (
        <footer>
            {/* <div className="footerContainer"> */}

                {/* <div className="footerBox">
                    <img className="footerLogo" src={logo} alt='Logo'></img>
                </div> */}

                <div className="footerBox">
                    <p>Snabblänkar</p>
                    <a className="footerLinks" href="/startpage">Startsida</a>
                    <a className="footerLinks" href="/about">Om oss</a>
                    <a className="footerLinks" href="/faq">Vanliga Frågor</a>
                    <a className="footerLinks" href="/contact">Kontakt</a>
                    {/* <a className="footerLinks" href="/en">EN</a> */}
                </div>

                {/* <div className="footerBox">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <img className="footerMedia" src={fbImg} alt='fbImg'></img>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <img className="footerMedia" src={instaImg} alt='instaImg'></img>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                        <img className="footerMedia" src={twitterImg} alt='twitterImg'></img>
                    </a>
                </div> */}

            {/* </div> */}

            <p>© 2021 Bookstore</p>
        </footer>
    )
}
