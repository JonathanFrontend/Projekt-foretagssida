import {React} from 'react';
import lang from "../lang.json"
import { useSelector, useDispatch } from 'react-redux';
function About() {
    
    let stateLang = useSelector(state => {
        return state.lang
    });

    let dispatch = useDispatch();
    console.log('State Lang:', stateLang);
    const text = () => {
        switch(stateLang) {
            case 'en':
                return lang.en;
            case 'sv':
                return lang.sv;
            default:
                return lang.sv;
        }
    };
        console.log(stateLang);
       


   return (
        <div className="personal-container">
            <div className="header-img">
                <h1 className="header-text">Om oss</h1>
            </div>
                <div className="description-content">
                    <h3 className="about-h3">Företagsmotto</h3>
                    <h2 className="about-h2"> När du läser en bra bok då händer alltid nåt magiskt!</h2> 
                    <p className="about-p">Vi erbjuder klassiska böcker, tidsskrifter och ljudböcker till ett förmånligt pris.</p> 
                    <div className="about-img"></div>
                    <h3 className="about-h3">Medarbetare</h3>
                <div className="personal-content">
                    {lang.personal.map((staff, key) =><div className="personal-card" key={key}> 
                    <img className="image"src={`/images/${staff.img}`} alt={text().staff.alt_text}/> 
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
