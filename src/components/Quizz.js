import React, { useContext } from "react";
import { QuizzContext } from "../contexts/quizz";
import Question from "./Question";

const Quizz = () => {
  const [quizzState, dispatch] = useContext(QuizzContext);
  console.log("quizzState", quizzState);
  return (
    <div className="quizz">
      {quizzState.showResults && (
        <div className="results">
          <div className="congratulations">congratulations!</div>
          <div className="results-info">
            <div>
              You've got {quizzState.correctAnswerCount} of{" "}
              {quizzState.questions.length}
              right.
            </div>
            <div
              className="next-button"
              onClick={() => dispatch({ type: "RESTART" })}
            >
              Restart
            </div>
          </div>
        </div>
      )}
      {!quizzState.showResults && (
        <div>
          <div className="score">
            Question {quizzState.currentQuestionIndex + 1}/
            {quizzState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizz;
