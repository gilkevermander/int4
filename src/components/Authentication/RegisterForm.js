import React, { useState } from "react";
import style from "./Authentication.module.css";
import TextInputGroupApp from "../TextInputGroupApp";
import { useStore } from "../../hooks/useStore";

import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("default");
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordAgain, setPassWordAgain] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");

  const { uiStore } = useStore();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === passwordAgain) {
      try {
        console.log('works yes')
        console.log(voornaam, email, password, gebruikersnaam, achternaam);
        await uiStore.register({ voornaam, email, password, gebruikersnaam, achternaam });
        history.push(ROUTES.home);
      } catch (error) {
        console.log(error);
        console.log(error.message);
        if (error.message === "The email address is already in use by another account.") {
          setError1("Email is al in gebruik")
        } else if (error.message === "Password should be at least 6 characters") {
          setError2("Wachtwoord moet 6 karakters lang zijn")
        }
        else if (error.message === "The email address is badly formatted.") {
          setError1("Geef een correct email in")
        }
      }
    } else if (voornaam === "" || gebruikersnaam === "" || email === "") {
      setError3("Vul dit veld in")
    } else if (password !== passwordAgain || passwordAgain !== password || (password !== "" && voornaam !== "" && gebruikersnaam !== "" && email !== "" && passwordAgain === "")) {
      setError4("Wachtwoorden zijn niet gelijk")
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={[style.form__register, style.form].join(" ")}>
        <div className={style.form__wrapper}>
          <div className={style.form__validatie}>
            <h2 className={style.form__titel}>Naam</h2>
            <p className={style.form__error}>{error3}</p>
          </div>
          <TextInputGroupApp
            className={style.form__input}
            label="Voornaam"
            name="voornaam"
            type="text"
            placeholder="Vul je voornaam in."
            value={voornaam}
            onChange={(e) => setVoornaam(e.currentTarget.value)}
          />
        </div>
        {/* <div className={style.form__wrapper}>
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
        </div> */}
        <div className={style.form__wrapper}>
          <div className={style.form__validatie}>
            <h2 className={style.form__titel}>Gebruikersnaam</h2>
            <p className={style.form__error}>{error3}</p>
          </div>
          <TextInputGroupApp
            className={style.form__input}
            label="Gebruikersnaam"
            name="gebruikersnaam"
            type="text"
            placeholder="Vul je gebruikersnaam in."
            value={gebruikersnaam}
            onChange={(e) => setGebruikersnaam(e.currentTarget.value)}
          />
        </div>
        <div className={style.form__wrapper}>
          <div className={style.form__validatie}>
            <h2 className={style.form__titel}>E-mail</h2>
            <p className={style.form__error}>{error1 ? error1 : error3}</p>
          </div>
          <TextInputGroupApp
            className={style.form__input}
            label="Email"
            name="email"
            type="text"
            placeholder="Vul je e-mail in."
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className={style.form__wrapper}>
          <div className={style.form__validatie}>
            <h2 className={style.form__titel}>Wachtwoord <span className={style.form__titel__info}>(min 6 karakters)</span></h2>
            <p className={style.form__error}>{error2 ? error2 : error3}</p>
          </div>
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
        <div className={style.form__validatie}>
          <h2 className={style.form__titel}>Herhaal wachtwoord</h2>
          <p className={style.form__error}>{error4}</p>
          </div>
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
        <input type="submit" value="Registeer" className={[style.button, style.button__register].join(" ")} />
      </form>
    </div>
  );
};

export default RegisterForm;
