import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import DetailLand from "../DetailLand/index";
import { useObserver } from "mobx-react-lite";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./SideBar.module.css";

const SideBar = () => {

  return useObserver(() => (
    <section className={style.container}>
      <Switch>
        <Route path={ROUTES.detailLand.path}>
          <DetailLand />
        </Route>
      </Switch>
      <NavBar />
    </section>
  ));
};

export default SideBar;
