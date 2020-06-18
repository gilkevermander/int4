import React, {useState} from "react";

import style from "./Quiz.module.css";
import InfoHeader from "../InfoHeader/InfoHeader";
import QuizStore from "../../stores/QuizStore";
const quizStore = new QuizStore();

const Quiz = () => {
  const [antwoord, setAntwoord] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

  const submitQuiz = e => {

    e.preventDefault();
    console.log("TEST IN QUIZ FUNC");

    console.log(answer1)
    console.log(answer2)
    console.log(answer3)
    console.log(answer4)

    const result = parseInt(answer1) + parseInt(answer2) + parseInt(answer3) + parseInt(answer4) ;
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

export default Quiz;