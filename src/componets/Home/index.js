import React, { useState } from "react";
import Welcome from "../welcome";
import QuizQuestion from "../QuizQuestions";

const Main = () => {
  const [studentName, setStudentName] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      {clicked ? (
        <QuizQuestion />
      ) : (
        <Welcome
          studentName={studentName}
          setStudentName={setStudentName}
          setClicked={setClicked}
        />
      )}
    </div>
  );
};

export default Main;
