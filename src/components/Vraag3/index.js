import React, { useState } from "react";
import style from "./Vraag3.module.css";
import ContentHeader from "../ContentHeader/ContentHeader";
import QuizStore from "../../stores/QuizStore";
import NavBarSouvenir from "../NavBarSouvenir/index";
const quizStore = new QuizStore();

const Vraag3 = ({ setAnswer3, nextStep, values }) => {

  const [error, setError] = useState("");

  const saveAndContinue = (e) => {
    e.preventDefault()
    if (values.answer3 === "") {
      setError("Duid een optie aan")
    } else {
      nextStep()
    }

  }

  return (
    <section >
      <div className={style.container}>
        <ContentHeader title={"Ontdek jouw favoriete land"} />
        <h2 className={style.question}>#3 Wat neem jij mee op vakantie?</h2>

        <div className={style.grid}>
          <label htmlFor="antwoord3-1" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord3-1"
              name="v3"
              value={quizStore.vragen.v3_1}
              onChange={e => setAnswer3(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src="assets/img/bikini.png" alt="bikini" width="80" />
              <h3 className={style.text}>Zonnecrème en bikini</h3>
            </div>
          </label>

          <label htmlFor="antwoord3-2" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord3-2"
              name="v3"
              value={quizStore.vragen.v3_2}
              onChange={e => setAnswer3(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src="assets/img/koptelefoon.png" alt="koptelefoon" width="100" />
              <h3 className={style.text}>Koptelefoon en jogging</h3>
            </div>
          </label>

          <label htmlFor="antwoord3-3" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord3-3"
              name="v3"
              value={quizStore.vragen.v3_3}
              onChange={e => setAnswer3(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src="assets/img/zonnebril.png" alt="zonnebril" width="129" />
              <h3 className={style.text}>Avondkledij en zonnebril</h3>
            </div>
          </label>

          <label htmlFor="antwoord3-4" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord3-4"
              name="v3"
              value={quizStore.vragen.v3_4}
              onChange={e => setAnswer3(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src="assets/img/cameraroze.png" alt="camera" width="103" />
              <h3 className={style.text}>Camera en slippers</h3>
            </div>
          </label>
        </div>
        {values.answer3 === "" ?  <p className={style.error}>{error}</p> :  <p className={style.error}></p>}

        <div className={style.progress}>

          <span className={style.dot}></span>
          <span className={style.dot}></span>
          <span className={style.dot__active}></span>
          <span className={style.dot}></span>

        </div>

        <button onClick={saveAndContinue} className={style.button}> <h3 className={style.button__next}>Volgende</h3></button>

      </div>
      <NavBarSouvenir/>
    </section>
  );
};

export default Vraag3;