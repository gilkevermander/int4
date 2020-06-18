import React, { useState } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";
import { useStore } from "../../hooks/useStore";
import ReactPlayer from 'react-player'
import style from "./Match.module.css";

import wereldKaart from "../../assets/img/wereldKaart.png"

const Match = ({ nextStep, values }) => {

  const history = useHistory();
  const { landStore } = useStore();

  const back = (e) => {
    e.preventDefault();
    history.push(ROUTES.home);
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