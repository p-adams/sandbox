import React from "react";
import "../css/App.css";
import getEmployeesFromApi from "../utils/get-employees-from-api";
import EmployeeListItem from "./EmployeeListItem";
import AppButton from "./AppButton";

class EmployeeTableViewPane extends React.Component {
  state = {
    employees: []
  };
  componentDidMount() {
    getEmployeesFromApi().then(employeesFromApi =>
      this.setState({ employees: [...employeesFromApi] })
    );
  }
  render() {
    const employeeList = this.state.employees.map((employee, key) => (
      <EmployeeListItem key={key} {...employee} />
    ));
    return (
      <div className="viewPaneHeight w-full bg-white">
        <h4 className="text-center mt-2 text-grey">Employees Directory</h4>
        <div className="employeeListContainer mt-4 p-2 bg-grey-light overflow-auto">
          {employeeList}
        </div>
        <hr />
        <div className="w-full border-t flex justify-center">
          <AppButton {...{ btnText: "Load More" }} />
        </div>
      </div>
    );
  }
}

export default EmployeeTableViewPane;
