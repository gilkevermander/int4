import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
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

  const { uiStore, landStore, souvenirStore } = useStore();


  const saveAndContinue = (e) => {
    e.preventDefault();
    nextStep();
  }

  const back = (e) => {
    e.preventDefault();
    prevStep();
  }

  let souvenir = values.souvenir
  let delen = values.delen

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //foto op souvenir
      //filmpje of audio
      const land = await landStore.resolveLandId(values.land);
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
        landId: land.id
      });
      item.create();
      nextStep();
    } catch (error) {
      console.log(error);
    }
  };

console.log(values);

return (
  <>
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
        <div className={style.procesbar__item}>
          <p className={style.item__number}>4</p>
          <p className={style.item__text}>Souvenir</p>
        </div>
      </div>

      <div className={style.procesbar__item1}>
        <p className={style.item__number}>5</p>
        <p className={style.item__text}>Gegevens</p>
      </div>
    </div>
  <form onSubmit={handleSubmit} className={style.form}>
    <h1 className="ui centered">Geef jouw gegevens in</h1>
    <TextInputGroup
      label="naam"
      name="naam"
      type="naam"
      placeholder="vul zijn/haar naam in"
      value={naam}
      onChange={(e) => setNaam(e.currentTarget.value)}
    />
    <TextInputGroup
      label="straat"
      name="straat"
      type="straat"
      placeholder="vul zijn/haar straat in"
      value={straat}
      onChange={(e) => setStraat(e.currentTarget.value)}
    />
    <TextInputGroup
      label="nr"
      type="nr"
      name="nr"
      placeholder="vul zijn/haar nr in"
      value={nr}
      onChange={(e) => setNr(e.currentTarget.value)}
    />
    <TextInputGroup
      label="postcode"
      type="postcode"
      name="postcode"
      placeholder="vul zijn/haar postcode in"
      value={postcode}
      onChange={(e) => setPostcode(e.currentTarget.value)}
    />
    <TextInputGroup
      label="Stad"
      type="stad"
      name="stad"
      placeholder="vul zijn/haar stad in"
      value={stad}
      onChange={(e) => setStad(e.currentTarget.value)}
    />
    <input type="submit" value="Register" className={style.button} />
    <Button onClick={back}>Back</Button>
    <Button onClick={saveAndContinue}>Save And Continue </Button>
  </form>
  </>
)
}

export default Ontvanger;