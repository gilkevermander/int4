import React from "react";
import ContentHeader from "../ContentHeader/ContentHeader";
import style from "./Antwoord.module.css";
import vs from "../../assets/img/vs.png";
import belgie from "../../assets/img/belgie.png"
import italie from "../../assets/img/italie.png"
import japan from "../../assets/img/japan.png"
import NavBarSouvenir from "../NavBarSouvenir/index";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/index";

const Antwoord = ({antwoord}) => {


  if (antwoord === "Italië") {
    return (
      <section className={style.container}>
      <ContentHeader title={"Resultaat"} />
      <img src={italie} alt="italie" className={style.img}/>
      <p className={style.favo}> Jouw favoriete land is Italië</p>
      <p className={style.uitleg}>Jij geniet van een glaasje wijn met een lekkere pasta daarbij! Een echte levensgenieter</p>
      <p className={style.actie}>Ga in KABIEN en vertel jouw verhaal!</p>
      <Link className={style.button} to={ROUTES.souvenirWall}>
            <span className={style.button__text}>Scan een ander souvenir</span>
      </Link>
      </section>
    )
  } if (antwoord === "VS") {
    return (
      <section className={style.container}>
      <ContentHeader title={"Resultaat"} />
      <img src={vs} alt="VS" className={style.img}/>
      <p className={style.favo}> Jouw favoriete land is de Verenigde Staten</p>
      <p className={style.uitleg}>Ow yeah! Jij bent een bezige bij! Nieuwe dingen ontdekken en interessante mensen ontmoeten is jouw favoriete bezigheid! You go!</p>
      <p className={style.actie}>Ga in KABIEN en vertel jouw verhaal!</p>
      <Link className={style.button} to={ROUTES.souvenirWall}>
            <span className={style.button__text}>Scan een ander souvenir</span>
      </Link>
      </section>
    )
  } if (antwoord === "België") {
    return (
      <section className={style.container}>
      <ContentHeader title={"Resultaat"} />
      <img src={belgie} alt="belgie" className={style.img}/>
      <p className={style.favo}> Jouw favoriete land is België</p>
      <p className={style.uitleg}>Home sweet home is jouw levensmotto! Nergens beter dan thuis. Het lekkerste eten, het meeste comfort! We geven je volledig gelijk!</p>
      <p className={style.actie}>Ga in KABIEN en vertel jouw verhaal!</p>
      <Link className={style.button} to={ROUTES.souvenirWall}>
            <span className={style.button__text}>Scan een ander souvenir</span>
      </Link>
      </section>
    )
  } if (antwoord === "Japan") {
    return (
      <section className={style.container}>
      <ContentHeader title={"Resultaat"} />
      <img src={japan} alt="japan" className={style.img}/>
      <p className={style.favo}> Jouw favoriete land is Japan</p>
      <p className={style.uitleg}>Geen enkel land heeft voor jou nog geheimen! Jij staat open voor nieuwe ontdekkingen! Wanderlust past dan ook perfect bij jou!</p>
      <p className={style.actie}>Ga in KABIEN en vertel jouw verhaal!</p>
      <Link className={style.button} to={ROUTES.souvenirWall}>
            <span className={style.button__text}>Scan een ander souvenir</span>
      </Link>
      </section>
    )
  }


};

export default Antwoord;