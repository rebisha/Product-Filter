// global modules
import React from "react";
import { string } from "prop-types";

const Heading = ({ className, children }) => {
  return <h1 className={`title ${className} `}>{children}</h1>;
};

Heading.propTypes = {
  className: string,
  children: string
};

export default Heading;
