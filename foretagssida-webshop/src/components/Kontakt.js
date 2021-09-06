import { React } from "react";
import companyImage from "../images/company.png";
import kontaktData from "../data/kontaktData.json";
import { useSelector } from 'react-redux';

function Kontakt() {

  let stateLang = useSelector(state => {
    return state.lang
});

const text = () => {
    switch(stateLang) {
        case 'en':
            return kontaktData.en;
        case 'sv':
            return kontaktData.sv;
        default:
            return kontaktData.sv;
    }
};
  return (
    <>
      <div className="header-img">
        <h1 className="header-text">{text().kontaktTxt.titleTxt}</h1>
      </div>
      <div className="app-container">
        <div className="company-image-container">
          <img
            className="company-image"
            src={companyImage}
            alt="company building"
          />
        </div>
        <section className="section-spacing">
          <h1 className="headingtext primary">{text().kontaktTxt.headingtxt}</h1>
          <p className="bodytext">
          {text().kontaktTxt.bodyTxt}
          </p>
        </section>
        <section className="section-spacing">
          <ul className="kontakt-list">
            {text().kontaktInfo.map((item, key) => (
              <li className="kontakt-items">
                <div className="kontakt-left">
                  <img src={`/images/${item.icon}.png`} alt="kontakt icon" />
                  <div className="kontakt-left-content">
                    <h4>{item.way}</h4>
                    <span className="kontakt-desc">{item.desc}</span>
                  </div>
                </div>
                <div>
                  <p className="info-text">
                    {item.link === "" ? (
                      item.info
                    ) : (
                      <a
                        className="link-info"
                        href={`${item.link}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.info}
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
              <label className="form-text-label">{text().formTxt.fullName}</label>
              <input className="form-text-input" type="text" />
            </div>
            <div className="form-group">
              <label className="form-text-label">{text().formTxt.email}</label>
              <input className="form-text-input" type="text" />
            </div>
            <div className="form-group">
              <label className="form-text-label">{text().formTxt.subject}</label>
              <select className="form-text-input form-select">
              <option  defaultValue="Välja ett ämne">
              {text().formTxt.op1}
                </option>
                <option value="Fråga om produkt/tjänst">{text().formTxt.op2}</option>
                <option value="Feedback">{text().formTxt.op3}</option>
                <option value="Klagomål">{text().formTxt.op4}</option>
                <option value="Annat">{text().formTxt.op5}</option>
                
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
