import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { filteredEmployees } from "../helpers/filters";
import getEmployeesFromApi from "../utils/get-employees-from-api";
import EmployeesDirectoryView from "./pages/EmployeesDirectoryView";
import EmployeeProfileView from "./pages/EmployeesProfileView";
import FormView from "./pages/FormView";
import NotFoundView from "./pages/NotFoundView";
import "../css/App.css";
class App extends Component {
  state = {
    employees: [],
    selectedDepartment: "SHOW ALL"
  };
  componentDidMount() {
    getEmployeesFromApi().then(employeesFromApi =>
      this.setState({ employees: [...employeesFromApi] })
    );
  }

  handleEmployeeSelect = e => {
    this.setState({
      selectedDepartment: e.target.value
    });
  };

  uniqueEmployeeDepartments = () => {
    const departments = this.state.employees.map(
      employee => employee.department
    );
    return [...new Set(departments)];
  };
  filteredEmployeeList = () => {
    return filteredEmployees(this.state.employees, "department", [
      this.state.selectedDepartment
    ]);
  };
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
            <Link className="p-1" to="profile">
              View profile
            </Link>
            <Link className="p-1" to="form">
              Add employee
            </Link>
          </nav>
          <Router>
            <EmployeesDirectoryView
              path="/employees"
              employees={this.filteredEmployeeList()}
              departments={this.uniqueEmployeeDepartments()}
              handleEmployeeSelect={this.handleEmployeeSelect}
              selectedDepartment={this.state.selectedDepartment}
            />
            <EmployeeProfileView
              path="profile/:employeeId"
              employees={this.filteredEmployeeList()}
            />
            <FormView
              path="form"
              departments={this.uniqueEmployeeDepartments()}
            />
            <NotFoundView default />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
