import {React} from 'react';
import Staff from "../data/personal.json"

function About() {
        
   
       
       console.log(Staff.personal);
        
   return (
        <div className="personal-container">
            <div className="header-img">
                <h1 className="header-text">Om oss</h1>
            </div>
                <div className="desc-content">
                    <h3 className="about-h3">Företagsmotto</h3>
                    <h2 className="about-h2"> När du läser en bra bok då händer alltid nått magiskt!</h2> 
                    <p className="about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque commodi labore modi? Tenetur veniam fugiat fugit dolor sequi nostrum quidem 
                    laborum, possimus quo dolores debitis veniam consequuntur explicabo, esse hic quisquam voluptas quos. Ea qui</p> 

                    <h3 className="about-h3">Medarbetare</h3>
                <div className="personal-content">
                    {Staff.personal.map((staff, key) => <div className="personal-card" key={key}> 
                    <img className="image"src={`/images/${staff.img}`} alt={staff.alt_text}/> 
                        <div className="about-text">
                            <h6>{staff.mail}</h6>
                            <h5>{staff.role}</h5>
                            <h4>{staff.name}</h4>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
     )
}

export default About
