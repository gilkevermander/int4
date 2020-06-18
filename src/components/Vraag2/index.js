import React, {useState} from "react";

import InfoHeader from "../InfoHeader/InfoHeader";
import QuizStore from "../../stores/QuizStore";
const quizStore = new QuizStore();

const Vraag2 = ({setAnswer2, nextStep, values}) => {

  const [error, setError] = useState("");

    const saveAndContinue = (e) => {
        e.preventDefault()
        if (values.answer2 === "") {
          setError("Duid een optie aan")
        } else {
          nextStep()
        }
    
      }
  
  return (
    <section >
      <InfoHeader title={"quiz"} />
      <h2>#1 Wat eet je het liefst op reis?</h2>

      <h2>#2 Welke activiteit doe je het liefst?</h2>

      <label htmlFor="antwoord2-1">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord2-1" 
          value={quizStore.vragen.v2_1}
          onChange={e => setAnswer2( e.currentTarget.value)} />
        <p>Concert</p>
      </label>

      <label htmlFor="antwoord2-2">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord2-2" 
          value={quizStore.vragen.v2_2}
          onChange={e => setAnswer2( e.currentTarget.value)} />
        <p>Aan het strand/zwembad liggen</p>
      </label>

      <label htmlFor="antwoord2-3">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord2-3" 
          value={quizStore.vragen.v2_3}
          onChange={e => setAnswer2( e.currentTarget.value)} />
        <p>Cultuur opsnuiven</p>
      </label>

      <label htmlFor="antwoord2-4">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord2-4" 
          value={quizStore.vragen.v2_4}
          onChange={e => setAnswer2( e.currentTarget.value)}/>
        <p>Gezelschapsspelletjes spelen</p>
      </label>
      <p>{error}</p>
      
      <button onClick={saveAndContinue}> <p>Volgende</p></button>
   
      
    </section>
  );
};

export default Vraag2;