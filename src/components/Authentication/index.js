import React from "react";
import Content from "../Content/Content";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { ROUTES } from "../../consts";
import LoginForm from "./LoginForm";
import Start from "../Start/index";
import Quiz from "../Quiz/index";
import Manier from "../Manier/index";
import SouvenirWall from "../SouvenirWall/index";
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
      <Switch>
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
                  <span className={[style.form__info__bold, style.form__info].join(" ")}>Nog geen account? Registreer</span>
                </NavLink>
              </div>
            )}
        </Route>
        <Route exact path={ROUTES.register}>
          {uiStore.currentUser ? (
            <Redirect to={ROUTES.home} />
          ) : (
              <div className={style.wrapper}>
                <AppHeader title={"Registreren"} />
                <RegisterForm />
                <NavLink to={ROUTES.login} className={style.textlink}>
                  {/* <span className={[style.form__info__bold, style.form__info].join(" ")}>Al een account? Login</span> */}
                </NavLink>
              </div>
            )}
        </Route>
        <Route path={ROUTES.home}>
          {uiStore.currentUser ? (
            <>
              <Content />
            </>
          ) : (
              <Redirect to={ROUTES.login} />
            )}
        </Route>
      </Switch>
    </>
  ));
};

export default Authentication;
