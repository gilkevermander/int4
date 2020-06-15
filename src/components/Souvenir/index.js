import React, { useState } from "react";
import { Form, Button } from 'semantic-ui-react';

import style from "./Souvenir.module.css";

const Souvenir = ({ nextStep, values, setSouvenir, prevStep }) => {

  const [error, setError] = useState("");

  const saveAndContinue = (e) => {
    e.preventDefault()
    if (values.souvenir === "") {
      setError("duid een souvenir aan")
    } else {
      nextStep()
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
      <section className={style.container}>
        <h2 className={style.message}>Souvenir</h2>
        <Form color='blue' >
          <h1 className="ui centered">kies een souvenir</h1>
          <p>{error}</p>
          <Form.Field>
            <label>
              <input type="radio" name="souvenir" value="sleutelhanger" onChange={e => setSouvenir(e.currentTarget.value)} /> <span>sleutelhanger</span>
            </label>
            <label>
              <input type="radio" name="souvenir" value="magneet" onChange={e => setSouvenir(e.currentTarget.value)} /> <span>magneet</span>
            </label>
            <label>
              <input type="radio" name="souvenir" value="sticker" onChange={e => setSouvenir(e.currentTarget.value)} /> <span>sticker</span>
            </label>
          </Form.Field>
          <Button onClick={back}>Back</Button>
          <Button onClick={saveAndContinue}>Save And Continue </Button>
        </Form>
      </section>
    </>
  );
};

export default Souvenir;