import React from "react";
import style from "./NavBar.module.css";
import { ReactComponent as MessageLogo } from "./message.svg";
import { ReactComponent as HomeLogo } from "./home.svg";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>

        <NavLink activeClassName={style.active} className={style.list__item} to={ROUTES.home}>
          <li className={style.button}>
            <HomeLogo fill="white" />
            <span className={style.list_text}>Home</span>
          </li>
        </NavLink>


        <NavLink className={style.list__item} to={ROUTES.qr}>
          <li className={style.button__scan}>
            <img src="assets/img/scan.png" alt="scan" />
            <span className={style.list_text}>Scan je verhaal</span>
          </li>
        </NavLink>


        <NavLink className={style.list__item} activeClassName={style.active} to={ROUTES.chat}>
          <li className={style.button} >
            <MessageLogo fill="white" />
            <span className={style.list_text}>Berichten</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
