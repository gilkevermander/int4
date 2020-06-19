import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import Message from "../../models/Message.js";
import { useStore } from "../../hooks/useStore.js";
import { useParams } from "react-router-dom";
import style from "./Form.module.css";

const Form = () => {
  const [content, setContent] = useState("");
  const { uiStore, userStore, messageStore } = useStore();
  const { id } = useParams();

  const handleFormSubmit = e => {
    e.preventDefault();
    if (content !== "") {
      const user = userStore.resolveUser(id);
      const curUser = userStore.resolveUser(uiStore.currentUser.id)
      const message = new Message({
        store: messageStore,
        content,
        userId: uiStore.currentUser.id,
        gebruikersnaamMe: curUser.gebruikersnaam,
        gebruikersnaam: user.gebruikersnaam
      });
      console.log(user);
      console.log(message.gebruikersnaam)
      console.log(message.gebruikersnaamMe);
      message.create();

      setContent("");
    }
  };

  return useObserver(() => (
    <form onSubmit={handleFormSubmit} className={style.form}>
      <section className={style.form}>
        <input
          className={style.input}
          id="content"
          name="content"
          placeholder="Typ een bericht"
          value={content}
          onChange={e => setContent(e.currentTarget.value)}
        />
      </section>
    </form>
  ));
};

export default Form;
