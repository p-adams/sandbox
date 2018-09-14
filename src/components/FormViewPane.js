import React from "react";
import AppForm from "./AppForm";

class FormViewPane extends React.Component {
  render() {
    return (
      <div className="viewPaneHeight w-full bg-white">
        <h4 className="text-center mt-2 text-grey">New Employee Form</h4>
        <div className="flex">
          <div className="w-1/3" />
          <div className="w-2/3 mt-16">
            <AppForm />
          </div>
          <div className="w-1/3" />
        </div>
      </div>
    );
  }
}

export default FormViewPane;
