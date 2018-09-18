import React from "react";
import { inject, observer } from "mobx-react";
import { newEmployeeSchema } from "../utils/validationSchemas";
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
    },
    processingEmployeeFields: false,
    errorProcessingForm: false
  };
  handleInputChange = ({ value, field }) => {
    this.setState({ errorProcessingForm: false });
    this.setState(prevState => ({
      newEmployee: { ...prevState.newEmployee, [field]: value }
    }));
  };
  resetProcessingEmployees = () => {
    this.setState(prevState => ({
      processingEmployeeFields: !prevState.processingEmployeeFields
    }));
  };
  resetFormFields = () => {
    this.setState(prevState => ({
      newEmployee: {
        ...prevState.newEmployee,
        name: "",
        job_titles: "",
        employee_annual_salary: "",
        department: ""
      }
    }));
  };
  handleFormSubmission = () => {
    setTimeout(() => {
      this.resetProcessingEmployees();
    }, 300);
    const {
      employeesStore: { addNewEmployeeToDb }
    } = this.props;
    const { newEmployee } = this.state;

    // ensure that the new employee employee_annual_salary field is a number
    const processedEmployee = {
      ...newEmployee,
      employee_annual_salary: Number(newEmployee.employee_annual_salary)
    };

    newEmployeeSchema.isValid(processedEmployee).then(valid => {
      if (valid) {
        addNewEmployeeToDb(processedEmployee);
        this.resetFormFields();
        alert("New employee added to database");
      } else {
        this.setState({ errorProcessingForm: true });
      }
      this.resetProcessingEmployees();
    });
  };
  render() {
    const { newEmployee } = this.state;
    const {
      employeesStore: { uniqueEmployeeDepartments }
    } = this.props;
    return (
      <div className="w-full p-1 max-w-lg shadow-lg">
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full mt-2 px-3 mb-6 md:mb-0">
            <AppInput
              className="w-full"
              type="text"
              label="Fullname"
              value={newEmployee.name}
              handleChange={e =>
                this.handleInputChange({
                  value: e.target.value,
                  field: "name"
                })
              }
              placeholder="Enter fullname. Ex: Doe, John J"
            />
            <h6 className="text-yellow-dark">
              Please use the supported fullname format: lastname, firstname
              middle initial (optional)
            </h6>
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
              options={uniqueEmployeeDepartments}
              handleChange={e =>
                this.handleInputChange({
                  value: e.target.value,
                  field: "department"
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <h5 className="text-red-dark">
              {this.state.errorProcessingForm
                ? "Error processing form! Please make sure all fields are filled out correctly and try again."
                : null}
            </h5>
          </div>
        </div>

        <div className="flex justify-end mx-3 mb-2">
          <AppButton
            handleClick={() => this.handleFormSubmission()}
            {...{
              btnText: this.state.processingEmployeeFields
                ? "Processing request"
                : "Add employee"
            }}
            shouldDisable={this.state.processingEmployeeFields}
          />
        </div>
      </div>
    );
  }
}

export default inject("employeesStore")(observer(NewEmployeeForm));
