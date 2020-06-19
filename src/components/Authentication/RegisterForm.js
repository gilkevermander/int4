import React, { useState } from "react";
import style from "./Authentication.module.css";
import TextInputGroupApp from "../TextInputGroupApp";
import { useStore } from "../../hooks/useStore";

import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordAgain, setPassWordAgain] = useState("");
  const [error, setError] = useState("");

  const { uiStore } = useStore();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === passwordAgain) {
      try {
        console.log('works yes')
        await uiStore.register({ voornaam, achternaam, email, password, gebruikersnaam });
        history.push(ROUTES.home);
      } catch (error) {
        console.log(error);
        console.log(error.message);
        setError(error.message);
      }
    }
  };

  return (
    <div className={style.container}>
      {error === "The email address is already in use by another account." ? <p></p> : <p></p>}
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.form__wrapper}>
          <h2 className={style.form__titel}>Voornaam</h2>
          <TextInputGroupApp
            className={style.form__input}
            label="Voornaam"
            name="voornaam"
            type="voornaam"
            placeholder="Vul je voornaam in."
            value={voornaam}
            onChange={(e) => setVoornaam(e.currentTarget.value)}
          />
        </div>
        <div className={style.form__wrapper}>
          <h2 className={style.form__titel}>Achternaam</h2>
          <TextInputGroupApp
            className={style.form__input}
            label="Achternaam"
            name="achternaam"
            type="achternaam"
            placeholder="Vul je achternaam in."
            value={achternaam}
            onChange={(e) => setAchternaam(e.currentTarget.value)}
          />
        </div>
        <div className={style.form__wrapper}>
          <h2 className={style.form__titel}>Gebruikersnaam</h2>
          <TextInputGroupApp
            className={style.form__input}
            label="Gebruikersnaam"
            name="gebruikersnaam"
            type="gebruikersnaam"
            placeholder="Vul je gebruikersnaam in."
            value={gebruikersnaam}
            onChange={(e) => setGebruikersnaam(e.currentTarget.value)}
          />
        </div>
        <div className={style.form__wrapper}>
          <h2 className={style.form__titel}>E-mail</h2>
          <TextInputGroupApp
            className={style.form__input}
            label="Email"
            name="email"
            type="email"
            placeholder="Vul je e-mail in."
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className={style.form__wrapper}>
          <h2 className={style.form__titel}>Wachtwoord</h2>
          <TextInputGroupApp
            className={style.form__input}
            label="Password"
            type="password"
            name="Password"
            placeholder="Vul je wachtwoord in."
            value={password}
            onChange={(e) => setPassWord(e.currentTarget.value)}
          />
        </div>
        <div className={style.form__wrapper}>
          <h2 className={style.form__titel}>Herhaal wachtwoord</h2>
          <TextInputGroupApp
            className={style.form__input}
            label="Passwordagain"
            type="password"
            name="Passwordagain"
            placeholder="Vul je wachtwoord opnieuw in."
            value={passwordAgain}
            onChange={(e) => setPassWordAgain(e.currentTarget.value)}
          />
        </div>
        <input type="submit" value="Register" className={style.button} />
      </form>
    </div>
  );
};

export default RegisterForm;
