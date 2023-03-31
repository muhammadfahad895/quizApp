import React, { useState } from "react";

const Welcome = ({ studentName, setStudentName, setClicked }) => {
  let [showError, setShowError] = useState(false);

  const handleClick = () => {
    if (studentName.trim()) {
      setShowError(false);
      // console.log(false);
      setClicked(true);
      localStorage.setItem("name", studentName);
    } else {
      setShowError(true);
      // console.log(true);
    }
  };

  return (
    <div className="welcome flex">
      <div className="welcome-content  flex">
        <h1 className="heading">Quiz</h1>
        <p>Please Enter your Name</p>
        <input
          type="text"
          className="student-name"
          onChange={(e) => setStudentName(e.target.value)}
          value={studentName}
        />
        {showError && <p style={{ color: "red" }}> Name required </p>}
        <button className="btnAll" onClick={handleClick}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Welcome;
