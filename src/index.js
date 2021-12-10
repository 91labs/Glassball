/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./styles/style.scss"

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import DummyPage from "views/examples/DummyPage";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Login from "views/examples/Login.js";
import Register from "views/examples/Register.js";
import AuthNavbar from "./components/Navbars/AuthNavbar";
import AuthFooter from "components/Footers/AuthFooter.js";
import Quiz from "views/examples/Quiz.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
      <Route path="/quiz" render={(props) => <Quiz {...props} />} />
      <Route path="/" render={(props) => <DummyPage />}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
