import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import AppTableView from "../AppTableView";
import NavigableView from "../NavigableView";
import AppSelect from "../AppSelect";
import PageNumbersView from "../PageNumbersView";
// A simple name parsing module
// that handles parsing fullnames
// in format retrieved from API
// Source: https://www.npmjs.com/package/another-name-parser
import parser from "another-name-parser";

const EmployeesDirectoryView = inject("employeesStore", "uiStore")(
  observer(
    class extends React.Component {
      render() {
        const {
          employeesStore: {
            currentEmployees,
            handleDepartmentSelect,
            selectedDepartment,
            uniqueEmployeeDepartments
          },
          uiStore: {
            currentPage,
            currentNavigableItemPosition,
            handleLeftArrowPagination,
            handleRightArrowPagination,
            viewEmployeeProfile,
            pageNumbers
          }
        } = this.props;

        // Filter employees by selected department
        const processedEmployeeList = currentEmployees
          // Return only those employee fields we wish to reference in the TableView
          .map(filteredEmployee => {
            const { id, job_titles, name } = filteredEmployee;
            const { first, last } = parser(name);
            return {
              id,
              first,
              last,
              job_titles
            };
          });

        return (
          <div className="viewPaneHeight w-full bg-white">
            <h4 className="text-center mt-2 text-grey">Employees Directory</h4>
            <div className="flex ml-2 mt-4">
              <AppSelect
                label="Filter employees by department"
                options={uniqueEmployeeDepartments}
                value={selectedDepartment}
                doesFilter={true}
                handleChange={e =>
                  handleDepartmentSelect({ department: e.target.value })
                }
              />
            </div>
            <NavigableView
              items={processedEmployeeList}
              navigationPath="profile"
              renderView={() => (
                <div>
                  <AppTableView
                    handleEvent={viewEmployeeProfile}
                    items={processedEmployeeList}
                    position={currentNavigableItemPosition}
                  />
                </div>
              )}
            />
            <hr />
            <PageNumbersView
              currentPage={currentPage}
              pageNumbers={pageNumbers}
              handlePrevPage={handleLeftArrowPagination}
              handleNextPage={handleRightArrowPagination}
            />
          </div>
        );
      }
    }
  )
);

EmployeesDirectoryView.wrappedComponent.propTypes = {
  uiStore: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    currentNavigableItemPosition: PropTypes.number.isRequired,
    handleLeftArrowPagination: PropTypes.func.isRequired,
    handleRightArrowPagination: PropTypes.func.isRequired,
    viewEmployeeProfile: PropTypes.func.isRequired,
    pageNumbers: PropTypes.array.isRequired
  }),
  employeesStore: PropTypes.shape({
    currentEmployees: PropTypes.array.isRequired,
    handleDepartmentSelect: PropTypes.func.isRequired,
    selectedDepartment: PropTypes.string.isRequired,
    uniqueEmployeeDepartments: PropTypes.array.isRequired
  })
};

export default EmployeesDirectoryView;
