import { action, decorate, observerable } from "mobx";
import { navigate } from "@reach/router";
class UIStore {
  /**
   * STATE
   */
  routePath = "";
  currentNavigableItemPosition = 0;
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  /**
   * ACTIONS
   */

  viewEmployeeProfile = employeeId => {
    navigate(`/profile/${employeeId}`);
  };
}

decorate(UIStore, {
  routePath: observerable,
  currentNavigableItemPosition: observable,
  viewEmployeeProfile: action
});

export default UIStore;
