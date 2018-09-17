import { action, computed, decorate, observable } from "mobx";
import getEmployeesFromApi from "../../utils/get-employees-from-api";
import { filteredEmployees } from "../../helpers/filters";
class EmployeesStore {
  /**
   * STATE
   */
  employees = [];
  currentEmployee = {};
  selectedDepartment = "SHOW ALL"; // could be an interface item
  departments = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
    // initialize employees from API
    this.getEmployees();
  }
  /**
   * ACTIONS
   */
  getEmployees() {
    getEmployeesFromApi().then(
      employeesFromApi => (this.employees = [...employeesFromApi])
    );
  }

  handleEmployeeSelect({ department }) {
    this.selectedDepartment = department;
  }

  /**
   * COMPUTED FUNCTIONS
   */
  get uniqueEmployeeDepartments() {
    const departments = this.employees.map(employee => employee.department);
    return [...new Set(departments)];
  }
  get filteredEmployeeList() {
    return filteredEmployees(this.employees, "department", [
      this.selectedDepartment
    ]);
  }
}
decorate(EmployeesStore, {
  employees: observable,
  selectedDepartment: observable,
  handleEmployeeSelect: action.bound,
  getEmployees: action,
  uniqueEmployeeDepartments: computed,
  filteredEmployeeList: computed
});

export default EmployeesStore;
