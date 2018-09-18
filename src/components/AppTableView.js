import React from "react";
import PropTypes from "prop-types";
import AppTableViewCell from "./AppTableViewCell";
import changeCase from "change-case";

const AppTableView = ({ handleEvent, items, position }) => {
  const tableViewCells = items.map((item, key) => {
    return (
      <AppTableViewCell
        handleEvent={handleEvent}
        selectorId={item.id}
        position={position}
        itemKey={key}
        key={key}
        renderCell={() => (
          <React.Fragment>
            {Object.keys(item).map(
              (itemKey, index) =>
                // We want a reference to employee ID but we do
                // not want to show it in the tableview cell
                itemKey !== "id" ? (
                  <div className="text-grey-darker text-sm" key={index}>
                    {changeCase.title(itemKey)}: {item[itemKey]}
                  </div>
                ) : null
            )}
          </React.Fragment>
        )}
      />
    );
  });
  return (
    <div>
      <div className="appTableViewContainer mt-4 p-2 bg-grey-light overflow-y-scroll">
        {tableViewCells}
      </div>
    </div>
  );
};

AppTableView.propTypes = {
  handleEvent: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  position: PropTypes.number.isRequired
};

export default AppTableView;
