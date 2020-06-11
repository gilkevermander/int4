import React from "react";
import { Button } from 'semantic-ui-react';
import Webcam from "react-webcam";
import paris from "./paris.jpeg"

import style from "./Pimp.module.css";

const Pimp = ({nextStep, values, prevStep}) => {

  const saveAndContinue = (e) => {
    e.preventDefault();
    nextStep();
  }

  const back = (e) => {
    e.preventDefault();
    prevStep();
  }

  console.log(values);

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
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
  );
};

export default Pimp;