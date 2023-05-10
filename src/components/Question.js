import React, { useContext } from "react";
import { QuizzContext } from "../contexts/quizz";

const Question = () => {
  const [quizzState, dispatch] = useContext(QuizzContext);

  const currentQuestion = quizzState.questions[quizzState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
    </div>
  );
};

export default Question;
