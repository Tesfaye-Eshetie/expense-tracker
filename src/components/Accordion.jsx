import { useState } from "react";

export const Accordion = ({ Question, Answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion__item">
      <div
        className="accordion__question"
        onClick={() => setIsActive(!isActive)}
      >
        <h4>{Question}</h4>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <p className="accordion__answer">{Answer}</p>}
    </div>
  );
};
