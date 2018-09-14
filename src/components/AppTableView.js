import React from "react";
import AppTableViewItem from "./AppTableViewItem";

const AppTableView = ({ items }) => {
  const tableViewItems = items.map((item, key) => (
    <AppTableViewItem key={key} {...item} />
  ));
  return <div>{tableViewItems}</div>;
};

export default AppTableView;
