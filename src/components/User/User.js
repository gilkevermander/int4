import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./User.module.css";

const User = ({ user }) => {
  return (
    <li>
      <Link to={`${ROUTES.messages.to}${user.id}`}>
        <div className={style.user}>
          <img
            className={style.img}
            src={user.avatar}
            alt="user_icon"
            width="50"
            height="50"
          />
          <p>{user.gebruikersnaam}</p>
          <p>&#62;</p>
        </div>
      </Link>
    </li>
  );
};

export default User;
