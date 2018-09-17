import { action, decorate, observable } from "mobx";
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

  viewEmployeeProfile(employeeId) {
    navigate(`/profile/${employeeId}`);
  }
}

decorate(UIStore, {
  routePath: observable,
  currentNavigableItemPosition: observable,
  viewEmployeeProfile: action
});

export default UIStore;
