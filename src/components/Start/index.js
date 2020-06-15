import React from "react";
import { Player } from 'video-react';

import poster from './poster.png'
import bestand from './bestand.mp4'
import style from "./Start.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/index";


const Start = () => {

  return (
    <section className={style.container}>
      <div className={style.player}>
        <Player
          className={style.player}
          playsInline
          poster={poster}
          src={bestand}
          width="500"
          contentStyle={{ padding: 0 }}
        />
        <link
          rel="stylesheet"
          href="https://video-react.github.io/assets/video-react.css"
        />
        <Link className={style.button} to={ROUTES.manier}>
          <span className={style.button__text}>Start</span>
        </Link>
      </div>
    </section>
  );
}

export default Start;
