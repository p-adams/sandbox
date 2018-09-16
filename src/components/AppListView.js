import React from "react";
import AppListItem from "./AppListItem";
import changeCase from "change-case";

const AppListView = ({ handleEvent, items, currentItem }) => {
  const listItems = items.map((item, key) => {
    return (
      <AppListItem
        handleEvent={handleEvent}
        selectorId={item.id}
        currentItem={currentItem}
        itemKey={key}
        key={key}
        renderCell={() => (
          <React.Fragment>
            {Object.keys(item).map(
              (itemKey, index) =>
                // We want a reference to employee ID but we do
                // not want to show it in the interface
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
    <div className="appTableViewContainer mt-4 p-2 bg-grey-light overflow-auto">
      {listItems}
    </div>
  );
};

export default AppListView;
