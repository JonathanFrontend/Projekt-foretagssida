import React from 'react'
import {useSelector } from "react-redux";

import headerJson from "./headerJson.json";

// CSS
import '../App.css';

// Images
import logo from '../components/footerLogo.png'
import fbImg from '../components/fbImg.png'
import instaImg from '../components/instaImg.png'
import twitterImg from '../components/twitterImg.png'

export default function Footer() {

    let stateLang = useSelector(state => {
        return state.lang
    });


    const text = () => {
        switch (stateLang) {
            case 'en':
                return headerJson.en;
            case 'sv':
                return headerJson.sv;
            default:
                return headerJson.sv;
        }
    };

    return (
        <footer>
            <div className="footerContainer">

                <div className="footerBoxLeft">
                    <img className="footerImgLeft" src={logo} alt='Logo'></img>
                </div>

                <div className="footerBoxCenter">
                    <p>{text().fastLinks}</p>
                    <a className="footerLinks" href="/startpage">{text().linkOne}</a>
                    <a className="footerLinks" href="/about">{text().linkThree}</a>
                    <a className="footerLinks" href="/news">{text().linkTwo}</a>
                    <a className="footerLinks" href="/faq">{text().linkFour}</a>
                    <a className="footerLinks" href="/contact">{text().linkFive}</a>
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
