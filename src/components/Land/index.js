import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import style from "./Land.module.css";


const Land = ({nextStep, values, setLand, landStore, prevStep}) => {

  const [error, setError] = useState("");

  const saveAndContinue = (e) => {
    e.preventDefault()
    if(values.land === "" ){
      setError("duid een land aan")
    } else {
      nextStep()
    }
  }

  const back = (e) => {
    e.preventDefault();
    prevStep();
  }

  console.log(values);
  console.log(landStore.lands);

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
    
    <Form color='blue' >
      <h1 className="ui centered">Kies het land van jouw herinnering</h1>
      <p>{error}</p>
      <Form.Field>
        <select name="land" id="land" onChange={e => setLand(e.currentTarget.value)}>
        <option key="niks" id="land" name="land" value="" >kies een optie</option>
          {landStore.lands.map(land => (
            <option key={land.id} id="land" name="land" value={land.title} >{land.title}</option>
          ))}
        </select>
      </Form.Field>
      <Button onClick={back}>Back</Button>
      <Button onClick={saveAndContinue}>Save And Continue </Button>
    </Form>
    </>
  )
}

export default Land;