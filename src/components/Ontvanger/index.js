import React, { useState } from 'react';
import TextInputGroup from "../TextInputGroup";
import style from "./Ontvanger.module.css";
import Souvenir from "../../models/Souvenir";
import { useStore } from "../../hooks/useStore";

const Ontvanger = ({ nextStep, values, prevStep }) => {

  const [naam, setNaam] = useState("");
  const [straat, setStraat] = useState("");
  const [nr, setNr] = useState("");
  const [postcode, setPostcode] = useState("");
  const [stad, setStad] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  const { uiStore, landStore, souvenirStore } = useStore();


  // const saveAndContinue = (e) => {
  //   e.preventDefault();
  //   nextStep();
  // }

  const back = (e) => {
    e.preventDefault();
    prevStep();
  }

  let souvenir = values.souvenir
  let delen = values.delen

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (naam !== "" && straat !== "" && postcode !== "" && nr !== "" && stad !== "") {
      try {
        //foto op souvenir
        //filmpje of audio
        const land = await landStore.resolveLandId(values.land);
        const video = values.video
        console.log(video);
        console.log('handlesubmit')
        setUserId(uiStore.currentUser.id)
        console.log(userId);
        const item = new Souvenir({
          store: souvenirStore,
          naam,
          straat,
          nr,
          postcode,
          stad,
          souvenir,
          delen,
          userId: uiStore.currentUser.id,
          landId: land.id,
          video
        });
        item.create();
        nextStep();
      } catch (error) {
        console.log(error);
      }
    } else if (naam === "" || straat === "" || postcode === "" || nr === "" || stad === "") {
      setError("Gelieve alle velden in te vullen.")
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
        <h1 className={style.vraag}>Vul de gegevens van de <span className={style.vraag__bold}>ontvanger</span> in</h1>
        <h2 className={style.subtitel}>Naar dit adres wordt jou souvenir opgestuurd!</h2>
        {naam === "" || straat === "" || postcode === "" || nr === "" || stad === "" ? <p className={style.error}>{error} </p> : <p className={style.error}></p>}
        <div className={style.grid}>
          <label className={style.label}>Naam ontvanger</label>
          <TextInputGroup
            label="naam"
            name="naam"
            type="naam"
            placeholder="jhon Doe"
            value={naam}
            onChange={(e) => setNaam(e.currentTarget.value)}

            className={style.input}
          />
          <div className={style.wrapper}>
            <div className={style.wrapper__item}>
              <label className={[style.label, style.wrapper__item__straat, style.wrapper__item]}>Straat</label>
              <TextInputGroup
                label="straat"
                name="straat"
                type="straat"
                placeholder="Kortrijkstraat"
                value={straat}
                onChange={(e) => setStraat(e.currentTarget.value)}
                className={style.input}
              />
            </div>
            <div className={[style.wrapper__item__nummer, style.wrapper__item]}>
              <label className={style.label}>nummer</label>
              <TextInputGroup
                label="nr"
                type="number"
                placeholder="17"
                name="nr"
                value={nr}
                onChange={(e) => setNr(e.currentTarget.value)}
                className={style.input}
              />
            </div>
          </div>
          <div className={style.wrapper}>
            <div className={style.input__postcode}>
              <label className={style.label}>Postcode</label>
              <TextInputGroup
                label="postcode"
                type="number"
                maxLength={4}
                name="postcode"
                placeholder="8500"
                value={postcode}
                onChange={(e) => setPostcode(e.currentTarget.value)}
                className={style.input}
              />
            </div>
            <div className={[style.wrapper__item__gemeente, style.wrapper__item]}>
              <label className={style.label}>Stad/gemeente</label>
              <TextInputGroup
                label="Stad"
                type="stad"
                name="stad"
                placeholder="Kortrijk"
                value={stad}
                onChange={(e) => setStad(e.currentTarget.value)}
                className={style.input}
              />
            </div>
          </div>


          <button onClick={handleSubmit} className={naam === "" || straat === "" || postcode === "" || nr === "" || stad === "" ? style.next : style.next__active}><p className={style.next__text}>Volgende</p> </button>
        </div>
      </form >
    </div >
  )
}

export default Ontvanger;