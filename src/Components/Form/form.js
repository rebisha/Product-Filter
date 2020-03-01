import React from "react";
import "./_form.scss";

const Form = ({ sizeFilter, onChange }) => {
  return (
    <form className="form">
      <h2 className="form-label">Women's Top</h2>
      <select
        className="form-dropdown"
        id="sizes"
        value={sizeFilter}
        onChange={onChange}
      >
        <option value="">Filter by size</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    </form>
  );
};

export default Form;
