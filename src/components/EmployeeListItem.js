import React from "react";
// A simple name parsing module
// that handles parsing fullnames
// in format retrieved from API
// Source: https://www.npmjs.com/package/another-name-parser
import parser from "another-name-parser";
class EmployeeListItem extends React.Component {
  render() {
    const { job_titles, name } = this.props;
    const { first, last } = parser(name);
    return (
      <div className="max-w-sm m-2 p-2 bg-white rounded overflow-hidden shadow-md">
        <h5>Firstname: {first}</h5>
        <h5>Lastname: {last}</h5>
        <h5>Job Title: {job_titles}</h5>
      </div>
    );
  }
}

export default EmployeeListItem;
