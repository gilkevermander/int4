import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { useObserver } from "mobx-react-lite";
import ContentHeader from "../ContentHeader/ContentHeader";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/index";
import style from "./DetailSouvenir.module.css"

import Empty from "../Empty/Empty";

const DetailSouvenir = () => {
  const { id } = useParams();
  const { landId } = useParams();
  console.log(id);
  console.log(landId)
  const { souvenirStore, landStore, userStore } = useStore();

  const STATE_LOADING = "loading";
  const STATE_DOES_NOT_EXIST = "doesNotExist";
  const STATE_LOADING_MORE_DETAILS = "loadingMoreDetails";
  const STATE_FULLY_LOADED = "fullyLoaded";

  const [souvenir, setSouvenir] = useState(souvenirStore.resolveSouvenir(id));
  const [user, setUser] = useState("");
  const [state, setState] = useState(
    souvenir ? STATE_LOADING_MORE_DETAILS : STATE_LOADING
  );

  console.log('joepie')

  useEffect(() => {
    const loadSouvenir = async (landId, id) => {
      try {
        //const souvenir = await souvenirStore.loadSouvenir(id); //resolveLand
        const souvenir = await landStore.loadSouvenirFromUrl(id, landId);
        if (!souvenir || souvenir === undefined) {
          setState(STATE_DOES_NOT_EXIST);
          console.log('geen souvenir gevonden');
          return;
        }
        setSouvenir(souvenir);
        const user = userStore.resolveUser(souvenir.souvenirs[0].userId)
        console.log(user);
        setUser(user);
        
        // setState(STATE_LOADING_MORE_DETAILS);
        // //await souvenirStore.loadLandVerhalen(id); //hier blijft hij op wachten maar er komt niets
        setState(STATE_FULLY_LOADED);
        console.log(souvenir);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setState(STATE_DOES_NOT_EXIST);
        }
      }
    };
    loadSouvenir(landId, id);
  }, [id, landId, userStore, landStore, souvenirStore, setSouvenir]);

  console.log(state);
  console.log(souvenir);

  return useObserver(() => {
    if (state === STATE_DOES_NOT_EXIST) {
      console.log(`${souvenir} is niet gevonden`);
      return <Empty message={"Oei, dit souvenir bestaat niet. Probeer het eens opnieuw "} />;

    }
    if (state === STATE_LOADING) {
      console.log(souvenir);
      return <Empty message={"Loading Souvenir"} />;
    }

    if (souvenir.souvenirs[0] === undefined) {
      return (
        <p>Oeps er is iets fout gegaan. Probeer het nog eens opnieuw</p>
      )
    } else {
      return (
        <section className={style.container}>
          <ContentHeader title={"Luister naar de herinnering"} />
          <div className={style.detail}>
          {souvenir.souvenirs[0].video.endsWith(".webm") &&
               <img src="/assets/img/kaart.png" alt="kaart" className={style.img} /> }
            {souvenir.souvenirs[0].video.endsWith(".mkv") || souvenir.souvenirs[0].video.endsWith(".mp4") ?
              <video className={style.video}  poster="/assets/img/kaart.png" src={souvenir.souvenirs[0].video} controls loop /> :  <audio src={souvenir.souvenirs[0].video} controls loop /> }
            <h3 className={style.verhaal} >Reisverhaal naar {souvenir.title}</h3>
            {/* <p>land:{souvenir.land.title}</p> */}
            {/* <p>{user.gebruikersnaam}</p> */}
            {/* <p className={style.reiziger}>Gebruikersnaam</p> */}
            <Link className={style.button} to={ROUTES.chat}>
              <h3 className={style.button__text}>Bedank met een berichtje</h3>
            </Link>
            <Link className={style.button2} to={ROUTES.kaart}>
              <h3 className={style.button__text}>Beluister andere verhalen</h3>
            </Link>
          </div>
        </section>
      );
    }
  });
};

export default DetailSouvenir;
