import React from "react";
import NewEmployeeForm from "../NewEmployeeForm";

class FormView extends React.Component {
  render() {
    return (
      <div className="viewPaneHeight w-full bg-white">
        <h4 className="text-center mt-2 text-grey">New Employee Form</h4>
        <div className="flex">
          <div className="w-1/3" />
          <div className="w-2/3 mt-8">
            <NewEmployeeForm departments={this.props.departments} />
          </div>
          <div className="w-1/3" />
        </div>
      </div>
    );
  }
}

export default FormView;

/** PROPS
 *            path="form"
              departments={this.uniqueEmployeeDepartments()}
 */
