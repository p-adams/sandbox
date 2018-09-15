import React from "react";

// NavigableView is a component that encapsulates
// keyboard navigation of a TableView or List component
class NavigableView extends React.Component {
  render() {
    return <div>{this.props.renderView()}</div>;
  }
}

export default NavigableView;
