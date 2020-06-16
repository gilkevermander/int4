import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import style from "./Opnemen.module.css";
import tapes from "../../assets/img/tapes.png"

const Opnemen = ({ nextStep, values, setSelectedOption }) => {

  const [error, setError] = useState("");

  const saveAndContinue = (e) => {
    e.preventDefault()
    if (values.selectedoption === "") {
      setError("duid een optie aan")
    } else {
      nextStep()
    }

  }
  console.log(values);
  return (
    <>
      <div className={style.procesbar}>

        <div className={style.procesbar_lijn1}>
          <div className={[style.procesbar__item1]}>
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

      <Form >
        <h2 className={style.vraag}>Kies op welke manier jij jouw reisverhaal wilt vertellen</h2>
        <p>{error}</p>
        <Form>
          
          <div className={style.grid}>
          <label className={style.keuze}>
            <input className={style.keuze__mogelijkheid} type="radio" name="manier" value="podcast" onChange={e => setSelectedOption(e.target.value)} /> <span className={style.keuze__text1}>Podcast</span>
          </label>
          <label className={style.keuze}>
            <input className={style.keuze__mogelijkheid} type="radio" name="manier" value="video" onChange={e => setSelectedOption(e.target.value)} /> <span className={style.keuze__text2}>Video</span>
          </label>
          </div>
          
        </Form>
          <img className={style.backgroundimg} src={tapes} width="486" alt="tapes"></img>
          <button className={values.selectedoption === "" ? style.next : style.next__active} onClick={saveAndContinue}> <p className={style.next__text}>Volgende</p></button>
      </Form>
    </>
  )

}

export default Opnemen;