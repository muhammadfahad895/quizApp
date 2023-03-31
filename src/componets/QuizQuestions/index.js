import React, { useState } from "react";
import questionsData from "../../questionsData";
import Result from "../Result";
import Welcome from "../welcome";

const QuizQuestions = () => {
  let [questionCount, setQuestionCount] = useState(0);
  let [correctAnswer, setCorrectAnswer] = useState(0);
  let [selectedAnswer, setSelectedAnswer] = useState("");
  let [clicked, setClicked] = useState(-1);
  const [onClicked, setOnClicked] = useState(false);

  const handleSelectOption = (e, index) => {
    setSelectedAnswer(e.target.innerHTML);
    // console.log(e.target.innerHTML);
    setClicked(index);
  };

  const handleNextBtn = () => {
    // console.log("selectedAnser", selectedAnswer);
    if (selectedAnswer !== "") {
      questionsData.length !== questionCount &&
        setQuestionCount(questionCount + 1);
      setClicked(-1);

      selectedAnswer === questionsData[questionCount].correctOption &&
        setCorrectAnswer(correctAnswer + 1);
    } else {
      // console.log("error");
    }
    setSelectedAnswer("");
  };
  // console.log(correctAnswer);

  return (onClicked && <Welcome />) ||
    questionCount === questionsData.length ? (
    <Result correctAnswer={correctAnswer} />
  ) : (
    <div className="quiz-question flex">
      <div className="container flex">
        <p style={{ color: "grey" }}>Quiz</p>
        <h2>
          Question {questionCount + 1}/
          <span style={{ color: "grey" }}>{questionsData.length}</span>
        </h2>
        <p style={{ fontSize: "1.5rem" }}>
          {questionsData[questionCount].question}
        </p>
        <ul
          style={{ fontWeight: "400", fontSize: "1.3rem" }}
          className="questions"
        >
          {questionsData[questionCount].options.map((option, index) => (
            <li
              key={index}
              className="options"
              onClick={(e) => handleSelectOption(e, index)}
              style={{
                backgroundColor: clicked === index && "orangered",
                color: clicked === index && "black",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
        <div className="quiz-question-btns">
          <button className="btnAll" onClick={() => setOnClicked(true)}>
            Quit
          </button>
          {questionCount + 1 === questionsData.length ? (
            <button className="btnAll" onClick={handleNextBtn}>
              Result
            </button>
          ) : (
            <button className="btnAll" onClick={handleNextBtn}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
