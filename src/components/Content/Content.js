import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import Kaart from "../Kaart/Kaart";
import Manier from "../Manier/index";
import Qr from "../Qr/index";
import Locatie from "../Locatie/Locatie";
import DetailSouvenir from "../DetailSouvenir/index";
import { useObserver } from "mobx-react-lite";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./Content.module.css";

const Content = () => {

  return useObserver(() => (
    <section className={style.container}>
      <Switch>
        <Route path={ROUTES.manier}>
          <Manier />
        </Route>
        <Route path={ROUTES.kaart}>
          <Kaart />
        </Route>
        <Route path={ROUTES.detailSouvenir.path}>
          <DetailSouvenir />
        </Route>
        <Route path={ROUTES.qr}>
          <Qr />
        </Route>
        <Route path={ROUTES.locatie}>
          <Locatie />
        </Route>
        <Route exact strict path={ROUTES.home}>
          <HomePage />
        </Route>
      </Switch>
      <NavBar />
    </section>
  ));
};

export default Content;