import React from "react";
import InfoHeader from "../InfoHeader/InfoHeader";

const Antwoord = ({antwoord}) => {


  
  return (
    <section >
      <InfoHeader title={"quiz"} />
      
      <p>{antwoord}</p>
      
    </section>
  );
};

export default Antwoord;