import React from "react";

class AppButton extends React.Component {
  render() {
    const { handleClick, btnText } = this.props;
    return (
      <button
        className="h-12 w-48 m-2 rounded-sm bg-blue active:bg-blue-dark text-white"
        onClick={handleClick}
      >
        {btnText}
      </button>
    );
  }
}

export default AppButton;
