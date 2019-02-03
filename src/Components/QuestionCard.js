import React from "react";

const QuestionCard = props => {
  return (
    <div className="questoncard">
      <h2>{props.question}</h2>
      {props.answer()}
    </div>
  );
};

export default QuestionCard;
