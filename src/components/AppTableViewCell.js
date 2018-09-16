import React from "react";

const AppTableViewCell = props => {
  return (
    <div
      onClick={() => props.handleEvent(props.selectorId)}
      className="max-w m-2 p-2 bg-white rounded overflow-hidden border border-white hover:border-blue shadow-md cursor-pointer"
    >
      {props.renderCell()}
    </div>
  );
};

export default AppTableViewCell;
