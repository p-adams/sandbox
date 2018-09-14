import React from "react";
import "../css/App.css";
import getEmployeesFromApi from "../utils/get-employees-from-api";
import EmployeeListItem from "./EmployeeListItem";
import AppButton from "./AppButton";

class EmployeeListViewPane extends React.Component {
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
      <li key={key}>
        <EmployeeListItem {...employee} />
      </li>
    ));
    return (
      <div className="viewPaneHeight w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 m-4 shadow-md bg-white">
        <h4 className="text-center mt-2 text-grey">Employees Directory</h4>
        <div>
          <ul className="employeeListContainer mt-4 p-2 bg-grey-light overflow-auto">
            {employeeList}
          </ul>
        </div>
        <div className="h-16 border border-t">
          <AppButton {...{ btnText: "Load More" }} />
        </div>
      </div>
    );
  }
}

export default EmployeeListViewPane;
