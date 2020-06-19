import React from "react";
import style from "./InfoHeader.module.css";
import { useHistory } from "react-router-dom";
import { ReactComponent as backLogo } from "./back.svg";
import { useStore } from "../../hooks/useStore";
import { ROUTES } from "../../consts/index";

const InfoHeader = ({ title }) => {
  const history = useHistory();
  const { uiStore } = useStore();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await uiStore.logout();
      history.push(ROUTES.home);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className={style.header}>
      {/* <button className={style.button} onClick={history.goBack}>&lt;</button> */}
      <h1 className={style.title}>{title}</h1>
      <button onClick={handleLogout} className={style.button}>
        <p className={[style.button__text, style.button__text__logout].join(" ")}>Logout</p>
      </button>
    </header>
  );
};

export default InfoHeader;