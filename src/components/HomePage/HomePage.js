import React, { useRef } from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import style from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts/index";
import { useStore } from "../../hooks/useStore";

const HomePage = () => {
  const innerRef = useRef();

  const { uiStore } = useStore();

  const getLocation = () => {
    innerRef.current && innerRef.current.getLocation();
  };
  return (
    <section className={style.breedte}>
      {/* <p>{uiStore.currentUser.gebruikersnaam}</p> */}
      <InfoHeader title={"Kabien"} className={style.title} />
      <div className={style.headwrapper}>
        <div className={style.wrapper}>
          <NavLink className={style.add} to={ROUTES.qr}>
            <div className={style.link}>
              <img src="assets/img/luisteren.png" alt="luisteren" className={style.image}/>
              <h3 className={style.linktext}>Luister naar jouw souvenir</h3>
            </div>
          </NavLink>
          <NavLink onClick={getLocation} className={style.add} to="/locatie">
          <div className={[style.link, style.linktext__right].join(" ")}>
              <img src="assets/img/cabine.png" alt="cabine" className={style.image} />
              <h3 className={style.linktext}>Neem jouw herinnering op</h3>
            </div>
          </NavLink>
        </div>
        <div className={[style.wrapper, style.wrapper__kaart].join(" ")}>
          <NavLink className={style.add} to={ROUTES.kaart}>
            <div className={[style.link, style.link__bottom].join(" ")}>
              <img src="assets/img/verhalen.png" alt="verhalen" className={style.image} />
              <h3 className={[style.linktext, style.linktext__bottom]}>Ontdek verhalen van KABIEN</h3>
            </div>
          </NavLink>
        </div>
      </div>

    </section>
  );
};

export default HomePage;