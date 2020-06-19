import React, { useState } from "react";
import style from "./Vraag2.module.css";
import ContentHeader from "../ContentHeader/ContentHeader";
import QuizStore from "../../stores/QuizStore";
import cultuur from "../../assets/img/cultuur.png";
import spel from "../../assets/img/spel.png";
import concert from "../../assets/img/concert.png";
import parasol from "../../assets/img/parasol.png";
const quizStore = new QuizStore();

const Vraag2 = ({ setAnswer2, nextStep, values }) => {

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
      <div className={style.container}>
        <ContentHeader title={"Ontdek jouw favoriete land"} />

        <h2 className={style.question}>#2 Welke activiteit doe je het liefst?</h2>

        <div className={style.grid}>

          <label htmlFor="antwoord2-1" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord2-1"
              value={quizStore.vragen.v2_1}
              onChange={e => setAnswer2(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src={concert} alt="concert" width="75" height="92" />
              <p className={style.text}>Concert</p>
            </div>
          </label>

          <label htmlFor="antwoord2-2" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord2-2"
              value={quizStore.vragen.v2_2}
              onChange={e => setAnswer2(e.currentTarget.value)} />

            <div className={style.answer__text}>
              <img src={parasol} alt="parasol" width="94" height="96" />
              <p className={style.text}>Aan het strand/zwembad liggen</p>
            </div>
          </label>

          <label htmlFor="antwoord2-3" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord2-3"
              value={quizStore.vragen.v2_3}
              onChange={e => setAnswer2(e.currentTarget.value)} />
             <div className={style.answer__text}>
              <img src={cultuur} alt="cultuur" width="77" height="100" />
              <p className={style.text}>Cultuur opsnuiven</p>
            </div>
          </label>

          <label htmlFor="antwoord2-4" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord2-4"
              value={quizStore.vragen.v2_4}
              onChange={e => setAnswer2(e.currentTarget.value)} />
             <div className={style.answer__text}>
              <img src={spel} alt="spel" width="67" height="84" />
              <p className={style.text}>Gezelschapsspelletjes spelen</p>
            </div>
          </label>
        </div>
        <p className={style.error}>{error}</p>

        <div className={style.progress}>

          <span className={style.dot}></span>
          <span className={style.dot__active}></span>
          <span className={style.dot}></span>
          <span className={style.dot}></span>

        </div>

        <button onClick={saveAndContinue} className={style.button}> <p className={style.button__next}>Volgende</p></button>

      </div>
    </section>

  );
};

export default Vraag2;