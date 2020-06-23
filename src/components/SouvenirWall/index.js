import React, { useState } from "react";
import style from "./SouvenirWall.module.css";
import ContentHeader from "../ContentHeader/ContentHeader";
import QrReader from 'react-qr-reader'
import { useHistory } from "react-router-dom";
import NavBarSouvenir from "../NavBarSouvenir/index";


const SouvenirWall = () => {

  const history = useHistory();

  const handleScan = data => {
    if (data) {
      console.log(data);
      history.push(data);
    }
  }
  const handleError = err => {
    console.error(err)
  }
  return (
    <section className={style.container}>
      <ContentHeader title={"Souvenir Wall"} />
      <div className={style.container__scan}>
        <h3> <span className={style.hidden}>Camera</span>
          <QrReader
            className={style.scannen}
            delay={300}
            onError={handleError}
            onScan={handleScan}
            mirrored={true}
          />
        </h3>
      </div>
      <NavBarSouvenir />
    </section>
  );
};

export default SouvenirWall;