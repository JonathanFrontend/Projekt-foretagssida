import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector } from "react-redux";

// Use a Json file to help with the footers translation.
import headerJson from "../data/headerJson.json";

// Images
import logo from '../images/footerLogo.png'
import fbImg from '../images/fbImg.png'
import instaImg from '../images/instaImg.png'
import twitterImg from '../images/twitterImg.png'

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
                    <Link className="footerLinks" to="/startpage">{text().linkOne}</Link>
                    <Link className="footerLinks" to="/about">{text().linkThree}</Link>
                    <Link className="footerLinks" to="/news">{text().linkTwo}</Link>
                    <Link className="footerLinks" to="/faq">{text().linkFour}</Link>
                    <Link className="footerLinks" to="/contact">{text().linkFive}</Link>
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

            <p>?? 2021 Bookstore</p>
        </footer>
    )
}
