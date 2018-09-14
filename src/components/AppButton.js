import React from "react";

class AppButton extends React.Component {
  render() {
    const { btnText } = this.props;
    return (
      <button className="h-12 w-48 m-2 bg-blue text-white">{btnText}</button>
    );
  }
}

export default AppButton;
