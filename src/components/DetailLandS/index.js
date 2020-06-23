import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { useObserver } from "mobx-react-lite";
import AppHeader from "../AppHeader/index";
import style from "./DetailLandS.module.css";
import { ROUTES } from "../../consts";

import Empty from "../Empty/Empty";

const DetailLandS = () => {
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
      console.log('haha')
      try {
        console.log('hihi')
        const souvenir = await landStore.loadSouvenirFromUrl(id, landId);
        console.log('hoi');
        console.log(id);
        if (!souvenir || souvenir === undefined) {
          setState(STATE_DOES_NOT_EXIST);
          console.log('geen souvenir gevonden');
          return;
        }
        setSouvenir(souvenir);
        console.log(souvenir);
        console.log('yes')
        const user = userStore.resolveUser(souvenir.souvenirs[0].userId)
        console.log(user);
        console.log(souvenir.souvenirs[0].userId);
        console.log(souvenir.delen)
        setUser(user);
        setState(STATE_FULLY_LOADED);
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
    return (
        <div className={style.container}>
          <AppHeader title={"Luister naar de herinnering"} prevStep={ROUTES.kaart} />
          <div className={style.detail}>
            <img alt="kaart" src="/assets/img/kaart.png" width="272" className={style.image} />
            <p className={style.verhaal}>Reisverhaal naar {souvenir.title}</p>
            <p className={style.reiziger}>Onbekende reiziger</p>
            <audio src={souvenir.video} controls loop />
          </div>
        </div>
    );
  });
};

export default DetailLandS;
