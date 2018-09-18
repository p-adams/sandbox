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
    const {
      uiStore: {
        currentNavigableItemPosition,
        decrementCurrentNavigableItemPosition,
        incrementCurrentNavigableItemPosition,
        handleRightArrowPagination,
        handleLeftArrowPagination
      }
    } = this.props;

    const { items, navigationPath } = this.props;
    // if key press is enter, navigate to respective navigation path
    if (e.keyCode === 13) {
      const { id } = items[currentNavigableItemPosition];
      // if we want to navigate away from a path that requires a URL param
      // to a path that does not require a URL param
      // we check the navigationPath against a "list" of paths that do not require URL params
      const navPathsWithoutParams = ["employees", "form"].find(
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
    if (e.keyCode === 40 && currentNavigableItemPosition < items.length - 1) {
      incrementCurrentNavigableItemPosition();
    }
    // if key pressed is left arrow, navigate to previous page
    if (e.keyCode === 37) {
      handleLeftArrowPagination();
    }
    // if key pressed is right arrow, navigate to next page
    if (e.keyCode === 39) {
      handleRightArrowPagination();
    }
  };
  render() {
    return <div>{this.props.renderView()}</div>;
  }
}

export default inject("uiStore")(observer(NavigableView));
