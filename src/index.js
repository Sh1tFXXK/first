import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import I from './pages/whoami';
import Music from "./pages/music";
import Done from "./pages/done";
import To_do from "./pages/to_do";
import Doing from "./pages/doing";
import {Sucai} from "./pages/sucai";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path={"/whoami"} element={<I/>} />
            <Route path={"/music"} element={<Music/>} />
            <Route  path={"/doing"} element={<Doing/>} />
            <Route  path={"/to_do"} element={<To_do/>} />
            <Route  path={"/done"} element={<Done/>} />
            <Route path={"/sucai"} element={<Sucai/>} />
        </Routes>
    </Router>,
    document.getElementById('root')
);