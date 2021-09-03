import {React} from 'react';
import Staff from "../data/personal.json"

function About() {
        
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
                    {Staff.personal.map((staff, key) => <div className="personal-card" key={key}> 
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
