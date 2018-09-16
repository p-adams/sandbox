import React from "react";
const activeItemStyle = {
  border: "2px solid blue"
};
class AppListItem extends React.Component {
  render() {
    const {
      currentItem,
      handleEvent,
      itemKey,
      renderItem,
      selectorId
    } = this.props;
    return (
      <div
        style={currentItem === itemKey ? activeItemStyle : {}}
        className="max-w m-2 p-2 bg-white overflow-hidden border border-grey-dark shadow-lg cursor-pointer"
        tabIndex="0"
        onClick={() => handleEvent(selectorId)}
      >
        {renderItem()}
      </div>
    );
  }
}

export default AppListItem;
