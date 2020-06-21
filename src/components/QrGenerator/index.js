import React, { useState } from "react";
import style from "./QrGenerator.module.css";
import AppHeader from "../AppHeader";
import { ROUTES } from "../../consts";
import QRCode from "react-qr-code";
import TextInputGroup from "../TextInputGroup";

const QrGenerator = () => {

  const [text, setText] = useState("/detailSouvenir/");

  return (

    <section className={style.container}>
      <AppHeader title={"Generate QR-codes"} prevStep={ROUTES.home} />
      <div className={style.qrgen}>
        <QRCode value={text}  />
        <p className={style.temp}><span className={style.bold}>Template:</span> /detailSouvenir/*landId*/*souvenirId* </p>
      </div>
      <form className={style.form}>
        <TextInputGroup
          label="text"
          name="text"
          type="text"
          placeholder="Fill in your text."
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <input type="submit" value="genereer qr code" className={style.hidden} />
      </form>
    </section>


  );

}

export default QrGenerator;

