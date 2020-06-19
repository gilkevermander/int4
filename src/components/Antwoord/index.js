import React from "react";
import InfoHeader from "../InfoHeader/InfoHeader";
import style from "./Antwoord.module.css"

const Antwoord = ({antwoord}) => {


  
  return (
    <section className={style.container}>
      <InfoHeader title={"quiz"} />
      
      <p>{antwoord}</p>
      
    </section>
  );
};

export default Antwoord;