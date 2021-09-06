import React, { useState } from 'react';
import faqData from "../data/faqData.json";
import { useSelector } from 'react-redux';

const Faq = () => {
  const [isActive, setIsActive] = useState(-1);

  const toggle = index => {
    if (isActive === index) {
      //if clicked question is already active, then close it
      return setIsActive(-1);
    }

    setIsActive(index);
    console.log(index)
    console.log(isActive)
  };

  
  let stateLang = useSelector(state => {
    return state.lang
});

const text = () => {
    switch(stateLang) {
        case 'en':
            return faqData.en;
        case 'sv':
            return faqData.sv;
        default:
            return faqData.sv;
    }
};

  return (
    <>
    <div className="header-img">
        <h1 className="header-text">{text().headingTxt}</h1>
      </div>
      <div className="app-container">
    <div className="faq-accordion">
     {text().questionsList.map((item, index) => {
       return(
              <dl key={index}>
                <dt className="faq-question" onClick={() => toggle(index)}>
                  <p>{item.question}</p>
                  <span className="faq-icon">{isActive === index ? "-" : "+"}</span>
                </dt>
                
                  <dd className={`faq-answer ${isActive === index ? 'show' : 'hide'}`}>
                    <p>{item.answer}</p>
                  </dd>
                
                </dl>
       )
          })}
    </div>
    </div>
    </>
  );
};

export default Faq;