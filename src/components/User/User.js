import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./User.module.css";

const User = ({ user }) => {
  return (
    <li className={style.list}>
      <Link to={`${ROUTES.messages.to}${user.id}`}>
        <div className={style.list__link}>
          <img
            className={style.img}
            src="assets/img/user_icon.png"
            alt="user_icon"
            width="50"
            height="50"
          />
          <h3>{user.gebruikersnaam}</h3>
          <p className={style.list__icon}>&#62;</p>
        </div>
      </Link>
    </li>
  );
};

export default User;
