import React from "react";
import style from "./NavBar.module.css";
import { ReactComponent as MessageLogo } from "./message.svg";
import scan from "../../assets/img/scan.png";
import { ReactComponent as HomeLogo } from "./home.svg";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li className={style.list__item}>
          <NavLink activeClassName={style.active} className={style.button}  to={ROUTES.home}>
            <HomeLogo fill="white" />
            <span className={style.list_text}>Home</span>
          </NavLink>
        </li>
        <li className={style.list__item}>
          <NavLink className={style.button__scan} activeClassName={style.active} to={ROUTES.qr}>
            <img src={scan} alt="scan"/>
            <span className={ style.list_text}>Scan je verhaal</span>
          </NavLink>
        </li>
        <li className={style.list__item}>
          <NavLink className={style.button} activeClassName={style.active} to={ROUTES.chat}>
            <MessageLogo fill="white" />
            <span className={style.list_text}>Berichten</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
