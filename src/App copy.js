import React from "react";
import Qr from "./components/Qr/index";
import Kaart from "./components/Kaart/index";
import Start from "./components/Start/index";
import Manier from "./components/Manier/index";
import DetailSouvenir from "./components/DetailSouvenir/index";
import Camera from "./components/Camera/index";
import { Route, Switch } from "react-router-dom";
import DetailLand from "./components/DetailLand";
import { ROUTES } from "./consts/index";
import { Link } from "react-router-dom";
//import './validate';
import Procesbar from "./components/Procesbar";
import style from "./index.css";


function App() {
  return (
    <div>
      {/* <header>
          <Procesbar />
      </header> */}

      <main>
        <Switch>
          <Route path={ROUTES.manier}>
            <Manier />
          </Route>
          <Route path={ROUTES.detailSouvenir.path}>
            <DetailSouvenir />
          </Route>
          <Route path={ROUTES.detailLand.path}>
            <DetailLand />
          </Route>
          <Route path={ROUTES.camera}>
            <Camera />
          </Route>
          <Route path={ROUTES.qr}>
            <Qr />
          </Route>
          <Route exact strict path={ROUTES.home}>
            <Start />
          </Route>
          <Route path={ROUTES.kaart}>
            <Kaart />
          </Route>


        </Switch>
      </main>
    </div>
  );
}

export default App;
