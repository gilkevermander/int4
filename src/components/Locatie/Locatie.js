import React from "react";

import style from "./Locatie.module.css";
import InfoHeader from "../InfoHeader/InfoHeader";
import Geomap from "../Geomap/Geomap";
import "leaflet/dist/images/marker-shadow.png";

const Locatie = () => {

  return (
    <>
      <div className={style.container}>
      <script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
      <link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
      <InfoHeader title={"Ga naar jouw dichtsbijzijnde kabien"} />
      <Geomap className={style.kaart}/>
      </div>
    </>
  );
};

export default Locatie;