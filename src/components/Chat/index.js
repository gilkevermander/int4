import React from "react";
import style from "./Chat.module.css";
import ContentHeader from "../ContentHeader/ContentHeader";
import UsersList from "../UsersList/UsersList";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/index";

const Chat = () => {
  return (
    <section className={style.container}>
      <ContentHeader title={"Gesprekken"} className={style.header}/>
      <div className={style.container__content}>
        <UsersList />
        <Link className={style.button} to={ROUTES.addContact}>
          <span className={style.button__text}>+</span>
        </Link>
      </div>
    </section>
  );
};

export default Chat;