import React from "react";
import { inject, observer } from "mobx-react";
import NavigableView from "../NavigableView";
import CurrentEmployeeProfileView from "../CurrentEmployeeProfileView";
import PageNumbersView from "../PageNumbersView";

class EmployeeProfileViewPane extends React.Component {
  render() {
    const {
      employeesStore: { currentEmployees },
      uiStore: { currentPage, handlePagination, pageNumbers },
      employeeId
    } = this.props;

    return (
      <div className="viewPaneHeight w-full bg-white">
        <h4 className="text-center mt-2 text-grey">Employee Profile</h4>
        <div className="flex">
          <div className="w-1/3" />
          <div className="w-2/3 mt-8">
            <div className="w-full p-1 max-w-lg h-64 shadow-lg">
              <NavigableView
                items={currentEmployees}
                navigationPath="employees"
                renderView={currentNavigableItem => (
                  <div>
                    <CurrentEmployeeProfileView
                      currentNavigableItem={currentNavigableItem}
                      employeeId={employeeId}
                    />
                  </div>
                )}
              />{" "}
            </div>
          </div>
          <div className="w-1/3" />
        </div>
        <div className="mt-12">
          <PageNumbersView
            currentPage={currentPage}
            pageNumbers={pageNumbers}
            handlePagination={handlePagination}
          />
        </div>
      </div>
    );
  }
}

export default inject("employeesStore", "uiStore")(
  observer(EmployeeProfileViewPane)
);
