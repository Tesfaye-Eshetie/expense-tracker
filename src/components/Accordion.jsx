import React, { useState } from "react";

export const Accordion = ({ Question, Answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion__item">
      <div
        className="accordion__question"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{Question}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion__answer">{Answer}</div>}
    </div>
  );
};
