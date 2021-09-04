import {React} from 'react';
import personal from "../data/personal.json"
import { useSelector, useDispatch } from 'react-redux';
function About() {

    let stateLang = useSelector(state => {
        return state.lang
    });
    let dispatch = useDispatch();
    
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
                <h1 className="header-text">Om oss</h1>
            </div>
                <div className="description-content">
                    <h3 className="about-h3">Företagsmotto</h3>
                    <h2 className="about-h2"> När du läser en bra bok då händer alltid nåt magiskt!</h2> 
                    <p className="about-p">Vi erbjuder klassiska böcker, tidsskrifter och ljudböcker till ett förmånligt pris.</p> 
                    <div className="about-img">
                        <h1 className="about-img-text">NO LIMIT</h1>
                    </div>
                    <h3 className="about-h3">Medarbetare</h3>
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
