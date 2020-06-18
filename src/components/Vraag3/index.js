import React, {useState} from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import QuizStore from "../../stores/QuizStore";
const quizStore = new QuizStore();

const Vraag3 = ({setAnswer3, nextStep, values}) => {

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
    <section >
      <InfoHeader title={"quiz"} />
      <h2>#3 Wat neem jij mee op vakantie?</h2>

      <label htmlFor="antwoord3-1">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord3-1" 
          value={quizStore.vragen.v3_1}
          onChange={e => setAnswer3( e.currentTarget.value)} />
        <p>Zonnecrème en bikini</p>
      </label>

      <label htmlFor="antwoord3-2">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord3-2" 
          value={quizStore.vragen.v3_2}
          onChange={e => setAnswer3( e.currentTarget.value)} />
        <p>Koptelefoon en jogging</p>
      </label>

      <label htmlFor="antwoord3-3">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord3-3" 
          value={quizStore.vragen.v3_3}
          onChange={e => setAnswer3( e.currentTarget.value)} />
        <p>Avondkledij en zonnebril</p>
      </label>

      <label htmlFor="antwoord3-4">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord3-4" 
          value={quizStore.vragen.v3_4}
          onChange={e => setAnswer3( e.currentTarget.value)}/>
        <p>Camera en slippers</p>
      </label>
      <p>{error}</p>
      
      <button onClick={saveAndContinue}> <p>Volgende</p></button>
   
      
    </section>
  );
};

export default Vraag3;