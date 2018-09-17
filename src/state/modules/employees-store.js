import { action, computed, decorate, observable } from "mobx";
import getEmployeesFromApi from "../../utils/get-employees-from-api";
import { filteredEmployees } from "../../helpers/filters";
class EmployeesStore {
  /**
   * STATE
   */
  employees = [];
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

  loadMoreEmployees() {
    // check to see if there are more to load
    // if there are more to load, take 5 or less (if 5 items do not exists)
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
    const position = this.rootStore.uiStore.currentNavigableItemPosition;

    return this.currentEmployees[position] || {};
  }
}
decorate(EmployeesStore, {
  employees: observable,
  selectedDepartment: observable,
  handleEmployeeSelect: action.bound,
  loadMoreEmployees: action.bound,
  getEmployees: action,
  uniqueEmployeeDepartments: computed,
  filteredEmployeeList: computed,
  currentEmployee: computed,
  currentEmployees: computed
});

export default EmployeesStore;
