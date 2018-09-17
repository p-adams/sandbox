import React from "react";
import { inject, observer } from "mobx-react";

import changeCase from "change-case";
import parser from "another-name-parser";
class CurrentEmployeeProfileView extends React.Component {
  processedEmployee = () => {
    const {
      employeesStore: { currentEmployee }
    } = this.props;
    return Object.keys(currentEmployee)
      .map(() => {
        // We want to extract the first and last name of the current employee
        // so each are displayed distinctly to the user
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
  };
  render() {
    const currentEmployeeProfile = Object.keys(this.processedEmployee()).map(
      (key, index) => {
        return key !== "id" ? (
          <div className="p-2 m-2 text-grey-darker text-lg" key={index}>
            {changeCase.title(key)}: {this.processedEmployee()[key]}
          </div>
        ) : null;
      }
    );
    return <div>{currentEmployeeProfile}</div>;
  }
}

export default inject("employeesStore")(observer(CurrentEmployeeProfileView));
