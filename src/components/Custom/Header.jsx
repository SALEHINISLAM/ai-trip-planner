import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";

const Header = (props) => {
  return (
    <div className="flex items-center justify-between container mx-auto shadow-sm">
      <div className="flex flex-row h-16 items-center">
        <img
          src="/trip-planner-logo.png"
          alt=""
          className="h-full p-2"
        />
        <h2 className="text-4xl font-bold">Trip Planner</h2>
      </div>
      <div className="">
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
