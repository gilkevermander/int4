import React, { useRef } from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import style from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts/index";
import luisteren from "../../assets/img/luisteren.png";
import cabine from "../../assets/img/cabine.png"
import verhalen from "../../assets/img/verhalen.png"

const HomePage = () => {
  const innerRef = useRef();

  const getLocation = () => {
    innerRef.current && innerRef.current.getLocation();
  };
  return (
    <section className={style.breedte}>
      <InfoHeader title={"Kabien"} className={style.title} />
      <div className={style.headwrapper}>
        <div className={style.wrapper}>
          <NavLink className={style.add} to={ROUTES.qr}>
            <div className={style.link}>
              <img src={luisteren} alt="luisteren" className={style.image}/>
              <h2 className={style.linktext}>Luister naar jouw souvenir</h2>
            </div>
          </NavLink>
          <NavLink onClick={getLocation} className={style.add} to="/locatie">
            <div className={style.link}>
              <img src={cabine} alt="cabine" className={style.image} />
              <h2 className={style.linktext}>Neem jouw herinnering op</h2>
            </div>
          </NavLink>
        </div>
        <div className={style.wrapper}>
          <NavLink className={style.add} to={ROUTES.kaart}>
            <div className={style.link}>
              <img src={verhalen} alt="verhalen" className={style.image} />
              <h2 className={style.linktext}>Ontdek verhalen van KABIEN</h2>
            </div>
          </NavLink>
        </div>
      </div>

    </section>
  );
};

export default HomePage;