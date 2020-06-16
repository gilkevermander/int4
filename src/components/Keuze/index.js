import React, { useState, Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useObserver } from 'mobx-react-lite';
import style from "./Keuze.module.css";

const Keuze = ({ nextStep, values, setKeuze, prevStep, overStep }) => {

  const [error, setError] = useState("");

  const saveAndContinue = (e) => {
    e.preventDefault()
    if (values.keuze === false || values.keuze === true) {
      console.log(values.keuze)
      if (values.keuze === false) {
        overStep()
      } else {
        nextStep()
      }
    } else {
      setError("duide een keuze aan")
    }

  }
  const back = (e) => {
    e.preventDefault();
    prevStep();
  }
  console.log(values);
  return (
    <div>
      <div className={style.header}>
        <Button onClick={back} className={style.back}><p className={style.back__text}>&lt;</p></Button>
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
        <h2 className={style.vraag}>Wil jij jouw souvenir pimpen met een foto?</h2>
        <p>{error}</p>
        <Form>
          <div className={style.grid}>
            <label className={style.keuze}>
              <input className={style.keuze__mogelijkheid} type="radio" name="keuze" value="false" onChange={e => setKeuze(false)} /> <span className={style.keuze__text1}>Nee, liever niet</span>
            </label>
            <label className={style.keuze}>
              <input className={style.keuze__mogelijkheid} type="radio" name="keuze" value="true" onChange={e => setKeuze(true)} /> <span className={style.keuze__text2}>Ja, Superleuk!</span>
            </label>
          </div>
        </Form>
       
        <Button onClick={saveAndContinue} className={values.keuze === "" ? style.next : style.next__active}><p className={style.next__text}>Volgende</p> </Button>
      </Form>
    </div >
  )

}

export default Keuze;