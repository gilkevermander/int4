import React, {useState} from "react";

import style from "./Quiz.module.css";
import InfoHeader from "../InfoHeader/InfoHeader";
import QuizStore from "../../stores/QuizStore";
const quizStore = new QuizStore();



const Quiz = ({value}) => {
  const [antwoord, setAntwoord] = useState("");

  const submitQuiz = e => {

    e.preventDefault();
    console.log("TEST IN QUIZ FUNC");


    const antwoord1 = value;
    const antwoord2 = quizStore.vragen.v2;
    console.log(antwoord1)
    

    const result = antwoord1 + antwoord2;
    console.log(result);

    if (result > 4) {
      setAntwoord("Italië")
    } if (result > 7) {
      setAntwoord("Japan")
    } if (result > 10) {
      setAntwoord("VS")
    } if (result > 13) {
      setAntwoord("België")
    }

    
  }


  return (
    <section className={style.container}>
      <InfoHeader title={"quiz"} />
      <h2>#1 Wat eet je het liefst op reis?</h2>
      <label htmlFor="antwoord1">
        <input 
          className="input__hidden"
          type="radio" 
          id="v1_1"
          value={quizStore.vragen.v1_1}
          onChange={e => quizStore.setAnswer("v1", e.currentTarget.value)}/>
        <p>Sushi</p>
      </label>

      <label htmlFor="antwoord2">
        <input 
          className="input__hidden" 
          type="radio" 
          id="v1_2" 
          value={quizStore.vragen.v1_2} />
        <p>Hamburger</p>
      </label>

      <label htmlFor="antwoord3">
        <input 
          className="input__hidden" 
          type="radio" 
          id="v1_3" 
          value={quizStore.vragen.v1_3}/>
        <p>Mosselen met friet</p>
      </label>

      <label htmlFor="antwoord4">
        <input 
          className="input__hidden" 
          type="radio" 
          id="v1_4" 
          value={quizStore.vragen.v1_4}/>
        <p>Pasta</p>
      </label>

      <h2>#2 Welke activiteit doe je het liefst?</h2>
      <label htmlFor="antwoord2-1">
        <input className="input__hidden" type="radio" id="antwoord2-1" name="antwoord2" value="3" />
        <p>Concert</p>
      </label>

      <label htmlFor="antwoord2-2">
        <input className="input__hidden" type="radio" id="antwoord2-2" name="antwoord2" value="1" />
        <p>Aan het strand/zwembad liggen</p>
      </label>

      <label htmlFor="antwoord2-3">
        <input className="input__hidden" type="radio" id="antwoord2-3" name="antwoord2" value="2" />
        <p>Cultuur opsnuiven</p>
      </label>

      <label htmlFor="antwoord2-4">
        <input className="input__hidden" type="radio" id="antwoord2-4" name="antwoord2" value="4" />
        <p>Gezelschapsspelletjes spelen</p>
      </label>

      <button onClick={submitQuiz}>Volgende</button>
      <p>{antwoord}</p>
      
    </section>
  );
};

export default Quiz;