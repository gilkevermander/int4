import React, { useState } from "react";
import ContentHeader from "../ContentHeader/ContentHeader";
import QuizStore from "../../stores/QuizStore";
import style from "./Vraag1.module.css";
import sushi from "../../assets/img/sushi.png";
import hamburger from "../../assets/img/hamburger.png";
import mosselen from "../../assets/img/mosselen.png";
import spaghetti from "../../assets/img/spaghetti.png";
import NavBarSouvenir from "../NavBarSouvenir/index";

const quizStore = new QuizStore();

const Vraag1 = ({ setAnswer1, nextStep, values }) => {

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
      <div className={style.container}>
        <ContentHeader title={"Ontdek jouw favoriete land"} />
        <h2 className={style.question}>#1 Wat eet je het liefst op reis?</h2>

        <div className={style.grid}>

          <label htmlFor="antwoord1" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord1"
              name="v1"
              value={quizStore.vragen.v1_1}
              onChange={e => setAnswer1(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src={sushi} alt="sushi" width="120" height="91" />
              <p className={style.text}>Sushi</p>
            </div>
          </label>

          <label htmlFor="antwoord2" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord2"
              name="v1"
              value={quizStore.vragen.v1_2}
              onChange={e => setAnswer1(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src={hamburger} alt="hamburger" width="88" height="76" />
              <p className={style.text}>Hamburger</p>
            </div>
          </label>

          <label htmlFor="antwoord3" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord3"
              name="v1"
              value={quizStore.vragen.v1_3}
              onChange={e => setAnswer1(e.currentTarget.value)}/>
              <div className={style.answer__text}>
                <img src={mosselen} alt="mosselen" width="106" height="98" />
                <p className={style.text}>Mosselen met friet</p>
              </div>
  
          </label>

          <label htmlFor="antwoord4" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord4"
              name="v1"
              value={quizStore.vragen.v1_4}
              onChange={e => setAnswer1(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src={spaghetti} alt="spaghetti" width="86" height="81" />
              <p className={style.text}>Pasta</p>
            </div>
          </label>

        </div>
        <p className={style.error}>{error}</p>

        <div className={style.progress}>

          <span className={style.dot__active}></span>
          <span className={style.dot}></span>
          <span className={style.dot}></span>
          <span className={style.dot}></span>

        </div>

        <button onClick={saveAndContinue} className={style.button}> <p className={style.button__next}>Volgende</p></button>
      </div>
      <NavBarSouvenir/>
    </section>
  );
};

export default Vraag1;