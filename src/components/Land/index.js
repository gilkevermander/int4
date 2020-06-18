import React, { useState } from 'react';
import style from "./Land.module.css";


const Land = ({ nextStep, values, setLand, landStore, prevStep }) => {

  const [error, setError] = useState("");

  const saveAndContinue = (e) => { 
    e.preventDefault()
    if (values.land === "") {
      setError("Kies een land")
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
    <div className={style.container}>
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

      <form color='blue' className={style.form}>
        <h1 className={style.vraag}>Kies het land van jouw herinnering</h1>
      { values.land === "" ? <p className={style.error}>{error}</p> : <p className={style.error}></p>}
        <section className={style.form__select}>
            <select className={style.select__css} name="land" id="land" onChange={e => setLand(e.currentTarget.value)}>
              <option className={style.option} key="niks" id="land" name="land" value="" >Kies je land</option>
              {landStore.lands.map(land => (
                <option className={style.option} key={land.id} id="land" name="land" value={land.title} >{land.title}</option>
              ))}
            </select>

        </section>

        <button onClick={saveAndContinue} className={values.land === "" ? style.next : style.next__active}><p className={style.next__text}>Volgende</p> </button>
      </form>

    </div>
  )
}

export default Land;