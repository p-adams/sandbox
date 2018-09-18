import React from "react";
import PropTypes from "prop-types";
const activeCellStyle = {
  border: "2px solid blue"
};
class AppTableViewCell extends React.Component {
  componentDidMount() {
    this.tableViewCell.focus();
  }
  render() {
    const {
      position,
      handleEvent,
      itemKey,
      renderCell,
      selectorId
    } = this.props;
    return (
      <div
        ref={cell => (this.tableViewCell = cell)}
        style={position === itemKey ? activeCellStyle : {}}
        className="max-w m-2 p-2 bg-white rounded overflow-hidden border border-white hover:shadow-lg shadow-md cursor-pointer"
        tabIndex="0"
        onClick={() => handleEvent(selectorId, itemKey)}
      >
        {renderCell()}
      </div>
    );
  }
}

AppTableViewCell.propTypes = {
  position: PropTypes.number.isRequired,
  handleEvent: PropTypes.func.isRequired,
  itemKey: PropTypes.number.isRequired,
  renderCell: PropTypes.func.isRequired,
  selectorId: PropTypes.number.isRequired
};

export default AppTableViewCell;
