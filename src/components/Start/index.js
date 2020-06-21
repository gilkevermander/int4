import React from "react";
import { Player, BigPlayButton } from 'video-react';

import intro from '../../assets/img/poster.png'
import bestand from '../../assets/video/intro.mp4'
import style from "./Start.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/index";
import ReactPlayer from 'react-player'


const Start = () => {

  return (
    <section className={style.container}>
      <h2 className={style.hidden}>Scherm - Introvideo</h2>
      <div className={style.player}>
        <video
          className={style.player}
          playsInline
          poster={intro}
          src={bestand}
          width="500"
          // contentStyle={{ padding: 0 }}
          controls
        />
        <link
          rel="stylesheet"
          href="https://video-react.github.io/assets/video-react.css"
        />
        <Link className={style.button} to={ROUTES.manier}>
          <h2 className={style.button__text}>Start</h2>
        </Link>
      </div>
    </section>
  );
}

export default Start;
