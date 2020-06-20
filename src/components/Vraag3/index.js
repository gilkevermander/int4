import React, { useState } from "react";
import style from "./Vraag3.module.css";
import ContentHeader from "../ContentHeader/ContentHeader";
import QuizStore from "../../stores/QuizStore";
import zonnebril from "../../assets/img/zonnebril.png";
import bikini from "../../assets/img/bikini.png";
import koptelefoon from "../../assets/img/koptelefoon.png";
import camera from "../../assets/img/cameraroze.png";
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
              <img src={bikini} alt="bikini" width="80" />
              <p className={style.text}>Zonnecrème en bikini</p>
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
              <img src={koptelefoon} alt="koptelefoon" width="100" />
              <p className={style.text}>Koptelefoon en jogging</p>
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
              <img src={zonnebril} alt="zonnebril" width="129" />
              <p className={style.text}>Avondkledij en zonnebril</p>
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
              <img src={camera} alt="camera" width="103" />
              <p className={style.text}>Camera en slippers</p>
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

        <button onClick={saveAndContinue} className={style.button}> <p className={style.button__next}>Volgende</p></button>

      </div>
      <NavBarSouvenir/>
    </section>
  );
};

export default Vraag3;