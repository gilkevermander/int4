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
      {ROUTES.messages.path === "/messages/:id" ? 
       <h3 className={style.subtitle}>{title}</h3>  
      : 
      <h2 className={ROUTES === "home" || ROUTES === "login" || ROUTES === "register" || ROUTES === "qr" ? style.title : style.subtitle}>{title}</h2>
    }
     
    </header>
  );
};

export default ContentHeader;
