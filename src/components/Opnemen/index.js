import React, { useState } from 'react';
import style from "./Opnemen.module.css";

const Opnemen = ({ nextStep, values, setSelectedOption }) => {

  const [error, setError] = useState("");

  const saveAndContinue = (e) => {
    e.preventDefault()
    if (values.selectedoption === "") {
      setError("Duid een optie aan")
    } else {
      nextStep()
    }

  }
  console.log(values);
  return (
    <section className={style.wrap}>
      <h2 className={style.hidden}>Scherm - Hoe vertellen?</h2>
      <div className={style.procesbar}>
        <h3 className={style.hidden}>Procesbar</h3>
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
      <h3 className={style.vraag}>Kies op welke manier jij jouw reisverhaal wilt vertellen</h3>
      {values.selectedoption === "" ? <p className={style.error}>{error}</p> : <p className={style.error}></p>}
      <form>
        <div className={style.grid}>
          <label className={style.keuze}>
            <input className={style.keuze__mogelijkheid} type="radio" name="manier" value="podcast" onChange={e => setSelectedOption(e.target.value)} /> <span className={style.keuze__text1}>Podcast</span>
          </label>
          <label className={style.keuze}>
            <input className={style.keuze__mogelijkheid} type="radio" name="manier" value="video" onChange={e => setSelectedOption(e.target.value)} /> <span className={style.keuze__text2}>Video</span>
          </label>
        </div>
        <img className={style.backgroundimg} src="assets/img/tapes.png" width="486" alt="tapes"></img>
        <button className={values.selectedoption === "" ? style.next : style.next__active} onClick={saveAndContinue}> <h3 className={style.next__text}>Volgende</h3></button>
      </form>

    </section>
  )

}

export default Opnemen;