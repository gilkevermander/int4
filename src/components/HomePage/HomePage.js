import React, { useRef } from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import style from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts/index";

const HomePage = () => {
  const innerRef = useRef();

  const getLocation = () => {
    innerRef.current && innerRef.current.getLocation();
  };
  return (
    <section className={style.breedte}>
      <InfoHeader title={"Kabien"} className={style.title}/>
      <div className={style.headwrapper}>
      <div className={style.wrapper}>
      <NavLink className={style.add} to={ROUTES.qr}>
        <h2 className={style.link}>Luister naar jouw souvenir</h2>
      </NavLink>
      <NavLink onClick={getLocation} className={style.add} to="/locatie">
        <h2 className={style.link}>Neem jouw herinnering op</h2>
      </NavLink>
      </div>
      <div className={style.wrapper}>
      <NavLink className={style.add} to={ROUTES.kaart}>
        <h2 className={style.link}>Ontdek verhalen van KABIEN</h2>
      </NavLink>
      </div>
      </div>

    </section>
  );
};

export default HomePage;