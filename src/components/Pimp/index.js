import React, { useState } from "react";
import Webcam from "react-webcam";

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
    console.log(imageSrc);
    console.log(webcamRef);
    // const mediaRecorderRef = new MediaRecorder(webcamRef.current.stream, {
    //   mimeType: "video/webm"
    // });
    // console.log(mediaRecorderRef)
    // console.log(webcamRef.current)
    // const canvas = webcamRef.current.getCanvas()
    // console.log(webcamRef.current.getCanvas());
    // console.log(canvas.toBlob)
    // console.log(canvas.toBlob(webcamRef.current.getCanvas()))
  }, [webcamRef, setImgSrc]);

  return (
    <section >
      <h2 className={style.hidden}>Scherm - Pimp</h2>
      <div className={style.header}>
        <button onClick={back} className={style.back}><p className={style.back__text}>&lt;</p></button>
        <div className={style.procesbar}>
          <h3 className={style.hidden}>Procesbar</h3>
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
            <div className={style.procesbar__item1}>
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
      <h3 className={style.name_souvenir}>U koos voor een: {values.souvenir}</h3>
      {imgSrc === null ? <p className={style.error}>{error}</p> : <p className={style.error}></p>}
      <section className={style.container}>
        <h3 className={style.hidden}>Maak een foto</h3>
        <div className={style.wrapper}>
          <Webcam
            mimeType="image/jpeg"
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={700}
            radius={4}
            className={style.mask}
            mirrored={true}
          />
          <button onClick={capture} className={style.capture}></button>
        </div>
        {imgSrc && (
          <img
            src={imgSrc} alt="foto" className={style.img}
          />
        )}
        <img alt="tourist" className={style.souvenir} src="assets/img/souvenir.jpg" width="400"></img>
        <button onClick={saveAndContinue} className={imgSrc === null ? style.next : style.next__active}><h3 className={style.next__text}>Volgende</h3> </button>
      </section>
    </section>
  );
};

export default Pimp;