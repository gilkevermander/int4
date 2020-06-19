import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import AppHeader from "../AppHeader/index";
import style from "./AddUser.module.css";
import { ROUTES } from "../../consts";

const AddUser = () => {
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [message, setMessage] = useState("");
  const { uiStore, userStore } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userStore.createContactforUser(uiStore.currentUser, gebruikersnaam);
      setMessage(`${gebruikersnaam} is succesvol toegevoegd`)
    } catch (error) {
      console.log(error);
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
        <p className={style.message}>{message}</p>
      </div>
    </>
  );
};

export default AddUser;
