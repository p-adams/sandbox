import React, { Component } from "react";
/* import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
library.add(faCheckSquare); */
import "../css/App.css";
import EmployeeTableViewPane from "./EmployeeTableViewPane";
import EmployeeProfileViewPane from "./EmployeeProfileViewPane";
import FormViewPane from "./FormViewPane";
import { Router, Link } from "@reach/router";
class App extends Component {
  render() {
    return (
      <div>
        <div className="flex bg-blue-dark text-white h-16">
          <h3 className="p-1 mt-2">City of Chicago Employee Directory</h3>
        </div>
        <div className="bg-grey h-screen">
          <nav className="flex justify-center">
            <Link className="p-1" to="/">
              View all employees
            </Link>
            <Link className="p-1" to="profile">
              View profile
            </Link>
            <Link className="p-1" to="form">
              Add employee
            </Link>
          </nav>
          <Router>
            <EmployeeTableViewPane path="/" />
            <EmployeeProfileViewPane path="profile" />
            <FormViewPane path="form" />
          </Router>
          {/*<div className="flex flex-wrap bg-grey h-screen">
          <EmployeeListViewPane />
          <SelectedEmployeeProfileViewPane />
          <FormViewPane />
    </div> */}
        </div>
      </div>
    );
  }
}

export default App;
