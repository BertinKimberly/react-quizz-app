import React, { useContext } from "react";
import { QuizzContext } from "../contexts/quizz";
import Answer from './Answer'

const Question = () => {
  const [quizzState, dispatch] = useContext(QuizzContext);

  const currentQuestion = quizzState.questions[quizzState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizzState.answers.map((answer,index)=>(
          <Answer answerText={answer} key={index} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default Question;
