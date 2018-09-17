import React from "react";
import { inject, observer } from "mobx-react";
import { navigate } from "@reach/router";

// NavigableView is a component that encapsulates
// keyboard navigation (arrow down, up, enter) of a TableView or List component
class NavigableView extends React.Component {
  componentDidMount() {
    document.addEventListener("keyup", this.nextNavigableItem);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.nextNavigableItem);
  }

  nextNavigableItem = e => {
    e.stopPropagation();
    const {
      uiStore: {
        currentNavigableItemPosition,
        decrementCurrentNavigableItemPosition,
        incrementCurrentNavigableItemPosition
      }
    } = this.props;

    const { items, navigationPath } = this.props;
    // if key press is enter, navigate to respective navigation path
    if (e.keyCode === 13) {
      const { id } = items[currentNavigableItemPosition];
      // if we want to navigate away from a path that requires a URL param
      // to a path that does not require a URL param
      // we check the navigationPath against a "list" of paths that do not require URL params
      const navPathsWithoutParams = ["employees"].find(
        path => path === navigationPath
      );
      navPathsWithoutParams
        ? navigate(`/${navigationPath}`)
        : navigate(`/${navigationPath}/${id}`);
    }
    // if key pressed is up arrow, decrement the currentNavigableItem position
    if (e.keyCode === 38 && currentNavigableItemPosition > 0) {
      decrementCurrentNavigableItemPosition();
    } // if key pressed is down arrow, increment the currentNavigableItem position
    else if (
      e.keyCode === 40 &&
      currentNavigableItemPosition < items.length - 1
    ) {
      incrementCurrentNavigableItemPosition();
    }
  };
  render() {
    const {
      uiStore: { currentNavigableItemPosition }
    } = this.props;
    // might not need to pass currentNavigableItemPosition back up, since it's available in app state
    return <div>{this.props.renderView(currentNavigableItemPosition)}</div>;
  }
}

export default inject("uiStore")(observer(NavigableView));
