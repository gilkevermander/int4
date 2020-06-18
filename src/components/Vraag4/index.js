import React from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import QuizStore from "../../stores/QuizStore";
const quizStore = new QuizStore();

const Vraag4 = ({setAnswer4, antwoord, submitQuiz}) => {
  
  return (
    <section >
      <InfoHeader title={"quiz"} />
      <h2>#4 Waar slaap jij het liefst?</h2>

      <label htmlFor="antwoord4-1">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord4-1" 
          value={quizStore.vragen.v4_1}
          onChange={e => setAnswer4( e.currentTarget.value)} />
        <p>Camping</p>
      </label>

      <label htmlFor="antwoord4-2">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord4-2" 
          value={quizStore.vragen.v4_2}
          onChange={e => setAnswer4( e.currentTarget.value)} />
        <p>Hotel</p>
      </label>

      <label htmlFor="antwoord4-3">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord4-3" 
          value={quizStore.vragen.v4_3}
          onChange={e => setAnswer4( e.currentTarget.value)} />
        <p>Bed and Breakfast</p>
      </label>

      <label htmlFor="antwoord4-4">
        <input 
          className="input__hidden" 
          type="radio" 
          id="antwoord4-4" 
          value={quizStore.vragen.v4_4}
          onChange={e => setAnswer4( e.currentTarget.value)}/>
        <p>Airbnb</p>
      </label>

      <button onClick={submitQuiz}>Volgende</button>
      <p>{antwoord}</p>

      
    </section>
  );
};

export default Vraag4;