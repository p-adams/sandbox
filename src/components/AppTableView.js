import React from "react";
import AppTableViewCell from "./AppTableViewCell";

const AppTableView = ({ items }) => {
  const tableViewItems = items.map((item, key) => (
    <AppTableViewCell key={key} {...item} />
  ));
  return <div>{tableViewItems}</div>;
};

export default AppTableView;
