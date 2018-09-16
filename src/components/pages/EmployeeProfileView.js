import React from "react";
import getSingleEmployeeFromApi from "../../utils/get-single-employee-from-api";
import changeCase from "change-case";
import parser from "another-name-parser";

class EmployeeProfileViewPane extends React.Component {
  state = {
    currentEmployee: {}
  };
  componentDidMount() {
    const { employeeId } = this.props;
    getSingleEmployeeFromApi(employeeId).then(employee =>
      this.setState({
        currentEmployee: { ...employee }
      })
    );
  }
  render() {
    const { currentEmployee } = this.state;
    const processedEmployee = Object.keys(currentEmployee)
      .map(() => {
        const { name, ...employee } = currentEmployee;
        const { first, last } = parser(name);
        return {
          ...employee,
          first,
          last
        };
      })
      .reduce((acc, x) => {
        for (var key in x) acc[key] = x[key];
        return acc;
      }, {});

    const currentEmployeeProfile = Object.keys(processedEmployee).map(
      (key, index) => {
        return key !== "id" ? (
          <div className="p-2 m-2 text-grey-darker text-lg" key={index}>
            {changeCase.title(key)}: {processedEmployee[key]}
          </div>
        ) : null;
      }
    );
    return (
      <div className="viewPaneHeight w-full bg-white">
        <h4 className="text-center mt-2 text-grey">Employee Profile</h4>
        <div className="flex">
          <div className="w-1/3" />
          <div className="w-2/3 mt-8">
            <div className="w-full p-1 max-w-lg h-64 overflow-scroll shadow-lg">
              {currentEmployeeProfile}
            </div>
          </div>
          <div className="w-1/3" />
        </div>
      </div>
    );
  }
}

export default EmployeeProfileViewPane;
