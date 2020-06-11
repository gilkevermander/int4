import React, { useState } from 'react';
import Opnemen from '../Opnemen/index';
import Record from '../Record/index';
import Souvenir from '../Souvenir/index';
import Pimp from '../Pimp/index';
import Land from '../Land/index';
import Gegevens from '../Gegevens/index';
import { useStore } from "../../hooks/useStore.js";

const Manier = () => {

  const [land, setLand] = useState("Albania");
  const [selectedoption, setSelectedOption] = useState("video");
  const [step, setStep] = useState(1);
  const [souvenir, setSouvenir] = useState("sleutelhanger");
  const [voornaam, setVoornaam] = useState("");

  const { landStore } = useStore();

  const nextStep = () => {
    setStep(step + 1);
  }

  const prevStep = () => {
    setStep(step - 1);
  }

  const values = { land, selectedoption, souvenir };
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
      return <Pimp
        values={values}
        nextStep={nextStep}
        prevStep={prevStep}
      />

    case 6:
      return <Gegevens
        values={values}
        nextStep={nextStep}
        prevStep={prevStep}
      />

    default:



  }
}

export default Manier;