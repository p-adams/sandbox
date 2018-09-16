import UIStore from "./modules/ui-store";
import EmployeesStore from "./modules/employees-store";
class Store {
  constructor() {
    this.uiStore = new UIStore(this);
    this.todoStore = new EmployeesStore(this);
  }
}

export default new Store();
