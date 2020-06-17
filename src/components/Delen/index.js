import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useObserver } from 'mobx-react-lite';
import style from "./Delen.module.css";

const Delen = ({ nextStep, values, setDelen }) => {

  const [error, setError] = useState("");

  const saveAndContinue = (e) => {
    e.preventDefault()
    if (values.delen === false || values.delen === true) {
      nextStep()
    } else {
      setError("duid een optie aan")
    }

  }

  return (
    <div>
      <div className={style.header}>

        <div className={style.procesbar}>

          <div className={style.procesbar_lijn1}>
            <div className={style.procesbar__item}>
              <p className={style.item__number}>1</p>
              <p className={style.item__text}>Verhaal</p>
            </div>
          </div>

          <div className={style.procesbar_lijn2}>
            <div className={style.procesbar__item1}>
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
            <div className={style.procesbar__item}>
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
      <Form >
        <h2 className={style.vraag}>Nog één laatste vraagje</h2>
        <h2 className={style.subtitel}>Wil je jouw verhaal anoniem delen op
de wereldkaart vol reisverhalen? </h2>
        <p>{error}</p>
        <Form>
          <div className={style.grid}>
            <label className={style.keuze}>
              <input className={style.keuze__mogelijkheid} type="radio" name="keuze" value="false" onChange={e => setDelen(false)} /> <span className={style.keuze__text1}>Nee, liever niet</span>
            </label>
            <label className={style.keuze}>
              <input className={style.keuze__mogelijkheid} type="radio" name="keuze" value="true" onChange={e => setDelen(true)} /> <span className={style.keuze__text2}>Ja, het mag op de
wereldkaart als audio</span>
            </label>
          </div>
        </Form>
        <Button onClick={saveAndContinue} className={values.keuze === "" ? style.next : style.next__active}><p className={style.next__text}>Verstuur</p> </Button>
      </Form>
    </div>
  )

}

export default Delen;