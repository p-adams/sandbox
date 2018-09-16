import React from "react";
import { Link } from "@reach/router";

const NotFoundView = () => {
  return (
    <div className="viewPaneHeight w-full bg-white">
      <h2 className="text-center mt-2 text-grey">404</h2>
      <div className="flex">
        <div className="w-1/3" />
        <div className="w-2/3 mt-8 text-center">
          <h3>Oops, Nothing here!</h3>
          <p className="text-left mt-4">
            If you are trying to view an employee profile, click on an
            employee's details on{" "}
            <Link to="/employees">View all employees</Link> page.
          </p>
          <p className="text-left mt-4">
            If you want to add a new employee to the database, visit{" "}
            <Link to="/form">Add employee</Link> page.
          </p>
        </div>
        <div className="w-1/3" />
      </div>
    </div>
  );
};

export default NotFoundView;
