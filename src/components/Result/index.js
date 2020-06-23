import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";
import { useStore } from "../../hooks/useStore";
import style from "./Result.module.css";

const Result = ({ nextStep, values, setSouvid }) => {

  const history = useHistory();
  const { landStore } = useStore();

  const [aantal, setAantal] = useState(233);
  const [landId, setLandId] = useState(landStore.resolveLandId(values.land));

  const saveAndContinue = (e) => {
    e.preventDefault()
    try {
      // const land = landStore.resolveLandId(values.land);
      console.log(landId.id);
      console.log(values.land.id);
      const souvenirs = landStore.loadLandSouvenirs(landId.id);
      console.log(souvenirs);
      setSouvid(landId.id);
      nextStep()
    } catch (error) {
      console.log(error)
    }
    //history.push(`${ROUTES.detailSouvenir.to}${souvenir.id}`);
  }
  const back = (e) => {
    e.preventDefault();
    history.push(ROUTES.start);

  }
  //CODE HIERONDER ZORGT VOOR LOOP ???
  // const land = landStore.resolveLandId(values.land);
  // console.log(land)
  // setLandId(land.id)
  // console.log(landId);
  // console.log(values);
  // const souvenirs = souvenirStore.loadLandSouvenir(landId)
  // console.log(souvenirs);
  return (
    <section>
      <h2 className={style.hidden}>Scherm - Resultaat</h2>
      <h3 className={style.vraag}>Bedankt om je verhaal op te sturen!</h3>
      <h4 className={style.subtitle}>Je ontvangt een bevestiging via mail en toegang tot de wereldkaart vol reisverhalen.</h4>
      <p className={style.info}>Je verstuurde <span className={style.big}>1</span> van de <span className={style.big}>{aantal}</span> opnames over </p>
      <p className={style.info}><span className={style.big2}>{values.land}</span></p>
      <p className={style.match}>We vonden een ervaring <br />die past bij die van jou!</p>
      <div className={style.wrapper__buttons}>
        <button onClick={back} className={style.back}><h3 className={style.back__text}>Terug naar startscherm</h3></button>
        <button onClick={saveAndContinue} className={style.next__active}><h3 className={style.next__text}>Beluister de ervaring</h3> </button>
      </div>
    </section>
  )

}

export default Result;