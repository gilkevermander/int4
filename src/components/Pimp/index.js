import React, { useState } from "react";
import { Button } from 'semantic-ui-react';
import Webcam from "react-webcam";
import paris from "./paris.jpeg"

import style from "./Pimp.module.css";

const Pimp = ({ nextStep, values, prevStep }) => {

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [error, setError] = useState("");

  const saveAndContinue = (e) => {
    e.preventDefault()
    if (imgSrc === null) {
      setError("Neem eerst een foto!")
    } else {
      nextStep()
    }
  }

  const back = (e) => {
    e.preventDefault();
    prevStep();
  }

  console.log(values);



  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Button onClick={back} className={style.back}><p className={style.back__text}>&lt;</p></Button>
        <div className={style.procesbar}>

          <div className={style.procesbar_lijn1}>
            <div className={style.procesbar__item}>
              <p className={style.item__number}>1</p>
              <p className={style.item__text}>Verhaal</p>
            </div>
          </div>

          <div className={style.procesbar_lijn2}>
            <div className={style.procesbar__item1}>
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
      </div>
      <p>u koos voor een: {values.souvenir}</p>
      <p>{error}</p>
      <section className={style.container}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={700}
          radius={4}
          className={style.mask}
          mirrored={true}
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            src={imgSrc} alt="foto" className={style.img}
          />
        )}
        <img alt="tourist" className={style.paris} src={paris}></img>
        <Button onClick={back}>Back</Button>
        <Button onClick={saveAndContinue}>Save And Continue </Button>
      </section>
    </div>
  );
};

export default Pimp;