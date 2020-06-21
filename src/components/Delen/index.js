import React, { useState } from 'react';
import style from "./Delen.module.css";

const Delen = ({ nextStep, values, setDelen, prevStep, prevprevStep }) => {

  const [error, setError] = useState("");

  const saveAndContinue = (e) => {
    e.preventDefault()
    if (values.delen === false || values.delen === true) {
      nextStep()
    } else {
      setError("Duid een optie aan")
    }

  }

  const back = (e) => {
    e.preventDefault();
    if (values.keuze === false) {
      prevprevStep();
    } else {
      prevStep();
    }

  }

  return (
    <section>
      <h2 className={style.hidden}>Scherm - Keuze delen verhaal</h2>
      <div className={style.header}>
        <button onClick={back} className={style.back}><p className={style.back__text}>&lt;</p></button>
        <div className={style.procesbar}>
          <h3 className={style.hidden}>Procesbar</h3>
          <div className={style.procesbar_lijn1}>
            <div className={style.procesbar__item}>
              <p className={style.item__number}>1</p>
              <p className={style.item__text}>Verhaal</p>
            </div>
          </div>

          <div className={style.procesbar_lijn2}>
            <div className={style.procesbar__item}>
              <p className={style.item__number}>2</p>
              <p className={style.item__text}>land</p>
            </div>
          </div>

          <div className={style.procesbar_lijn3}>
            <div className={style.procesbar__item}>
              <p className={style.item__number}>3</p>
              <p className={style.item__text}>Opname</p>
            </div>
          </div>

          <div className={style.procesbar_lijn4}>
            <div className={style.procesbar__item1}>
              <p className={style.item__number}>4</p>
              <p className={style.item__text}>Souvenir</p>
            </div>
          </div>

          <div className={style.procesbar__item}>
            <p className={style.item__number}>5</p>
            <p className={style.item__text}>Gegevens</p>
          </div>
        </div>
      </div>
      <form >
        <div className={style.gif}>
          <img alt="gif kaart" src="assets/video/GSMgif.gif" width="300"></img>
        </div>
        <div className={style.vragen}>
          <p className={style.vraag}>Voor we verdergaan naar de gegevens:</p>
          <h3 className={style.subtitel}>Wil je jouw verhaal anoniem delen op
de wereldkaart vol reisverhalen? </h3>
        </div>
        {values.delen === "" ? <p className={style.error}>{error} </p> : <p className={style.error}></p>}

        <div className={style.grid}>
          <label className={style.keuze}>
            <input className={style.keuze__mogelijkheid} type="radio" name="keuze" value="false" onChange={e => setDelen(false)} /> <span className={style.keuze__text1}>Nee, liever niet</span>
          </label>
          <label className={style.keuze}>
            <input className={style.keuze__mogelijkheid} type="radio" name="keuze" value="true" onChange={e => setDelen(true)} /> <span className={style.keuze__text2}>Ja, het mag op <br />de
wereldkaart als audio</span>
          </label>
        </div>
        <button onClick={saveAndContinue} className={values.delen === "" ? style.next : style.next__active}><h3 className={style.next__text}>Volgende</h3> </button>
      </form>
    </section>
  )

}

export default Delen;