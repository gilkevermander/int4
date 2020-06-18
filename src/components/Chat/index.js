import React from "react";
import style from "./Chat.module.css";
import InfoHeader from "../InfoHeader/InfoHeader";
import UsersList from "../UsersList/UsersList";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/index";

const Chat = () => {
  return (
    <section className={style.container}>
      <InfoHeader title={"Gesprekken"} />
      <UsersList/>
      <Link className={style.button} to={ROUTES.addContact}>
        <span className={style.button__text}>+</span>
      </Link>
    </section>
  );
};

export default Chat;