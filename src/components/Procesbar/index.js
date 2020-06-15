import React, { useState } from "react";
import style from "./Procesbar.module.css";
import { ROUTES } from "../../consts/index";


const Qr = () => {
  return (
    <div className={style.procesbar}>

      <div className={style.procesbar_lijn1}>
        <div className={style.procesbar__item}>
          <p className={style.item__number}>1</p>
          <p className={style.item__text}>Verhaal</p>
        </div>
      </div>

      <div className={style.procesbar_lijn2}>
        <div className={style.procesbar__item}>
          <p className={style.item__number}>2</p>
          <p className={style.item__text}>land</p>
        </div>
      </div>

      <div className={style.procesbar_lijn3}>
        <div className={style.procesbar__item}>
          <p className={style.item__number}>3</p>
          <p className={style.item__text}>Opname</p>
        </div>
      </div>

      <div className={style.procesbar_lijn4}>
        <div className={style.procesbar__item}>
          <p className={style.item__number}>4</p>
          <p className={style.item__text}>Souvenir</p>
        </div>
      </div>

      <div className={style.procesbar__item}>
        <p className={style.item__number}>5</p>
        <p className={style.item__text}>Gegevens</p>
      </div>

    </div>

  );

}

export default Qr;

