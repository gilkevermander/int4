import React from "react";
import style from "./AppHeader.module.css";

const ContentHeader = ({ title }) => {
  return (
    <header className={style.header}>
      <p>&lt;</p>
      <h1 className={style.title}>{title}</h1>
      <h2>Logout</h2>
    </header>
  );
};

export default ContentHeader;
