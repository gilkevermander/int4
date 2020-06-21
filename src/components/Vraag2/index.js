import React, { useState } from "react";
import style from "./Vraag2.module.css";
import ContentHeader from "../ContentHeader/ContentHeader";
import QuizStore from "../../stores/QuizStore";
import NavBarSouvenir from "../NavBarSouvenir/index";
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
              name="v2"
              value={quizStore.vragen.v2_1}
              onChange={e => setAnswer2(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src="assets/img/concert.png" alt="concert" width="75" height="92" />
              <h3 className={style.text}>Concert</h3>
            </div>
          </label>

          <label htmlFor="antwoord2-2" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord2-2"
              name="v2"
              value={quizStore.vragen.v2_2}
              onChange={e => setAnswer2(e.currentTarget.value)} />

            <div className={style.answer__text}>
              <img src="assets/img/parasol.png" alt="parasol" width="94" height="96" />
              <h3 className={style.text}>Aan het strand/ zwembad liggen</h3>
            </div>
          </label>

          <label htmlFor="antwoord2-3" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord2-3"
              name="v2"
              value={quizStore.vragen.v2_3}
              onChange={e => setAnswer2(e.currentTarget.value)} />
             <div className={style.answer__text}>
              <img src="assets/img/cultuur.png" alt="cultuur" width="77" height="100" />
              <h3 className={style.text}>Cultuur opsnuiven</h3>
            </div>
          </label>

          <label htmlFor="antwoord2-4" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord2-4"
              name="v2"
              value={quizStore.vragen.v2_4}
              onChange={e => setAnswer2(e.currentTarget.value)} />
             <div className={style.answer__text}>
              <img src="assets/img/spel.png" alt="spel" width="67" height="84" />
              <h3 className={style.text}>Gezelschaps- spelletjes spelen</h3>
            </div>
          </label>
        </div>
        {values.answer2 === "" ?  <p className={style.error}>{error}</p> :  <p className={style.error}></p>}

        <div className={style.progress}>

          <span className={style.dot}></span>
          <span className={style.dot__active}></span>
          <span className={style.dot}></span>
          <span className={style.dot}></span>

        </div>

        <button onClick={saveAndContinue} className={style.button}> <h3 className={style.button__next}>Volgende</h3></button>

      </div>
      <NavBarSouvenir/>
    </section>

  );
};

export default Vraag2;