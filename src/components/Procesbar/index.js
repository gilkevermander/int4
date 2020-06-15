import React, { useState } from "react";
import style from "./Procesbar.module.css";


const Qr = () => {
  return (
    <div className={style.procesbar}>
      <div>
        <p>1</p>
        <p>Verhaal</p>
      </div>
      <div>
        <p>2</p>
        <p>land</p>
      </div>
      <div>
        <p>3</p>
        <p>Opname</p>
      </div>
      <div>
        <p>4</p>
        <p>Souvenir</p>
      </div>
      <div>
        <p>5</p>
        <p>Gegevens</p>
      </div>
    </div>

  );

}

export default Qr;

