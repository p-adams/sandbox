import React from "react";
import AppTableViewCell from "./AppTableViewCell";
import changeCase from "change-case";

const AppTableView = ({ handleEvent, items }) => {
  const tableViewCells = items.map((item, key) => {
    return (
      <AppTableViewCell
        handleEvent={handleEvent}
        selectorId={item.id}
        key={key}
        renderCell={() => (
          <React.Fragment>
            {Object.keys(item).map(
              (key, index) =>
                // We want a reference to employee ID but we do
                // not want to show it in the interface
                key !== "id" ? (
                  <div className="text-grey-darker text-sm" key={index}>
                    {changeCase.title(key)}: {item[key]}
                  </div>
                ) : null
            )}
          </React.Fragment>
        )}
      />
    );
  });
  return (
    <div className="appTableViewContainer mt-4 p-2 bg-grey-light overflow-auto">
      {tableViewCells}
    </div>
  );
};

export default AppTableView;
