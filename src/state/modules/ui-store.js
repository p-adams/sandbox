import { action, decorate, observable } from "mobx";
import { navigate } from "@reach/router";
class UIStore {
  /**
   * STATE
   */
  currentNavigableItemPosition = 0;
  constructor(rootStore) {
    this.rootStore = rootStore;
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

  viewEmployeeProfile(employeeId, position) {
    this.updateCurrentNavigableItemPosition(position);
    navigate(`/profile/${employeeId}`);
  }
}

decorate(UIStore, {
  currentNavigableItemPosition: observable,
  incrementCurrentNavigableItemPosition: action.bound,
  decrementCurrentNavigableItemPosition: action.bound,
  viewEmployeeProfile: action.bound
});

export default UIStore;
