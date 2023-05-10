import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../components/helpers";

const initialState = {
  questions,
  currentQuestionIndex: 0,
  showResults:false,
  correctAnswerCount:0,
  answers:shuffleAnswers(questions[0]),
};

const reducer = (state, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults=state.currentQuestionIndex === state.questions.length-1;
      const currentQuestionIndex=showResults ? state.currentQuestionIndex : state.currentQuestionIndex+1
      return {
        ...state,
        currentQuestionIndex,
        showResults,
      };
      
    }
    case 'RESTART':{
      return initialState
    }
    default:
      return state;
  }
};

export const QuizzContext = createContext();

export const QuizzProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
  );
};
