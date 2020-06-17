import React, { useState } from 'react';

import TextInputGroup from "../TextInputGroup";
import style from "./Gegevens.module.css";
import { useStore } from "../../hooks/useStore";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";


const Gegevens = ({ nextStep, values, prevStep, prevprevStep }) => {

  // const [errorVoor, setErrorVoor] = useState("");
  // const [errorAchter, setErrorAchter] = useState("");
  // const [errorGebruiker, setErrorGebruiker] = useState("");
  // const [errorEmail, setErrorEmail] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordAgain, setPassWordAgain] = useState("");

  const { uiStore } = useStore();
  const history = useHistory();


  // const saveAndContinue = (e) => {
  //   e.preventDefault();
  //   //let formIsValid = true
  //   // if (!values.voornaam) {
  //   //   //formIsValid = false;
  //   //   setErrorVoor("vul een voornaam in")
  //   // } 
  //   // if (!values.achternaam) {
  //   //   //formIsValid = false;
  //   //   setErrorAchter("vul een achternaam in")
  //   // } 
  //   // if (!values.gebruikersnaam) {
  //   //   //formIsValid = false;
  //   //   setErrorGebruiker("vul een gebruikersnaam in")
  //   // } 
  //   // if (!values.email) {
  //   //   //formIsValid = false;
  //   //   setErrorEmail("vul een E-mail in")
  //   // } 

  //   // else {
  //     nextStep();
  //   // }
  // }

  const back = (e) => {
    e.preventDefault();
    prevStep();

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.password === values.passwordAgain) {
      try {
        await uiStore.registerUser({ voornaam, achternaam, gebruikersnaam, email, password });
        nextStep();
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(values);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <button onClick={back} className={style.back}><p className={style.back__text}>&lt;</p></button>
        <div className={style.procesbar}>

          <div className={style.procesbar_lijn1}>
            <div className={style.procesbar__item}>
              <p className={style.item__number}>1</p>
              <p className={style.item__text}>Verhaal</p>
            </div>
          </div>

          <div className={style.procesbar_lijn2}>
            <div className={style.procesbar__item}>
              <p className={style.item__number}>2</p>
              <p className={style.item__text}>land</p>
            </div>
          </div>

          <div className={style.procesbar_lijn3}>
            <div className={style.procesbar__item}>
              <p className={style.item__number}>3</p>
              <p className={style.item__text}>Opname</p>
            </div>
          </div>

          <div className={style.procesbar_lijn4}>
            <div className={style.procesbar__item1}>
              <p className={style.item__number}>4</p>
              <p className={style.item__text}>Souvenir</p>
            </div>
          </div>

          <div className={style.procesbar__item}>
            <p className={style.item__number}>5</p>
            <p className={style.item__text}>Gegevens</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.vraag}>Geef <span className={style.vraag__bold}> jouw </span> gegevens in</h1>
        <div className={style.grid}>
          <div className={style.wrapper}>
            <div className={style.input__wrapper}>
              <label>Voornaam</label>
              <TextInputGroup
                label="voornaam"
                name="voornaam"
                type="voornaam"
                placeholder="Kabien"
                value={voornaam}
                onChange={(e) => setVoornaam(e.currentTarget.value)}
                className={style.input}
              />
            </div>
            <div className={style.input__wrapper}>
              <label>Gebruikersnaam</label>
              <TextInputGroup
                  placeholder='Gebruikersnaam'
                  onChange={e => setGebruikersnaam(e.currentTarget.value)}
                  defaultValue={values.gebruikersnaam}
                  required
                  placeholder="kabien_kortrijk"
                  className={style.input}
                />
            </div>
            <div className={style.input__wrapper}>
              <label>Wachtwoord</label>
              <TextInputGroup
                label="Password"
                type="password"
                name="Password"
                placeholder="Fill in your password."
                value={password}
                onChange={(e) => setPassWord(e.currentTarget.value)}
                className={style.input}
              />
            </div>
          </div>
          <div className={style.wrapper}>
            <div className={style.input__wrapper}>
              <label>Achternaam</label>
              <TextInputGroup
                  placeholder='Achternaam'
                  onChange={e => setAchternaam(e.currentTarget.value)}
                  defaultValue={values.achternaam}
                  required
                  className={style.input}
                />
            </div>
            <div className={style.input__wrapper}>
              <label>E-mail</label>
              <TextInputGroup
                  placeholder='kabien@kortrijk.be'
                  onChange={e => setEmail(e.currentTarget.value)}
                  defaultValue={values.email}
                  type="email"
                  required
                  className={style.input}
                />
            </div>
            <div className={style.input__wrapper}>
              <label>Herhaal wachtwoord</label>
              <TextInputGroup
                label="Passwordagain"
                type="password"
                name="Passwordagain"
                placeholder="Fill in your password again."
                value={passwordAgain}
                onChange={(e) => setPassWordAgain(e.currentTarget.value)}
                className={style.input}
              />
            </div>
          </div>
        </div>

        <button onClick={handleSubmit} className={values.keuze === "" ? style.next : style.next__active}><p className={style.next__text}>Volgende</p> </button>
        {/* <input type="submit" value="Volgende" className={values.keuze === "" ? style.next : style.next__active} /> */}
      </form>
    </div>
  )
}

export default Gegevens;