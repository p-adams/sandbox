import React from "react";
import { inject, observer } from "mobx-react";

import AppButton from "./AppButton";
import AppInput from "./AppInput";
import AppSelect from "./AppSelect";

class NewEmployeeForm extends React.Component {
  state = {
    newEmployee: {
      name: "",
      job_titles: "",
      employee_annual_salary: "",
      department: ""
    }
  };
  handleInputChange = ({ value, field }) => {
    this.setState(prevState => ({
      newEmployee: { ...prevState.newEmployee, [field]: value }
    }));
  };
  render() {
    const { newEmployee } = this.state;
    const { departments } = this.props;
    const {
      employeesStore: { addNewEmployeeToDb, uniqueEmployeeDepartments }
    } = this.props;
    return (
      <div className="w-full p-1 max-w-lg shadow-lg">
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full mt-2 px-3 mb-6 md:mb-0">
            <AppInput
              className="w-full"
              type="text"
              label="Fullname"
              value={newEmployee.firstname}
              handleChange={e =>
                this.handleInputChange({
                  value: e.target.value,
                  field: "name"
                })
              }
              placeholder="Enter fullname (Lastname, Firstname Middle Initial (optional)"
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <AppInput
              type="text"
              label="Job Title"
              value={newEmployee.job_titles}
              handleChange={e =>
                this.handleInputChange({
                  value: e.target.value,
                  field: "job_titles"
                })
              }
              placeholder="Enter job title"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <AppInput
              type="text"
              label="Salary"
              value={newEmployee.employee_annual_salary}
              handleChange={e =>
                this.handleInputChange({
                  value: e.target.value,
                  field: "employee_annual_salary"
                })
              }
              placeholder="Enter salary"
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <AppSelect
              label="Department"
              value={newEmployee.department}
              doesFilter={false}
              options={departments}
              handleChange={e =>
                this.handleInputChange({
                  value: e.target.value,
                  field: "department"
                })
              }
            />
          </div>
        </div>
        <div className="flex justify-end mx-3 mb-2">
          <AppButton
            handleClick={() => addNewEmployeeToDb(newEmployee)}
            {...{ btnText: "Add employee" }}
          />
        </div>
      </div>
    );
  }
}

export default inject("employeesStore")(observer(NewEmployeeForm));
