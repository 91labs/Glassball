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
import "./styles/API.scss"
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import Home from "views/Home";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Login from "views/examples/Login.js";
import Register from "views/examples/Register.js";
import API from "components/Table/TableComponent.js";

import AuthNavbar from "./components/Navbars/AuthNavbar";
import AuthFooter from "./components/Footers/AuthFooter";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
      <Route path="/api" >
        <>
          <div className={"main-content"}>
            <AuthNavbar />
            <API  name={"Charges"} URL={"https://run.mocky.io/v3/a97c9aa7-28d4-4f69-b585-ba4c69e295c2"}/>
            <AuthFooter />
          </div>
        </>
      </Route>
      <Route path="/" render={(props) => <Home />}/>


    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
