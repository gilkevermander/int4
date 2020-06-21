import React from "react";
import ContentHeader from "../ContentHeader/ContentHeader";
import style from "./Antwoord.module.css";
// import vs from "../../assets/img/vs.png";
// import belgie from "../../assets/img/belgie.png"
// import italie from "../../assets/img/italie.png"
// import japan from "../../assets/img/japan.png"
import NavBarSouvenir from "../NavBarSouvenir/index";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/index";

const Antwoord = ({ antwoord }) => {


  if (antwoord === "Italië") {
    return (
      <section className={style.container}>
        <ContentHeader title={"Resultaat"} />
        <img src="assets/img/italie.png" alt="italie" className={style.img} />
        <h2 className={style.favo}> Jouw favoriete land is Italië</h2>
        <p className={style.uitleg}>Jij geniet van een glaasje wijn met een lekkere pasta daarbij! Een echte levensgenieter</p>
        <h2 className={style.actie}>Ga in KABIEN en vertel jouw verhaal!</h2>
        <Link className={style.button} to={ROUTES.souvenirWall}>
          <h2 className={style.button__text}>Scan een ander souvenir</h2>
        </Link>
      </section>
    )
  } if (antwoord === "VS") {
    return (
      <section className={style.container}>
        <ContentHeader title={"Resultaat"} />
        <img src="assets/img/vs.png" alt="VS" className={style.img} />
        <h2 className={style.favo}> Jouw favoriete land is de Verenigde Staten</h2>
        <p className={style.uitleg}>Ow yeah! Jij bent een bezige bij! Nieuwe dingen ontdekken en interessante mensen ontmoeten is jouw favoriete bezigheid! You go!</p>
        <h2 className={style.actie}>Ga in KABIEN en vertel jouw verhaal!</h2>
        <Link className={style.button} to={ROUTES.souvenirWall}>
          <h2 className={style.button__text}>Scan een ander souvenir</h2>
        </Link>
      </section>
    )
  } if (antwoord === "België") {
    return (
      <section className={style.container}>
        <ContentHeader title={"Resultaat"} />
        <img src="assets/img/belgie.png" alt="belgie" className={style.img} />
        <p className={style.favo}> Jouw favoriete land is België</p>
        <p className={style.uitleg}>Home sweet home is jouw levensmotto! Nergens beter dan thuis. Het lekkerste eten, het meeste comfort! We geven je volledig gelijk!</p>
        <p className={style.actie}>Ga in KABIEN en vertel jouw verhaal!</p>
        <Link className={style.button} to={ROUTES.souvenirWall}>
          <h2 className={style.button__text}>Scan een ander souvenir</h2>
        </Link>
      </section>
    )
  } if (antwoord === "Japan") {
    return (
      <section className={style.container}>
        <ContentHeader title={"Resultaat"} />
        <img src="assets/img/japan.png" alt="japan" className={style.img} />
        <h2 className={style.favo}> Jouw favoriete land is Japan</h2>
        <p className={style.uitleg}>Geen enkel land heeft voor jou nog geheimen! Jij staat open voor nieuwe ontdekkingen! Wanderlust past dan ook perfect bij jou!</p>
        <h2 className={style.actie}>Ga in KABIEN en vertel jouw verhaal!</h2>
        <Link className={style.button} to={ROUTES.souvenirWall}>
          <h2 className={style.button__text}>Scan een ander souvenir</h2>
        </Link>
      </section>
    )
  }


};

export default Antwoord;