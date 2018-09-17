import { action, computed, decorate, observable } from "mobx";
import { navigate } from "@reach/router";
class UIStore {
  /**
   * STATE
   */
  currentNavigableItem = null;
  currentNavigableItemPosition = 0;
  currentPage = 1;
  itemsPerPage = 5;

  constructor(rootStore) {
    this.rootStore = rootStore;
    // this.updateCurrentNavigableItem(this.rootStore.employeesStore.employees[0]);
  }

  /**
   * ACTIONS
   */
  incrementCurrentNavigableItemPosition() {
    this.currentNavigableItemPosition += 1;
  }

  decrementCurrentNavigableItemPosition() {
    this.currentNavigableItemPosition -= 1;
  }

  updateCurrentNavigableItemPosition = newPosition => {
    this.currentNavigableItemPosition = newPosition;
  };
  updateCurrentNavigableItem = item => {
    console.log("item", item);
    this.currentNavigableItem = item;
  };

  handlePagination = newPageNumber => {
    this.currentPage = newPageNumber;
  };

  viewEmployeeProfile(employeeId, position) {
    this.updateCurrentNavigableItemPosition(position);
    navigate(`/profile/${employeeId}`);
  }

  /**
   * COMPUTED FUNCTIONS
   */

  get indexOfFirstItem() {
    return this.indexOfLastItem - this.itemsPerPage;
  }

  get indexOfLastItem() {
    return this.currentPage * this.itemsPerPage;
  }

  get pageNumbers() {
    const {
      employeesStore: { filteredEmployeeList }
    } = this.rootStore;

    const numbers = [];
    for (
      let i = 1;
      i <= Math.ceil(filteredEmployeeList.length / this.itemsPerPage);
      i++
    ) {
      numbers.push(i);
    }
    return numbers;
  }
}

decorate(UIStore, {
  currentNavigableItemPosition: observable,
  currentNavigableItem: observable,
  currentPage: observable,
  incrementCurrentNavigableItemPosition: action.bound,
  decrementCurrentNavigableItemPosition: action.bound,
  viewEmployeeProfile: action.bound,
  handlePagination: action,
  updateCurrentNavigableItem: action,
  indexOfFirstItem: computed,
  indexOfLastItem: computed,
  pageNumbers: computed
});

export default UIStore;
