import React, { useState } from "react";
import style from "./Authentication.module.css";
import TextInputGroupApp from "../TextInputGroupApp";
import { useStore } from "../../hooks/useStore";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";

const LoginForm = () => {
  const { uiStore } = useStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uiStore.login(email, password);
      history.push(ROUTES.home);
    } catch (error) {
      console.log(error);
      if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
        setError1("Dit email bestaat nog niet")
      } else if (error.message === "The password is invalid or the user does not have a password.") {
        setError2("Verkeerd wachtwoord")
      } else if (error.message === "The email address is badly formatted.") {
        setError1("Geef een correct email in")
      }

    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>

        <div className={style.form__wrapper}>
          <div className={style.form__validatie}>
            <h2 className={style.form__titel}>E-mail</h2>
            <p className={style.form__error}>{error1}</p>
          </div>
          <TextInputGroupApp
            className={style.form__input}
            label="Email"
            name="email"
            type="email"
            placeholder="kabien@kortrijk.be"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className={style.form__wrapper}>
          <div className={style.form__validatie}>
            <h2 className={style.form__titel}>Wachtwoord</h2>
            <p className={style.form__error}>{error2}</p>
          </div>
          <TextInputGroupApp
            label="Password"
            type="password"
            name="Password"
            placeholder="Vul je wachtwoord in"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <p className={style.form__info}>Log in om jouw herinnering te<br /> beluisteren</p>
        <div className={style.form__button}>
          <button  className={style.button} onclick={handleSubmit}>Aanmelden</button>
          <p className={style.form__vergeten}>Wachtwoord vergeten?</p>
        </div>

      </form>
    </>
  );
};

export default LoginForm;
