import React, {useState} from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import QuizStore from "../../stores/QuizStore";
const quizStore = new QuizStore();

const Vraag1 = ({setAnswer1, nextStep, values}) => {

    const [error, setError] = useState("");

    const saveAndContinue = (e) => {
        e.preventDefault()
        if (values.answer1 === "") {
          setError("Duid een optie aan")
        } else {
          nextStep()
        }
    
      }
  
  return (
    <section>
      <InfoHeader title={"quiz"} />
      <h2>#1 Wat eet je het liefst op reis?</h2>

      <label htmlFor="antwoord1">
        <input 
          className="input__hidden"
          type="radio" 
          id="v1_1"
          value={quizStore.vragen.v1_1}
          onChange={e => setAnswer1( e.currentTarget.value)}/>
        <p>Sushi</p>
      </label>

      <label htmlFor="antwoord2">
        <input 
          className="input__hidden" 
          type="radio" 
          id="v1_2" 
          value={quizStore.vragen.v1_2} 
          onChange={e => setAnswer1( e.currentTarget.value)}/>
        <p>Hamburger</p>
      </label>

      <label htmlFor="antwoord3">
        <input 
          className="input__hidden" 
          type="radio" 
          id="v1_3" 
          value={quizStore.vragen.v1_3}
          onChange={e => setAnswer1( e.currentTarget.value)}/>
        <p>Mosselen met friet</p>
      </label>

      <label htmlFor="antwoord4">
        <input 
          className="input__hidden" 
          type="radio" 
          id="v1_4" 
          value={quizStore.vragen.v1_4}
          onChange={e => setAnswer1( e.currentTarget.value)}/>
        <p>Pasta</p>
      </label>
        <p>{error}</p>
      
      <button onClick={saveAndContinue}> <p>Volgende</p></button>
    </section>
  );
};

export default Vraag1;