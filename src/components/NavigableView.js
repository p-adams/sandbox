import React from "react";
import { navigate } from "@reach/router";

// NavigableView is a component that encapsulates
// keyboard navigation of a TableView or List component
class NavigableView extends React.Component {
  state = {
    currentNavigableItem: 0
  };
  componentDidMount() {
    document.addEventListener("keyup", this.nextNavigableItem);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.nextNavigableItem);
  }
  nextNavigableItem = e => {
    const { currentNavigableItem } = this.state;
    const { items } = this.props;
    if (e.keyCode === 13) {
      const { id } = items[currentNavigableItem];
      navigate(`/profile/${id}`);
    }
    // if key pressed is up arrow, decrement the currentNavigableItem count
    if (e.keyCode === 38 && currentNavigableItem > 0) {
      this.setState(prevState => ({
        currentNavigableItem: prevState.currentNavigableItem - 1
      }));
    } // if key pressed is down arrow, increment the currentNavigableitem count
    else if (e.keyCode === 40 && currentNavigableItem < items.length - 1) {
      this.setState(prevState => ({
        currentNavigableItem: prevState.currentNavigableItem + 1
      }));
    }
  };
  render() {
    return (
      <div onKeyDown={e => this.nextNavigableItem(e)}>
        {this.props.renderView(this.state.currentNavigableItem)}
      </div>
    );
  }
}

export default NavigableView;
