import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import Store from "./state/store";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./css/index.css";
import "./css/tailwind.css";

const stores = {
  employeesStore: Store.employeesStore,
  uiStore: Store.uiStore
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
