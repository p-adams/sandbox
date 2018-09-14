import React, { Component } from "react";
/* import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
library.add(faCheckSquare); */
import EmployeeListViewPane from "./EmployeeListViewPane";
import SelectedEmployeeProfileViewPane from "./SelectedEmployeeProfileViewPane";
import FormViewPane from "./FormViewPane";
class App extends Component {
  render() {
    return (
      <div>
        <div className="flex bg-blue-dark text-white h-16">
          <h3 className="p-1 mt-2">City of Chicago Employee Directory</h3>
        </div>
        <div className="flex flex-wrap bg-grey h-screen">
          <EmployeeListViewPane />
          <SelectedEmployeeProfileViewPane />
          <FormViewPane />
        </div>
      </div>
    );
  }
}

export default App;
