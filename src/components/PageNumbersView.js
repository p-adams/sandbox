import React from "react";
import AppButton from "./AppButton";
const activePageNumber = {
  color: "#2779bd",
  fontSize: "18px"
};
class PageNumbersView extends React.Component {
  render() {
    const {
      currentPage,
      pageNumbers,
      handlePrevPage,
      handleNextPage
    } = this.props;
    return (
      <div className="w-full">
        <div className="flex justify-center">
          <h4>
            Showing {currentPage} of {pageNumbers.length} page(s)
          </h4>
        </div>
        <div className="flex justify-center">
          <AppButton btnText="prev" handleClick={() => handlePrevPage()} />
          <AppButton btnText="next" handleClick={() => handleNextPage()} />
        </div>
        <h5 className="text-yellow-dark text-center mt-2">
          HINT: You can use left and right arrows to navigate pages!
        </h5>
      </div>
    );
  }
}

export default PageNumbersView;
