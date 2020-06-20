import React from "react";
import style from "./NavBarSouvenir.module.css";
import scan from "../../assets/img/scan.png";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

const NavBarSouvenir = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li className={style.list__item}>
          <NavLink className={style.button__scan} activeClassName={style.active} to={ROUTES.qr} >
            <img src={scan} alt="scan" width="82" height="82" className={style.img}/>
            <span className={ style.list_text}>Scan je verhaal</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSouvenir;
