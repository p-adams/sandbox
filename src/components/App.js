import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import getEmployeesFromApi from "../utils/get-employees-from-api";
import EmployeeListView from "./pages/EmployeeListView";
import EmployeeProfileView from "./pages/EmployeeProfileView";
import FormView from "./pages/FormView";
import "../css/App.css";
class App extends Component {
  state = {
    employees: []
  };
  componentDidMount() {
    getEmployeesFromApi().then(employeesFromApi =>
      this.setState({ employees: [...employeesFromApi] })
    );
  }
  uniqueEmployeeDepartments = () => {
    const departments = this.state.employees.map(
      employee => employee.department
    );
    return [...new Set(departments)];
  };
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
            <EmployeeListView
              path="/"
              employees={this.state.employees}
              departments={this.uniqueEmployeeDepartments()}
            />
            <EmployeeProfileView path="profile" />
            <FormView
              path="form"
              departments={this.uniqueEmployeeDepartments()}
            />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
