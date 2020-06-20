import React from "react";
import style from "./ContentHeader.module.css";
import { ROUTES } from "../../consts";

const ContentHeader = ({ title }) => {
  return (
    <header className={ROUTES.chat ? style.headerScroll : style.header}>
      <h1 className={ROUTES === "home" || ROUTES === "login" || ROUTES === "register" || ROUTES === "qr" ? style.title : style.subtitle}>{title}</h1>
    </header>
  );
};

export default ContentHeader;
