import React from "react";

import style from "./Locatie.module.css";
import AppHeader from "../AppHeader";
import Geomap from "../Geomap/Geomap";
import "leaflet/dist/images/marker-shadow.png";
import { ROUTES } from "../../consts";

const Locatie = () => {

  return (
    <>
      <div className={style.container}>
      <script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
      <link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
      <AppHeader title={"Ga naar jouw dichtsbijzijnde kabien"} prevStep={ROUTES.home}/>
      <Geomap className={style.kaart}/>
      </div>
    </>
  );
};

export default Locatie;