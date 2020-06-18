import React from "react";
import style from "./Chat.module.css";
import InfoHeader from "../InfoHeader/InfoHeader";

const Chat = () => {
  return (
    <section className={style.container}>
      <InfoHeader title={"Kabien"} />
    </section>
  );
};

export default Chat;