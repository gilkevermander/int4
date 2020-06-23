import React from "react";
import style from "./InfoHeader.module.css";
import { useHistory } from "react-router-dom";
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
      <h2 className={style.title}>{title}<span className={style.hidden}> home</span></h2>
      <button onClick={handleLogout} className={style.button}>
        <h3 className={[style.button__text, style.button__text__logout].join(" ")}>Logout</h3>
      </button>
    </header>
  );
};

export default InfoHeader;