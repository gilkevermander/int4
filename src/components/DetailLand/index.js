import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/index";

import Empty from "../Empty/Empty";
import style from "./DetailLand.module.css";

const DetailLand = () => {
  const { id } = useParams();
  const { landStore } = useStore();

  const STATE_LOADING = "loading";
  const STATE_DOES_NOT_EXIST = "doesNotExist";
  const STATE_LOADING_MORE_DETAILS = "loadingMoreDetails";
  const STATE_FULLY_LOADED = "fullyLoaded";

  const [land, setLand] = useState(landStore.resolveLand(id));
  const [length, setLength] = useState("");
  const [state, setState] = useState(
    land ? STATE_LOADING_MORE_DETAILS : STATE_LOADING
  );

  useEffect(() => {
    const loadLand = async (id) => {
      try {
        const land = await landStore.loadLand(id); //resolveLand
        console.log(land);
        console.log(id);
        if (!land || land === undefined) {
          setState(STATE_DOES_NOT_EXIST);
          console.log('geen land gevonden');
          return;
        }
        setLand(land);
        setState(STATE_LOADING_MORE_DETAILS);
        await landStore.loadLandSouvenirs(id); //hier blijft hij op wachten maar er komt niets
        setState(STATE_FULLY_LOADED);
        console.log(land.souvenirs);
        setLength(land.souvenirs.length)
        console.log(length)
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setState(STATE_DOES_NOT_EXIST);
        }
      }
    };
    loadLand(id);
  }, [id, landStore, setLand]);

  console.log(state);
  //console.log(land.verhalen);

  return useObserver(() => {
    if (state === STATE_DOES_NOT_EXIST) {
      console.log(`${land} is niet gevonden`);
      return <Empty message={"land not found"} />;
    }
    if (state === STATE_LOADING) {
      console.log(land);
      return <Empty message={"Loading land"} />;
    }
    return (
      <>
        <div className={style.container}>
          <section className={style.section}>
            <h3 className={style.subtitle}>{land.title}</h3>
          </section>
          <section>
            <h3 className={style.souvenirs}>{length} gevonden verhalen</h3>
            <ul className={style.souvenirs__list}>
              {land.souvenirs.map(souvenir => (
                souvenir.delen &&
                <Link to={`${ROUTES.detaillandS.to}${land.id}/${souvenir.id}`} key={souvenir.id}>
                  <li key={souvenir.id} className={style.list} >
                    <p className={style.list__text}>Reisverhaal</p>
                  </li>
                </Link>
              ))}
            </ul>

          </section>
        </div>
      </>
    );
  });
};

export default DetailLand;
