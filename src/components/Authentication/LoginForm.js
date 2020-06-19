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
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uiStore.login(email, password);
      history.push(ROUTES.home);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>

        <div className={style.form__wrapper}>
          <h2 className={style.form__titel}>E-mail</h2>
          <TextInputGroupApp
            className={style.form__input}
            label="Email"
            name="email"
            type="email"
            placeholder="Fill in your email."
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className={style.form__wrapper}>
          <h2 className={style.form__titel}>Wachtwoord (min 6 karakters)</h2>
          <TextInputGroupApp
            label="Password"
            type="password"
            name="Password"
            placeholder="Fill in your password."
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <p className={style.form__info}>Log in om jouw herinnering te<br / > beluisteren</p>
        <div className={style.form__button}>
          <input type="submit" value="Aanmelden" className={style.button} />
          <p className={style.form__vergeten}>Wachtwoord vergeten?</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
