import React, { useState } from "react";
import style from "./Qr.module.css";
import QrReader from 'react-qr-reader'
import { useHistory } from "react-router-dom";
import AppHeader from "../AppHeader";
import { ROUTES } from "../../consts";

const Qr = () => {

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

    <section className={style.container}>
      <AppHeader title={"Scan de QR-code"} prevStep={ROUTES.home} />
      <div className={style.container__scan}>

        <h3> <span className={style.hidden}>Camera</span>
          <QrReader
            className={style.scannen}
            delay={300}
            onError={handleError}
            onScan={handleScan}
            mirrored={true}
          />
          <p>{scan}</p>
        </h3>
      </div>
    </section>


  );

}

export default Qr;

