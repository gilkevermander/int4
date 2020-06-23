import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import AppHeader from "../AppHeader/index";
import style from "./AddUser.module.css";
import { ROUTES } from "../../consts";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [message, setMessage] = useState("");
  const { uiStore, userStore } = useStore();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (gebruikersnaam !== "") {
      try {
        await userStore.createContactforUser(uiStore.currentUser, gebruikersnaam);
        history.push(ROUTES.chat)
      } catch (error) {
        console.log(error);
        setMessage(`${gebruikersnaam} bestaat niet`)
      }
    } else {
      setMessage("Geef een gebruikersnaam op.")
    }
  };

  return (
      <div className={style.container}>
        <AppHeader title={"Voeg een contact toe"} prevStep={ROUTES.chat} />
        <h4 className= {style.hidden}>Gebruikersnaam invullen</h4>
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
          <h4 className= {style.hidden}>Voeg toe</h4>
          <input type="submit" value="+" className={style.button} />
        </form>
        {gebruikersnaam === "" || message=== `${gebruikersnaam} bestaat niet` ? <p className={style.messageFalse}>{message}</p> : <p className={style.messageFalse}></p> }
      </div>
  );
};

export default AddUser;
