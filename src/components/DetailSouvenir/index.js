import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { useObserver } from "mobx-react-lite";
import ContentHeader from "../ContentHeader/ContentHeader";

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
      console.log('haha')
      try {
        console.log('hihi')
        //const souvenir = await souvenirStore.loadSouvenir(id); //resolveLand
        const souvenir = await landStore.loadSouvenirFromUrl(id, landId);
        if (!souvenir || souvenir === undefined) {
          setState(STATE_DOES_NOT_EXIST);
          console.log('geen souvenir gevonden');
          return;
        }
        setSouvenir(souvenir);
        const user = userStore.resolveUser(souvenir.souvenirs[0].userId)
        setUser(user);
        // setState(STATE_LOADING_MORE_DETAILS);
        // //await souvenirStore.loadLandVerhalen(id); //hier blijft hij op wachten maar er komt niets
        setState(STATE_FULLY_LOADED);
        //console.log(souvenir.verhalen);
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
      <>
        <ContentHeader title={"Luister naar de herinnering"} />
        <audio src={souvenir.souvenirs[0].video} controls loop />
        <p>Reisverhaal naar {souvenir.title}</p>
        {/* <p>land:{souvenir.land.title}</p> */}
        {/* <p>{user.gebruikersnaam}</p> */}
        <p>gebruikersnaam</p>

      </>
    );
  });
};

export default DetailSouvenir;
