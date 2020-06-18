import React from "react";

import style from "./SouvenirWall.module.css";
import InfoHeader from "../InfoHeader/InfoHeader";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/index";


const SouvenirWall = () => {
  return (
    <section className={style.container}>
      <InfoHeader title={"SouvenirWall"} />
      <Link className={style.button} to={ROUTES.quiz}>
        <span className={style.button__text}>Start</span>
      </Link>
    </section>
  );
};

export default SouvenirWall;