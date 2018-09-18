import React from "react";
import PropTypes from "prop-types";
const disabledButton = {
  background: "gray"
};
class AppButton extends React.Component {
  render() {
    const { handleClick, btnText, shouldDisable } = this.props;
    return (
      <button
        style={shouldDisable ? disabledButton : {}}
        className="h-12 w-48 m-2 rounded-sm bg-blue active:bg-blue-dark text-white"
        onClick={handleClick}
        disabled={shouldDisable}
      >
        {btnText}
      </button>
    );
  }
}

AppButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  shouldDisable: PropTypes.bool
};

export default AppButton;
