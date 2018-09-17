import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import EmployeesDirectoryView from "./pages/EmployeesDirectoryView";
import EmployeeProfileView from "./pages/EmployeesProfileView";
import FormView from "./pages/FormView";
import NotFoundView from "./pages/NotFoundView";

import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="flex bg-blue-dark text-white h-16">
          <h3 className="p-1 mt-2">City of Chicago Employee Directory</h3>
        </div>
        <div className="bg-grey h-screen">
          <nav className="flex justify-center">
            <Link className="p-1" to="/employees">
              View all employees
            </Link>

            <Link className="p-1" to="form">
              Add employee
            </Link>
          </nav>
          <Router>
            <EmployeesDirectoryView path="/employees" />
            <EmployeeProfileView path="profile/:employeeId" />
            <FormView path="form" />
            <NotFoundView default />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
