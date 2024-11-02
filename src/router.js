import React from "react";
import {HashRouter, BrowserRouter,Route,Redirect,Switch,Link,NavLink} from "react-router-dom";
import Home from "./pages/home";
import I from "./pages/whoami"
import Music   from "./pages/music";
import Done from "./pages/done";
import To_do from "./pages/to_do";
import Doing from "./pages/doing";
import Sucai from "./pages/sucai";

const Router = () => (
    <BrowserRouter>
        <Route exact strict path="/home" name="home" component={Home}></Route>
        <Route exact path="/whoami" name="whoami" component={I}></Route>
        <Route exact path="/music" name="music" component={Music}></Route>
        <Route exact path="/doing" name="doing" component={Doing}></Route>
        <Route exact path="/to_do" name="to_do" component={To_do}></Route>
        <Route exact path="/done" name="done" component={Done}></Route>
            <Route exact path="/sucai" name="sucai" component={Sucai}></Route>
    </BrowserRouter>
);
export default Router;