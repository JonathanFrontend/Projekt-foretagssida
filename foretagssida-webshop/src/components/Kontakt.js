import { React } from "react";
import companyImage from "../images/company.png";
import kontaktInfo from "../data/kontakt.json";

function Kontakt() {
  return (
    <>
      <div className="header-img">
        <h1 className="header-text">Kontakta oss</h1>
      </div>
      <div className="kontakt-container">
        <div className="company-image-container">
          <img
            className="company-image"
            src={companyImage}
            alt="company building"
          />
        </div>
        <section className="section-spacing">
          <h1 className="headingtext primary">Kontakta Bookstore</h1>
          <p className="bodytext">
            Varmt välkommen att kontakta Bookstore. Här hittar du vanliga frågor
            och svar samt information om våra kontaktvägar.
          </p>
        </section>
        <section className="section-spacing">
          <ul className="kontakt-list">
            {kontaktInfo.kontakt.map((kontaktInfo, key) => (
              <li className="kontakt-items">
                <div className="kontakt-left">
                  <img src={`/images/${kontaktInfo.icon}.png`} />
                  <div className="kontakt-left-content">
                    <h4>{kontaktInfo.way}</h4>
                    <span className="kontakt-desc">{kontaktInfo.desc}</span>
                  </div>
                </div>
                <div>
                  <p className="info-text">
                    {kontaktInfo.link === "" ? (
                      kontaktInfo.info
                    ) : (
                      <a
                        className="link-info"
                        href={`${kontaktInfo.link}`}
                        target="_blank"
                      >
                        {kontaktInfo.info}
                      </a>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="section-spacing">
          <form className="">
            <div className="form-group">
              <label className="form-text-label">Förnamn och efternamn</label>
              <input className="form-text-input" type="text" />
            </div>
            <div className="form-group">
              <label className="form-text-label">E-post:</label>
              <input className="form-text-input" type="text" />
            </div>
            <div className="form-group">
              <label className="form-text-label">Ämne</label>
              <select className="form-text-input form-select">
                <option value="Fråga om produkt/tjänst">Fråga om produkt/tjänst</option>
                <option value="Feedback">Feedback</option>
                <option value="Klagomål">Klagomål</option>
                <option value="Annat">Annat</option>
                <option value="Välja ett ämne" selected>
                Välja ett ämne
                </option>
              </select>
              <textarea className="form-text-input" name="content" rows="4" cols="50"></textarea>
            </div>
            <div className="form-group">
                <button className="btn-form">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Kontakt;
