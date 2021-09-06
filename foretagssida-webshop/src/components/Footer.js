import React from 'react'

// CSS
import '../App.css';

// Images
import logo from '../components/footerLogo.png'
import fbImg from '../components/fbImg.png'
import instaImg from '../components/instaImg.png'
import twitterImg from '../components/twitterImg.png'

// import fbImg from "../assets/fb.png";
// import instaImg from "../assets/insta.png";
// import twitterImg from "../assets/twitter.png";

export default function Footer() {
    return (
        <footer>
            <div className="footerContainer">

                <div className="footerBoxLeft">
                    <img className="footerImgLeft" src={logo} alt='Logo'></img>
                </div>

                <div className="footerBoxCenter">
                    <p>Snabblänkar</p>
                    <a className="footerLinks" href="/startpage">Startsida</a>
                    <a className="footerLinks" href="/about">Om oss</a>
                    <a className="footerLinks" href="/news">Nyheter/Artiklar</a>
                    <a className="footerLinks" href="/faq">Vanliga Frågor</a>
                    <a className="footerLinks" href="/contact">Kontakt</a>
                    {/* <a className="footerLinks" href="/en">EN</a> */}
                </div>

                <div className="footerBoxRight">
                    <a href="https://www.facebook.com/" className="footerImgCover" target="_blank" rel="noreferrer">
                        <img className="footerImg" src={fbImg} alt='fbImg'></img>
                    </a>
                    <a href="https://www.instagram.com/" className="footerImgCover" target="_blank" rel="noreferrer">
                        <img className="footerImg" src={instaImg} alt='instaImg'></img>
                    </a>
                    <a href="https://www.twitter.com/" className="footerImgCoverRight" target="_blank" rel="noreferrer">
                        <img className="footerImg" src={twitterImg} alt='twitterImg'></img>
                    </a>
                </div>

            </div>

            <p>© 2021 Bookstore</p>
        </footer>
    )
}
