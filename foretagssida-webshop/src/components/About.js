import {React} from 'react';
import personal from "../data/personal.json"
import { useSelector } from 'react-redux';
function About() {

    let stateLang = useSelector(state => {
        return state.lang
    });
    
    
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
