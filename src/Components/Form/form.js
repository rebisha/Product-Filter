import React from "react";

import "./_form.scss";
import { isNull } from "util";

const Form = ({ product, sizeFilter, onChange }) => {
  const productSize = product.map(item => item.size);

  /* const productFilter = productSize.map((subitem, i) => {
    // const subitem1 = new Set(subitem);
    return <option value={subitem}>{subitem[0]}</option>;
  }); */

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
