import React, { useState } from "react";
import Title from "./Title/Title";
import Item from "./Item/Item";
import { faq_sections, faq_answers } from "../../../../constants";
import image from "../../../../assets/FAQ/group.png";
import "./Questions.css";

const Questions = () => {
  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#0A0628",
    marginBottom: "2rem",
  };
  const [openIndex, setOpenIndex] = useState(0);

  const [selectedTitle, setSelectedTitle] = useState(
    faq_sections.length > 0 ? faq_sections[0].title : null
  );

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };

  return (
    <div className="faq-questions-container">
      <img className="left-bg hidden md:block" src={image} alt="image" />
      <div className="questions-titles">
        <p style={titleStyle} className="font-subTitle text-center md:text-start">
          FAQ Sections
        </p>
        <div className="questions-titles-items">
          {faq_sections.map((section) => (
            <div
              key={section.id}
              className="pr-2 my-2"
            >
              <Title
                title={section.title}
                onClick={() => handleTitleClick(section.title)}
                isSelected={selectedTitle === section.title}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="question-answer">
        {faq_answers.map((answer, index) => (
          <div
            key={answer.id}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <Item
              title={answer.title}
              answer={answer.answer}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
