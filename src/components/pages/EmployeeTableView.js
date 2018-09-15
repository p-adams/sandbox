import React from "react";
import AppTableView from "../AppTableView";
import EmployeeListItem from "../EmployeeListItem";
import AppSelect from "../AppSelect";
import AppButton from "../AppButton";
import "../../css/App.css";

// A generic function to extend filtering beyond
// filtering employees by department
function EmployeesFilters(employees, filterBy, filters) {
  const filteredResults = employees.filter(employee =>
    filters.some(
      filter =>
        filter !== "SHOW ALL" ? employee[filterBy] === filter : employee
    )
  );
  return filteredResults;
}

class EmployeeTableView extends React.Component {
  state = {
    selectedDepartment: "SHOW ALL"
  };
  render() {
    const { selectedDepartment } = this.state;
    const employeeList = EmployeesFilters(this.props.employees, "department", [
      selectedDepartment
    ]).map((employee, key) => <EmployeeListItem key={key} {...employee} />);
    return (
      <div className="viewPaneHeight w-full bg-white">
        <h4 className="text-center mt-2 text-grey">Employees Directory</h4>
        <div className="flex ml-2 mt-4">
          <AppSelect
            label="Filter employees by department"
            options={this.props.departments}
            value={this.state.selectedDepartment}
            doesFilter={true}
            handleChange={e =>
              this.setState({
                selectedDepartment: e.target.value
              })
            }
          />
        </div>
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

export default EmployeeTableView;
