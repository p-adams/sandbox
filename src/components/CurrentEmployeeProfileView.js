import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
// a module used to display the employee fields from the API
// in a more readable format to the user
import changeCase from "change-case";
import parser from "another-name-parser";
const CurrentEmployeeProfileView = inject("employeesStore")(
  observer(
    class extends React.Component {
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
              firstname: first,
              lastname: last
            };
          })
          .reduce((acc, x) => {
            for (var key in x) acc[key] = x[key];
            return acc;
          }, {});
      };
      render() {
        const currentEmployeeProfile = Object.keys(
          this.processedEmployee()
        ).map((key, index) => {
          return (
            <div className="p-2 m-2 text-grey-darker text-lg" key={index}>
              {changeCase.title(key)}: {this.processedEmployee()[key]}
            </div>
          );
        });
        return <div>{currentEmployeeProfile}</div>;
      }
    }
  )
);

CurrentEmployeeProfileView.wrappedComponent.propTypes = {
  currentEmployee: PropTypes.object
};

export default CurrentEmployeeProfileView;
