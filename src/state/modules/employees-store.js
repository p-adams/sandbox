import { action, computed, decorate, observable } from "mobx";
import getEmployeesFromApi from "../../utils/get-employees-from-api";
import { filteredEmployees } from "../../helpers/filters";
class EmployeesStore {
  /**
   * STATE
   */
  employees = [];
  selectedDepartment = "SHOW ALL";
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

  handleDepartmentSelect = ({ department }) => {
    const {
      uiStore: { resetCurrentPage }
    } = this.rootStore;
    resetCurrentPage();
    this.selectedDepartment = department;
  };

  addNewEmployeeToDb = (newEmployee) => {
    console.log(newEmployee)
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

  get currentEmployees() {
    const {
      uiStore: { indexOfFirstItem, indexOfLastItem }
    } = this.rootStore;
    return this.filteredEmployeeList.slice(indexOfFirstItem, indexOfLastItem);
  }

  get currentEmployee() {
    const {
      uiStore: { currentNavigableItemPosition }
    } = this.rootStore;
    return this.currentEmployees[currentNavigableItemPosition] || {};
  }
}
decorate(EmployeesStore, {
  employees: observable,
  selectedDepartment: observable,
  handleDepartmentSelect: action,
  getEmployees: action,
  addNewEmployeeToDb: action,
  uniqueEmployeeDepartments: computed,
  filteredEmployeeList: computed,
  currentEmployee: computed,
  currentEmployees: computed
});

export default EmployeesStore;
