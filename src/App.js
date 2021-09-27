import React from 'react'
import "./App.css";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
// import User from "./users";
import Products from "./product";
// import Createuser from "./createuser";
// import Edituser from "./edituser";
// import { UserProvider } from "./userContext";
import Mentor from './Mentor';
import CreateMentor from './CreateMentor';
import EditMentor from './EditMentor';

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Students from './product';
import CreateStudent from './createproduct';
import EditStudent from './editproduct'
import Batch from './Batch';
import AssignMentor from './Assign';

function App() {
  const history = useHistory();
  return (
    <Router>
      <div>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div class="container-fluid">
                <Switch>
                  <Route path="/" component={Dashboard} exact={true} />
                  <Route path="/student" component={Students} exact={true} />
                  <Route path="/create-student" component={CreateStudent} exact={true} />
                  <Route path="/student/edit/:id" component={EditStudent} exact={true} />
                  <Route path="/student/assign/:id" component={AssignMentor} exact={true} />
                    <Route path="/Mentor" component={Mentor} exact={true} />
                    <Route path="/create-mentor" component={CreateMentor} exact={true} />
                    <Route path="/Mentor/edit/:id" component={EditMentor} exact={true} />
                    <Route path="/batch" component={Batch} exact={true} />
                </Switch>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Router>
  )
}

export default App;
