import {React} from 'react';
import Staff from "../data/personal.json"

function About() {
        
   
       
       console.log(Staff.personal);
        
   return (
        <div className="personal-container">
            <h2 className="about-h2"> När du läser en bra bok då händer alltid nått magiskt!</h2> 
            
            <p className="about-h2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque commodi labore modi? Tenetur veniam fugiat fugit dolor sequi nostrum quidem 
            laborum, possimus quo dolores debitis veniam consequuntur explicabo, esse hic quisquam voluptas quos. Ea qui</p> 
            <div className="personal-content">
            {Staff.personal.map((staff, key) => <div className="personal-card" key={key}> 
            <img src={`/assets/${staff.img}`} alt={staff.alt_text}/> 
            <h5>{staff.role}</h5>
            <h6>{staff.mail}</h6>
            </div>)}
            </div>
        </div>
     )
}

export default About
