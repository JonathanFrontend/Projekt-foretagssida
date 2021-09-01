import {React} from 'react';
import companyImage from '../images/company.png'

function Kontakt() {
        
   return (
        <>
            <div className="header-img">
                <h1 className="header-text">Kontakta oss</h1>
            </div>
            <div className="kontakt-container">
            <div className="company-image-container">
          <img className="company-image"  src={companyImage} alt="company building"/>
          </div>
          <section className="section-spacing">
          <h1 className='headingtext primary'>Kontakta Bookstore</h1>
          <p className="bodytext">Varmt välkommen att kontakta Bookstore. Här hittar du vanliga frågor och svar samt information om våra kontaktvägar.</p>
          </section>
          <section className="section-spacing">
              <ul className='kontakt-list'>
               <li className="kontakt-items">
               </li> 
              </ul>
          </section>
        </div>
        </>
     )
}

export default Kontakt