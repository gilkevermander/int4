import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import AppHeader from "../AppHeader/index";
import style from "./AddUser.module.css";
import { ROUTES } from "../../consts";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [message, setMessage] = useState("");
  // const [messageFalse, setMessageFalse] = useState("");
  const { uiStore, userStore } = useStore();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (gebruikersnaam !== "") {
      try {
        await userStore.createContactforUser(uiStore.currentUser, gebruikersnaam);
        // setMessage(`${gebruikersnaam} is succesvol toegevoegd`)
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
    <>
      <div className={style.container}>
        <AppHeader title={"Add contact"} prevStep={ROUTES.chat} />
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
        {/* {message === `${gebruikersnaam} bestaat niet` || (message === "Geef een gebruikersnaam op." && gebruikersnaam === "") ? <p className={style.messageFalse}>{message}</p> : <p className={style.message}></p>} */}
        {/* {gebruikersnaam === "" ||  message === `${gebruikersnaam} bestaat niet` ? <p className={style.messageFalse}>{message}</p> : <p className={style.messageFalse}></p> } */}
        {/* <p className={message === `${gebruikersnaam} is succesvol toegevoegd` ? style.message : style.messageFalse} >{message}</p> */}

        {gebruikersnaam === "" || message=== `${gebruikersnaam} bestaat niet` ? <p className={style.messageFalse}>{message}</p> : <p className={style.messageFalse}></p> }
      </div>
    </>
  );
};

export default AddUser;
