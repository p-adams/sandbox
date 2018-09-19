import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import NavigableView from "../NavigableView";
import CurrentEmployeeProfileView from "../CurrentEmployeeProfileView";
import PageNumbersView from "../PageNumbersView";

const EmployeeProfileViewPane = inject("employeesStore", "uiStore")(
  observer(
    class extends React.Component {
      render() {
        const {
          employeesStore: { currentEmployees },
          uiStore: {
            currentPage,
            currentNavigableItemPosition,
            handleLeftArrowPagination,
            handleRightArrowPagination,
            pageNumbers
          },
          employeeId
        } = this.props;

        return (
          <div className="viewPaneHeight w-full bg-white">
            <h4 className="text-center mt-2 text-grey">Employee Profile</h4>
            <div className="flex">
              <div className="w-1/3" />
              <div className="w-2/3 mt-8">
                <div className="w-full p-1 max-w-lg shadow-lg">
                  <NavigableView
                    items={currentEmployees}
                    navigationPath="employees"
                    renderView={() => (
                      <div>
                        <CurrentEmployeeProfileView
                          currentNavigableItem={currentNavigableItemPosition}
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
                handlePrevPage={handleLeftArrowPagination}
                handleNextPage={handleRightArrowPagination}
              />
            </div>
          </div>
        );
      }
    }
  )
);

EmployeeProfileViewPane.wrappedComponent.propTypes = {
  uiStore: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    currentNavigableItemPosition: PropTypes.number.isRequired,
    handleLeftArrowPagination: PropTypes.func.isRequired,
    handleRightArrowPagination: PropTypes.func.isRequired,
    pageNumbers: PropTypes.array.isRequired
  }),
  employeesStore: PropTypes.shape({
    currentEmployees: PropTypes.array.isRequired
  })
};

export default EmployeeProfileViewPane;
