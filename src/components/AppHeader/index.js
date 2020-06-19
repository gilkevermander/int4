import React from "react";
import style from "./AppHeader.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

const ContentHeader = ({ title, prevStep }) => {

  // const back = (e) => {
  //   e.preventDefault();
  //   prevStep();
  // }

  return (
    <header className={style.header}>
      <NavLink to={prevStep} className={style.back}><p className={style.back__text}>&lt;</p></NavLink>
      <h1 className={ROUTES === "home" || ROUTES === "login" || ROUTES === "register" || ROUTES === "qr" ? style.title : style.subtitle}>{title}</h1>
    </header>
  );
};

export default ContentHeader;
