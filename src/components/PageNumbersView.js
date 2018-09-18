import React from "react";
const activePageNumber = {
  color: "#2779bd",
  fontSize: "18px"
};
class PageNumbersView extends React.Component {
  render() {
    const { currentPage, pageNumbers, handlePagination } = this.props;
    return (
      <div>
        <div className="w-full mt-2 flex justify-center">
          {pageNumbers.map(number => {
            return (
              <li
                style={currentPage === number ? activePageNumber : {}}
                className="ml-4 cursor-pointer"
                key={number}
                onClick={() => handlePagination(number)}
              >
                {number}
              </li>
            );
          })}
        </div>
        <h5 className="text-yellow-dark text-center mt-2">
          HINT: Use left and right arrows to navigate pages!
        </h5>
      </div>
    );
  }
}

export default PageNumbersView;
