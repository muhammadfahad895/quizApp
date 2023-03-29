import React, { useState } from "react";
import questionsData from "../../questionsData";
import Result from "../Result";

const QuizQuestions = () => {
  let [questionCount, setQuestionCount] = useState(0);
  let [correctAnswer, setCorrectAnswer] = useState(0);
  let [clicked, setClicked] = useState(false);
  let [selected, setSelected] = useState("");

  const handleNextBtn = () => {
    questionsData.length != questionCount &&
      setQuestionCount(questionCount + 1);
    setClicked(false);
    if (selected === questionsData[questionCount].correctOption) {
      return setCorrectAnswer + 1;
    } else {
      return setCorrectAnswer + 0;
    }
  };

  const handleSelectOption = (e) => {
    setSelected(e.target.innerHTML);

    console.log(selected === questionsData[questionCount].correctOption);
  };

  console.log(selected);
  console.log(correctAnswer);

  return questionCount === questionsData.length ? (
    <Result correctAnswer={correctAnswer} />
  ) : (
    <div className="quiz-question flex">
      <div className="container flex">
        <p style={{ color: "grey" }}>Quiz</p>
        <h2>
          Question {questionCount + 1}/
          <span style={{ color: "grey" }}>{questionsData.length}</span>
        </h2>
        <p style={{ fontSize: "1.3rem" }}>
          {questionsData[questionCount].question}
        </p>
        <ul
          style={{ fontWeight: "400", fontSize: "1.3rem" }}
          className="questions"
        >
          {questionsData[questionCount].options.map((option) => (
            <li
              className="options"
              onClick={handleSelectOption}
              style={{ color: clicked && "red" }}
            >
              {option}
            </li>
          ))}
        </ul>
        <button className="start-btn">Quit</button>
        {questionCount + 1 === questionsData.length ? (
          <button className="start-btn" onClick={handleNextBtn}>
            Result
          </button>
        ) : (
          <button className="start-btn" onClick={handleNextBtn}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestions;
