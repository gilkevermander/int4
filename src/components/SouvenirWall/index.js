import React, { useState } from "react";

import style from "./SouvenirWall.module.css";
import ContentHeader from "../ContentHeader/ContentHeader";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/index";
import QrReader from 'react-qr-reader'
import { useHistory } from "react-router-dom";
import NavBarSouvenir from "../NavBarSouvenir/index";


const SouvenirWall = () => {

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
      <ContentHeader title={"SouvenirWall"} />
      <section className={style.container}>
        
        <QrReader
          className={style.scannen}
          delay={300}
          onError={handleError}
          onScan={handleScan}
          mirrored={true}
        />
      </section>
      <NavBarSouvenir />
    </>
  );
};

export default SouvenirWall;