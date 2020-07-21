import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Routes from "./Routes";
import Footer from "../components/template/Footer";

export default (props) => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);

// utilizando o BrowserRouter no lugar do HashRouter, pode acontecer de não te o redirecionamento automático dos links
// será preciso configurar o servidor (apache ou nginx)
// o BrowserRouter não coloca o # na url