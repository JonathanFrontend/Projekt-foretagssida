
import {React} from 'react';
/* hämta personaljson fil för att kunna map och ändra till en och sv */
import personal from "../data/personal.json"
import { useSelector } from 'react-redux';
function About() {

    /* state från reducer som vi har skapat i index.js */
    let stateLang = useSelector(state => {
        return state.lang
    });
    
    /* ändra beroende vilken spårk och return vilken objekt i json filen  */
    const text = () => {
        switch(stateLang) {
            case 'en':
                return personal.en;
            case 'sv':
                return personal.sv;
            default:
                return personal.sv;
        }
    };
        
   return (
        <div className="personal-container">
            <div className="header-img">
                <h1 className="header-text">{text().aboutText.headerText}</h1>
            </div>
                <div className="description-content">

                    <h3 className="about-h3">{text().aboutText.mottoText}</h3>
                    <h2 className="about-h2">{text().aboutText.aboutHeadingText}</h2> 
                    <p className="about-p">{text().aboutText.aboutPText}</p> 
                    <div className="about-img">
                    </div>
                    <h3 className="about-h3">{text().aboutText.aboutH3Text}</h3>

                <div className="personal-content">
                {/*Funktion som hämtar data från personal och sedan mappar vi ut vår struktur.*/}
                    {text().personalInfo.map((staff, key) => <div className="personal-card" key={key}> 
                    <img className="image"src={`/images/${staff.img}`} alt={staff.alt_text}/> 
                        <div className="about-text">
                            <h2>{staff.name}</h2>
                            <h4>{staff.role}</h4>
                            <h4>{staff.mail}</h4>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
     )
}

export default About
