import React from "react";
import { Form, Button } from 'semantic-ui-react';

import style from "./Souvenir.module.css";

const Souvenir = ({ nextStep, values, setSouvenir, prevStep }) => {

  const saveAndContinue = (e) => {
    e.preventDefault();
    nextStep();
  }

  const back = (e) => {
    e.preventDefault();
    prevStep();
  }

  console.log(values);
  
  return (
    <section className={style.container}>
      <h2 className={style.message}>Souvenir</h2>
      <Form color='blue' >
        <h1 className="ui centered">Enter Personal Details</h1>
        <Form.Field>
          <select name="land" id="land" onChange={e => setSouvenir(e.currentTarget.value)}>
            <option key="sleutelhanger" id="sleutelhanger" name="land" value="sleutelhanger" >sleutelhanger</option>
            <option key="magneet" id="magneet" name="land" value="magneet" >magneet</option>
            <option key="sticker" id="sticker" name="land" value="sticker" >sticker</option>
          </select>
        </Form.Field>
        <Button onClick={back}>Back</Button>
        <Button onClick={saveAndContinue}>Save And Continue </Button>
      </Form>
    </section>
  );
};

export default Souvenir;