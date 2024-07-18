import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <div className="flex flex-col items-center mx-auto container gap-9">
      <h1 className="text-6xl font-extrabold text-center mt-8">
        <span className="text-orange-600">
          Discover Your Next Adventure with AI:
        </span>
        Personalized Itineraries at your fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interest and budget.
      </p>
      <Link to={'/create-trip'}>
      <Button>Get Started - It's Free</Button>
      </Link>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
