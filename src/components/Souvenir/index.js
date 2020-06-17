import React, { useState } from "react";

import style from "./Souvenir.module.css";

const Souvenir = ({ nextStep, values, setSouvenir, prevStep }) => {

  const [error, setError] = useState("");

  const saveAndContinue = (e) => {
    e.preventDefault()
    if (values.souvenir === "") {
      setError("Duid een souvenir aan")
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
    <div className= {style.container}>
    <div className={style.header}>
    <button onClick={back} className={style.back}><p className={style.back__text}>&lt;</p></button>
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
      </div>
      <section className={style.container}>
        <form color='blue' >
          <h1 className={style.vraag}>Kies je souvenir</h1>
          { values.souvenir === "" ? <p className={[style.error2, style.error]}>{error}</p> : <p className={style.error}></p>}
            <div className= {style.grid}>
            <label className={style.keuze}>
              <input className={style.keuze__mogelijkheid} type="radio" name="souvenir" value="sleutelhanger" onChange={e => setSouvenir(e.currentTarget.value)} /> <span className={style.keuze__sleutel}>sleutelhanger</span>
            </label>
            <label className={style.keuze}>
              <input className={style.keuze__mogelijkheid} type="radio" name="souvenir" value="magneet" onChange={e => setSouvenir(e.currentTarget.value)} /> <span className={style.keuze__magneet}>magneet</span>
            </label>
            <label className={style.keuze}>
              <input className={style.keuze__mogelijkheid} type="radio" name="souvenir" value="sticker" onChange={e => setSouvenir(e.currentTarget.value)} /> <span className={style.keuze__sticker}>sticker</span>
            </label>
            </div>
          <button className={values.souvenir === "" ? style.next : style.next__active} onClick={saveAndContinue}><p className={style.next__text}>Volgende</p> </button>
        </form>
      </section>
      </div>
    </>
  );
};

export default Souvenir;