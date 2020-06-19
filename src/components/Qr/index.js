import React, { useState } from "react";
import QRCode from "react-qr-code";
import TextInputGroup from "../TextInputGroup";
import style from "./Qr.module.css";
import QrReader from 'react-qr-reader'
import { useHistory } from "react-router-dom";
import AppHeader from "../AppHeader";
import { ROUTES } from "../../consts";

const Qr = () => {

  const [text, setText] = useState("");
  const [scan, setScan] = useState("");
  const history = useHistory();

  const handleScan = data => {
    if (data) {
      setScan(data)
      console.log(data);
      history.push(data);
    }
  }
  const handleError = err => {
    console.error(err)
  }

  return (
    <>
    {/* commentaar */}
      {/* <QRCode value={text} />
      <form className={style.form}>
        <TextInputGroup
          label="text"
          name="text"
          type="text"
          placeholder="Fill in your text."
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
      </form> */}
      {/* commentaar */}
      <div className={style.container}>
        <AppHeader title={"Scan de QR-code"} prevStep={ROUTES.home} />

        <div className={style.container__scan}>
          <QrReader
            className={style.scannen}
            delay={300}
            onError={handleError}
            onScan={handleScan}
            mirrored={true}
          />
          <p>{scan}</p>
        </div>
      </div>
    </>

  );

}

export default Qr;

