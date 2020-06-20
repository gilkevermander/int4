import React, { useState } from "react";

//import style from "./Quiz.module.css";
//import InfoHeader from "../InfoHeader/InfoHeader";
//const quizStore = new QuizStore();
import Vraag1 from "../Vraag1/index";
import Vraag2 from "../Vraag2/index";
import Vraag3 from "../Vraag3/index";
import Vraag4 from "../Vraag4/index";
import Antwoord from "../Antwoord/index"

const Quiz = () => {
  const [antwoord, setAntwoord] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }





  const submitQuiz = e => {
    if (answer4 !== "") {
      e.preventDefault();
      console.log("TEST IN QUIZ FUNC");

      console.log(answer1)
      console.log(answer2)
      console.log(answer3)
      console.log(answer4)

      const result = parseInt(answer1) + parseInt(answer2) + parseInt(answer3) + parseInt(answer4);
      console.log(result)


      if (result >= 4) {
        setAntwoord("Italië")
      } if (result >= 7) {
        setAntwoord("Japan")
      } if (result >= 10) {
        setAntwoord("VS")
      } if (result >= 13) {
        setAntwoord("België")
      }
      setStep(step + 1);
    } else {
      setError("Duid een optie aan")
    }
  }


  const values = { answer1, answer2, answer3, answer4, antwoord };
  switch (step) {
    case 1:
      return <Vraag1
        nextStep={nextStep}
        values={values}
        setAnswer1={setAnswer1}
      />
    case 2:
      return <Vraag2
        nextStep={nextStep}
        setAnswer2={setAnswer2}
        values={values}
      />
    case 3:
      return <Vraag3
        values={values}
        nextStep={nextStep}
        setAnswer3={setAnswer3}
      />

    case 4:
      return <Vraag4
        values={values}
        setAnswer4={setAnswer4}
        submitQuiz={submitQuiz}
        error={values.answer4 === "" ? error : ""}
      />

    case 5:
      return <Antwoord
        nextStep={nextStep}
        antwoord={antwoord}
      />



    default:
  }
};

export default Quiz;