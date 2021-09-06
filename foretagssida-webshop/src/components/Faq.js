import React, { useState } from 'react';
import faqData from "../data/faqData.json";

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

  return (
    <>
    <div className="header-img">
        <h1 className="header-text">Vanliga frågor</h1>
      </div>
      <div className="app-container">
    <div className="faq-accordion">
     {faqData.questionsList.map((item, index) => {
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