import React, { useState } from 'react';
import Opnemen from '../Opnemen/index';
import Record from '../Record/index';
import Souvenir from '../Souvenir/index';
import Pimp from '../Pimp/index';
import Keuze from '../Keuze/index';
import Land from '../Land/index';
import Ontvanger from '../Ontvanger/index';
import Gegevens from '../Gegevens/index';
import { useStore } from "../../hooks/useStore.js";

const Manier = () => {

  const [land, setLand] = useState("");
  const [selectedoption, setSelectedOption] = useState("");
  const [step, setStep] = useState(1);
  const [souvenir, setSouvenir] = useState("");
  const [keuze, setKeuze] = useState("");

  const { landStore } = useStore();

  const nextStep = () => {
    setStep(step + 1);
  }

  const prevStep = () => {
    setStep(step - 1);
  }

  const prevprevStep = () => {
    setStep(step - 2);
  }

  const overStep = () => {
    setStep(step + 2);
  }

  const values = { land, selectedoption, souvenir, keuze };
  switch (step) {
    case 1:
      return <Opnemen
        nextStep={nextStep}
        values={values}
        setSelectedOption={setSelectedOption}
      />
    case 2:
      return <Land
        nextStep={nextStep}
        prevStep={prevStep}
        setLand={setLand}
        values={values}
        landStore={landStore}
      />
    case 3:
      return <Record
        values={values}
        nextStep={nextStep}
        prevStep={prevStep}
      />

    case 4:
      return <Souvenir
        values={values}
        setSouvenir={setSouvenir}
        nextStep={nextStep}
        prevStep={prevStep}
      />

    case 5:
      return <Keuze
        values={values}
        nextStep={nextStep}
        prevStep={prevStep}
        setKeuze = {setKeuze}
        overStep= {overStep}
      />

      case 6:
      return <Pimp
        values={values}
        nextStep={nextStep}
        prevStep={prevStep}
      />

    case 7:
      return <Gegevens
        values={values}
        nextStep={nextStep}
        prevStep={prevStep}
        prevprevStep={prevprevStep}

      />

      case 8:
      return <Ontvanger
        values={values}
        nextStep={nextStep}
        prevStep={prevStep}
      />

    default:



  }
}

export default Manier;