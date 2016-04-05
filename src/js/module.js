import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, indexRoute, hashHistory } from "react-router";



import InfoUi from "./pages/infoUi"
import LayOut from "./pages/Layout";
import mainBody from "./pages/mainBody";
import navigation from "./pages/nav";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" Component={LayOut}>
    <indexRoute Component={mainBody}></indexRoute>
    <route path="infoUi" Component={infoUi}></route>
    </Route>
  </Router>,
  app);
