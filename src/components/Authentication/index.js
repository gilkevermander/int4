import React, { useState } from "react";
import Content from "../Content/Content";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { ROUTES } from "../../consts";
import LoginForm from "./LoginForm";
import SouvenirWallDetail from "../SouvenirWallDetail/index";
import Start from "../Start/index";
import Quiz from "../Quiz/index";
import Manier from "../Manier/index";
import SouvenirWall from "../SouvenirWall/index";
import QrGenerator from "../QrGenerator/index";
import SideBar from "../SideBar/index";
import style from "./Authentication.module.css";
import RegisterForm from "./RegisterForm";
import { useStore } from "../../hooks/useStore";
import { useObserver } from "mobx-react-lite";
import ContentHeader from "../ContentHeader/ContentHeader";
import AppHeader from "../AppHeader"


const Authentication = () => {

  const { uiStore } = useStore();

  return useObserver(() => (
    <>
      <h1 className={style.hidden}>KABIEN</h1>
      <Switch>
        <Route path={ROUTES.qrgenerator}>
          <QrGenerator />
        </Route>
        <Route path={ROUTES.souvenirWallDetail.path}>
          <SouvenirWallDetail />
        </Route>
        <Route exact path={ROUTES.souvenirWall}>
          <SouvenirWall />
        </Route>
        <Route exact path={ROUTES.quiz}>
          <Quiz />
        </Route>
        <Route exact path={ROUTES.manier}>
          <Manier />
        </Route>
        <Route exact path={ROUTES.start}>
          <Start />
        </Route>
        <Route exact path={ROUTES.login}>
          {uiStore.currentUser ? (
            <Redirect to={ROUTES.home} />
          ) : (
              <div className={style.wrapper}>
                <ContentHeader title={"Login"} className={style.title} />
                <LoginForm />
                <NavLink to={ROUTES.register} className={style.textlink}>
                  <h2 className={[style.form__info__bold, style.form__info].join(" ")}>Nog geen account? Registreer</h2>
                </NavLink>
              </div>
            )}
        </Route>
        <Route exact path={ROUTES.register}>
          {uiStore.currentUser ? (
            <Redirect to={ROUTES.home} />
          ) : (
              <div className={style.wrapper}>
                <AppHeader title={"Registreren"} className={style.title} prevStep={ROUTES.login} />
                <RegisterForm />
                <NavLink to={ROUTES.login} className={style.textlink}>
                </NavLink>
              </div>
            )}
        </Route>
        <Route path={ROUTES.home}>
          {uiStore.currentUser ? (
            <div>
              <Content />
              <SideBar />
            </div>
          ) : (
              <Redirect to={ROUTES.login} />
            )}
        </Route>
      </Switch>
    </>
  ));
};

export default Authentication;
