import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import Kaart from "../Kaart/Kaart";
import SouvenirWallDetail from "../SouvenirWallDetail/index";
import Manier from "../Manier/index";
import Qr from "../Qr/index";
import Chat from "../Chat/index";
import AddUser from "../AddUser/AddUser";
import Messages from "../Messages/Messages";
import DetailLandS from "../DetailLandS/index";
import Locatie from "../Locatie/Locatie";
import DetailSouvenir from "../DetailSouvenir/index";
import { useObserver } from "mobx-react-lite";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./Content.module.css";

const Content = () => {

  return useObserver(() => (
    <div className={style.container}>
      <Switch>
        <Route path={ROUTES.addContact}>
          <AddUser />
        </Route>
        <Route path={ROUTES.chat}>
          <Chat />
        </Route>
        <Route path={ROUTES.manier}>
          <Manier />
        </Route>
        <Route path={ROUTES.kaart}>
          <Kaart />
        </Route>
        <Route exact path={ROUTES.kaartD.path}>
          <Kaart />
        </Route>
        <Route path={ROUTES.detailSouvenir.path}>
          <DetailSouvenir />
        </Route>
        <Route path={ROUTES.messages.path}>
          <Messages />
        </Route>
        {/* <Route path={ROUTES.souvenirWallDetail.path}>
          <SouvenirWallDetail />
        </Route> */}
        <Route path={ROUTES.qr}>
          <Qr />
        </Route>
        <Route path={ROUTES.locatie}>
          <Locatie />
        </Route>
        <Route path={ROUTES.detaillandS.path}>
          <DetailLandS />
        </Route>
        <Route exact path={ROUTES.home}>
          <HomePage />
        </Route>
      </Switch>
      <NavBar />
    </div>
  ));
};

export default Content;
