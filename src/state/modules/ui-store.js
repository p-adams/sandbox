import { action, computed, decorate, observable } from "mobx";
import { navigate } from "@reach/router";
class UIStore {
  /**
   * STATE
   */

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
  incrementCurrentNavigableItemPosition = () => {
    this.currentNavigableItemPosition += 1;
  };

  decrementCurrentNavigableItemPosition = () => {
    this.currentNavigableItemPosition -= 1;
  };

  updateCurrentNavigableItemPosition = newPosition => {
    this.currentNavigableItemPosition = newPosition;
  };

  resetCurrentPage = () => {
    this.currentPage = 1;
  };
  handleClickPagination = newPageNumber => {
    this.currentPage = newPageNumber;
  };

  handleRightArrowPagination = () => {
    if (this.currentPage < this.pageNumbers.length) this.currentPage++;
  };

  handleLeftArrowPagination = () => {
    if (this.currentPage > 1) this.currentPage--;
  };

  viewEmployeeProfile = (employeeId, position) => {
    this.updateCurrentNavigableItemPosition(position);
    navigate(`/profile/${employeeId}`);
  };

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
  currentPage: observable,
  incrementCurrentNavigableItemPosition: action,
  decrementCurrentNavigableItemPosition: action,
  viewEmployeeProfile: action,
  handleClickPagination: action,
  handleRightArrowPagination: action,
  handleLeftArrowPagination: action,
  updateCurrentNavigableItem: action,
  resetCurrentPage: action,
  indexOfFirstItem: computed,
  indexOfLastItem: computed,
  pageNumbers: computed
});

export default UIStore;
