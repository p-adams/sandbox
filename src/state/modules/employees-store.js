import { action, computed, decorate } from "mobx";
import getEmployeesFromApi from "../../utils/get-employees-from-api";
import { filteredEmployees } from "../../helpers/filters";
class EmployeesStore {
  /**
   * STATE
   */
  employees = [];
  currentEmployee = {};
  selectedEmployeeDepartment = "SHOW ALL"; // could be an interface item
  departments = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  /**
   * ACTIONS
   */
  getEmployees() {
    getEmployeesFromApi().then(
      employeesFromApi => (this.employees = [...employeesFromApi])
    );
  }

  handleEmployeeSelect = newDepartment => {
    this.selectedDepartment = newDepartment;
  };

  /**
   * COMPUTED FUNCTIONS
   */
  get uniqueEmployeeDepartments() {
    const departments = this.state.employees.map(
      employee => employee.department
    );
    return [...new Set(departments)];
  }
  get filteredEmployeeList() {
    return filteredEmployees(this.state.employees, "department", [
      this.state.selectedDepartment
    ]);
  }
}
decorate(EmployeesStore, {
  getEmployees: action,
  uniqueEmployeeDepartments: computed,
  filteredEmployeeList: computed
});
export default EmployeesStore;
