import React from 'react'
import "./App.css";

import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import User from "./users";
import Products from "./product";
import Createuser from "./createuser";
import Edituser from "./edituser";
import { UserProvider } from "./userContext";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import CreateProduct from "./createproduct";
import EditProduct from "./editproduct";

function Project() {
    const history = useHistory();
    return (
        <Router>
        <div>
            <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <button className="btn btn-sm btn-primary" onClick={() => {
                                window.localStorage.removeItem("app_token");
                                history.push("/login")}}>Logout</button>
            <div class="container-fluid">
            {/* <button className="btn btn-sm btn-primary" onClick={() => {
                                window.localStorage.removeItem("app_token");
                                history.push("/login")}}>Logout</button> */}
              <Switch>
                  {/* <Route path="/" component={Dashboard} exact={true} /> */}
                  {/* <Route path="/register"><Register/></Route>  
                  <Route path="/login" ><Login/></Route> */}
                  
                  <Route path="/product" component={Products} exact={true} />
                  <Route path="/create-product" component={CreateProduct} exact={true} />
                  <Route path="/product/edit/:id" component={EditProduct} exact={true} />
                <UserProvider>
                  <Route path="/user" component={User} exact={true} />
                  <Route path="/create-user" component={Createuser} exact={true}/>
                  <Route path="/user/edit/:id" component={Edituser} exact={true}/>
                </UserProvider>
              </Switch>
              {/* <Dashboard></Dashboard> */}
              {/* <User></User> */}
              {/* <Products></Products> */}
            </div>
          </div>
        </div>
                  
      </div>
        </div>
        </Router>
    )
}

export default Project
