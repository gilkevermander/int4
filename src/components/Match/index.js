import React from 'react';
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";
import style from "./Match.module.css";

import wereldKaart from "../../assets/img/wereldKaart.png"

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
    <div>
      <h2 className={style.vraag}>Reisverhaal van {values.land}</h2>

      <div className={style.header}>
        <img src={wereldKaart} alt="werledkaart" height="386" width="800"></img>
        <audio className={style.container__audio} src='https://res.cloudinary.com/int4/video/upload/v1592396569/jjfba8egbdgvhvfkke1z.mp4' controls loop />
      </div>
      <button onClick={back} className={style.next__active}><p className={style.next__text}>Terug naar startscherm</p> </button>
    </div>
  )

}

export default Match;