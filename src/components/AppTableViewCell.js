import React from "react";
const activeCellStyle = {
  border: "2px solid blue"
};
class AppTableViewCell extends React.Component {
  render() {
    const {
      currentItem,
      handleEvent,
      itemKey,
      renderCell,
      selectorId
    } = this.props;
    return (
      <div
        style={currentItem === itemKey ? activeCellStyle : {}}
        className="max-w m-2 p-2 bg-white rounded overflow-hidden border border-white hover:shadow-lg shadow-md cursor-pointer"
        tabIndex="0"
        onClick={() => handleEvent(selectorId, itemKey)}
      >
        {renderCell()}
      </div>
    );
  }
}

export default AppTableViewCell;
