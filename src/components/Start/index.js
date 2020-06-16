import React from "react";
import { Player, BigPlayButton } from 'video-react';

import intro from '../../assets/img/poster.png'
import bestand from '../../assets/video/intro.mp4'
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
          poster={intro}
          src={bestand}
          width="500"
          contentStyle={{ padding: 0 }}
        >
        <BigPlayButton position="center" className={style.play}/>
        </Player>
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
