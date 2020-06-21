import React from "react";
import style from "./Vraag4.module.css";
import ContentHeader from "../ContentHeader/ContentHeader";
import QuizStore from "../../stores/QuizStore";
import NavBarSouvenir from "../NavBarSouvenir/index";
const quizStore = new QuizStore();

const Vraag4 = ({ setAnswer4, antwoord, submitQuiz, error }) => {

  return (
    <section >
      <div className={style.container}>
        <ContentHeader title={"Ontdek jouw favoriete land"} />
        <h2 className={style.question}>#4 Waar slaap jij het liefst?</h2>
        <div className={style.grid}>
          <label htmlFor="antwoord4-1" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord4-1"
              name="v4"
              value={quizStore.vragen.v4_1}
              onChange={e => setAnswer4(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src="assets/img/camping.png" alt="camping" width="130" />
              <h3 className={style.text}>Camping</h3>
            </div>
          </label>

          <label htmlFor="antwoord4-2" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord4-2"
              name="v4"
              value={quizStore.vragen.v4_2}
              onChange={e => setAnswer4(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src="assets/img/hotel.png" alt="hotel" width="71" />
              <h3 className={style.text}>Hotel</h3>
            </div>
          </label>

          <label htmlFor="antwoord4-3" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord4-3"
              name="v4"
              value={quizStore.vragen.v4_3}
              onChange={e => setAnswer4(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src="assets/img/benb.png" alt="benb" width="106" />
              <h3 className={style.text}>Bed en breakfast</h3>
            </div>
          </label>

          <label htmlFor="antwoord4-4" className={style.answer}>
            <input
              className={style.answer__input}
              type="radio"
              id="antwoord4-4"
              name="v4"
              value={quizStore.vragen.v4_4}
              onChange={e => setAnswer4(e.currentTarget.value)} />
            <div className={style.answer__text}>
              <img src="assets/img/airbnb.png" alt="airbnb" width="139" />
              <h3 className={style.text}>Airbnb</h3>
            </div>
          </label>
        </div>
        <p className={style.error}>{error}</p>

        <div className={style.progress}>

          <span className={style.dot}></span>
          <span className={style.dot}></span>
          <span className={style.dot}></span>
          <span className={style.dot__active}></span>

        </div>
        <button onClick={submitQuiz} className={style.button}><h3 className={style.button__next}>Volgende</h3></button>
        <p>{antwoord}</p>

      </div>
      <NavBarSouvenir />
    </section>
  );
};

export default Vraag4;