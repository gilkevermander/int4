import React from "react";
import style from "./NavBarSouvenir.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

const NavBarSouvenir = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li className={style.list__item}>
          <NavLink className={style.button__scan} activeClassName={style.active} to={ROUTES.souvenirWall} >
            <img src="/assets/img/scan.png" alt="scan" width="82" height="82" className={style.img} />
            <span className={style.list__text}>Scan je souvenir</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSouvenir;
