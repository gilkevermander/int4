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
    <>
    <div className={style.procesbar}>

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
    <Form >
      <h2 className={style.vraag}>Wil jij jouw souvenir pimpen met een foto?</h2>
      <p>{error}</p>
      <Form.Field>
        <label>
          <input type="radio" name="keuze" value="false" onChange={e => setKeuze(false)} /> <span>Nee, liever niet</span>
        </label>
        <label>
          <input type="radio" name="keuze" value="true" onChange={e => setKeuze(true)} /> <span>Ja, Superleuk !</span>
        </label>
      </Form.Field>
      <Button onClick={saveAndContinue}>Save And Continue </Button>
      <Button onClick={back}>Back</Button>
    </Form>
    </>
  )

}

export default Keuze;