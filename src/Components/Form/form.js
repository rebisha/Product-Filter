// global modules
import React from "react";
import { func } from "prop-types";
// components
import Heading from "../Heading/Heading";
// styles
import "./form.scss";

const Form = ({ onChange }) => {
  return (
    <div className="row">
      <form className="form">
        <Heading>Women&apos;s Top</Heading>
        <select className="form-dropdown" id="sizes" onChange={onChange}>
          <option value="">Filter by size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </form>
    </div>
  );
};

Form.propTypes = {
  onChange: func
};

export default Form;
