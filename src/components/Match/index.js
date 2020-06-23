import React from 'react';
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";
import style from "./Match.module.css";

const Match = ({ values }) => {

  const history = useHistory();

  const back = (e) => {
    e.preventDefault();
    history.push(ROUTES.start);
  }

  //const souvenirs = landStore.loadLandSouvenirs(values.souvid);
  //console.log(souvenirs);

  console.log(values);
  return (
    <section>
      <h2 className={style.hidden}>Scherm - Match</h2>
      <h3 className={style.vraag}>Reisverhaal van {values.land}</h3>
      <div className={style.header}>
        <h4 className={style.hidden}>Beluister het verhaal</h4>
        <img src="assets/img/wereldKaart.png" alt="werledkaart" height="386" width="800"></img>
        {/* de gematchte moet nog veranderd worden */}
        <audio className={style.container__audio} src='https://res.cloudinary.com/int4/video/upload/v1592830798/sudkbcelaqspobtl7kdr_u4xznx.mp4' controls loop />
      </div>
      <button onClick={back} className={style.next__active}><h3 className={style.next__text}>Terug naar startscherm</h3></button>
    </section>
  )

}

export default Match;