import React from "react";
import { filteredEmployees } from "../../helpers/filters";
import AppTableView from "../AppTableView";
import EmployeeListItem from "../EmployeeListItem";
import AppSelect from "../AppSelect";
import AppButton from "../AppButton";
import "../../css/App.css";

class EmployeeTableView extends React.Component {
  state = {
    selectedDepartment: "SHOW ALL"
  };
  render() {
    const { selectedDepartment } = this.state;
    const filteredEmployeeList = filteredEmployees(
      this.props.employees,
      "department",
      [selectedDepartment]
    ).map((employee, key) => <EmployeeListItem key={key} {...employee} />);
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
          {filteredEmployeeList}
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
