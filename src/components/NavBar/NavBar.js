import React from "react";
import style from "./NavBar.module.css";
import { ReactComponent as MessageLogo } from "./message.svg";
import { ReactComponent as ScanLogo } from "./scan.svg";
import { ReactComponent as HomeLogo } from "./home.svg";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li>
          <NavLink className={style.button} to={ROUTES.home}>
            <HomeLogo fill="white" />
            <span >Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={style.button} to={ROUTES.qr}>
            <ScanLogo fill="currentColor" />
            <span>scan</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={style.button} to={ROUTES.chat}>
            <MessageLogo fill="white" />
            <span>Messages</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
