import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import AppHeader from "../AppHeader/index";
import style from "./AddUser.module.css";
import { ROUTES } from "../../consts";

const AddUser = () => {
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [message, setMessage] = useState("");
  const [messageFalse, setMessageFalse] = useState("");
  const { uiStore, userStore } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userStore.createContactforUser(uiStore.currentUser, gebruikersnaam);
      setMessage(`${gebruikersnaam} is succesvol toegevoegd`)
    } catch (error) {
      console.log(error);
      setMessageFalse(`${gebruikersnaam} bestaat niet`)
    }
  };

  return (
    <>
    <div className={style.container}>
      <AppHeader title={"Add contact"} prevStep={ROUTES.chat}/>
        <form onSubmit={handleSubmit} className={style.form}>
          <label htmlFor="name" className={style.label}>
            Gebruikersnaam:
            <input
              className={style.input}
              type="text"
              value={gebruikersnaam}
              placeholder="Gebruikersnaam invullen"
              onChange={(e) => setGebruikersnaam(e.target.value)}
            />
          </label>
          <input type="submit" value="+" className={style.button} />
        </form>
        {message ? <p className={style.message}>{message}</p> : <p className={style.messageFalse}>{messageFalse}</p>}
        
      </div>
    </>
  );
};

export default AddUser;
