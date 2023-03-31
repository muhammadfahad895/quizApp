import React, { useState, useEffect } from "react";
import questionsData from "../../questionsData";
import trophy from "../";
import QuizQuestion from "../QuizQuestions";

const Result = ({ correctAnswer }) => {
  const [percentage, setPercentage] = useState(0);
  const [grade, setGrade] = useState("");
  const [clicked, setClicked] = useState(false);

  const name = localStorage.getItem("name");

  useEffect(() => {
    setPercentage((correctAnswer * 100) / questionsData.length);

    if (percentage >= 80) {
      setGrade("A+");
    } else if (percentage >= 65) {
      setGrade("A");
    } else if (percentage >= 50) {
      setGrade("B");
    } else if (percentage >= 40) {
      setGrade("C");
    } else {
      setGrade("F");
    }
  });

  return clicked ? (
    <QuizQuestion />
  ) : (
    <div className="result">
      <h2 style={{ fontSize: "1.5rem" }}>Quiz Result</h2>
      <img src={trophy} alt="" style={{ width: "230px" }} />
      <h1>
        {percentage >= 50 ? (
          <span style={{ color: "#27ae60" }}>"Congrats! {name}"</span>
        ) : (
          <span style={{ color: "#e74c3c" }}>"Sorry You fail! Try again"</span>
        )}
      </h1>

      <p style={{ fontSize: "1rem" }}>
        Quiz completed sucessfully! You Attempt{" "}
        <span style={{ color: "#2980b9" }}>{questionsData.length} </span> and
        from that <span style={{ color: "#27ae60" }}>{correctAnswer} </span>
        is Correct.
      </p>
      <p style={{ fontSize: "1.5rem", color: "#bdc3c7" }}>Your score</p>
      <p>
        {percentage}% Score ({grade} grade)
      </p>
      <h2 style={{ color: "white" }}>
        0{correctAnswer}/0{questionsData.length}
      </h2>

      <div className="btn">
        <button className="btnAll" onClick={() => setClicked(true)}>
          Take New Quiz
        </button>
      </div>
    </div>
  );
};

export default Result;
