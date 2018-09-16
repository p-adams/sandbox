import React from "react";
import { navigate } from "@reach/router";
import { filteredEmployees } from "../../helpers/filters";
import AppTableView from "../AppTableView";
import NavigableView from "../NavigableView";
import AppSelect from "../AppSelect";
import AppButton from "../AppButton";
// A simple name parsing module
// that handles parsing fullnames
// in format retrieved from API
// Source: https://www.npmjs.com/package/another-name-parser
import parser from "another-name-parser";

class EmployeeTableView extends React.Component {
  state = {
    selectedDepartment: "SHOW ALL",
    employeeId: 0
  };

  viewEmployeeProfile = employeeId => {
    navigate(`/profile/${employeeId}`);
  };
  render() {
    const { selectedDepartment } = this.state;
    const { departments, employees } = this.props;
    // Filter employees by selected department
    const processedEmployeeList = filteredEmployees(employees, "department", [
      selectedDepartment
    ])
      // Return only those employee fields we wish to reference in the TableView
      .map(filteredEmployee => {
        const { id, job_titles, name } = filteredEmployee;
        const { first, last } = parser(name);
        return {
          id,
          first,
          last,
          job_titles
        };
      });
    return (
      <div className="viewPaneHeight w-full bg-white">
        <h4 className="text-center mt-2 text-grey">Employees Directory</h4>
        <div className="flex ml-2 mt-4">
          <AppSelect
            label="Filter employees by department"
            options={departments}
            value={selectedDepartment}
            doesFilter={true}
            handleChange={e =>
              this.setState({
                selectedDepartment: e.target.value
              })
            }
          />
        </div>
        <NavigableView
          items={processedEmployeeList}
          renderView={currentNavigableItem => (
            <AppTableView
              handleEvent={this.viewEmployeeProfile}
              items={processedEmployeeList}
              currentItem={currentNavigableItem}
            />
          )}
        />
        <hr />
        <div className="w-full border-t flex justify-center">
          <AppButton {...{ btnText: "Load More" }} />
        </div>
      </div>
    );
  }
}

export default EmployeeTableView;
