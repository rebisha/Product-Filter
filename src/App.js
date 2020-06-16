// global modules
import React, { useState } from "react";
import { connect } from "react-redux";
import { array } from "prop-types";
// components
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
// redux
import { selectProductItem } from "./Redux/Product/selector";
// styles
import "./App.scss";

const App = ({ products }) => {
  const [sizeFilter, setSizeFilter] = useState("");

  const handleChange = e => {
    setSizeFilter(e.target.value);
  };

  const cardWithoutFilter = products.map(({ index, ...productProps }) => (
    <Card key={index} {...productProps} />
  ));

  const cardWithFilter = products
    .filter(item => item.size.includes(sizeFilter))
    .map(({ index, ...productProps }) => {
      return <Card key={index} {...productProps} />;
    });

  return (
    <div className="container">
      <Form onChange={handleChange} />

      <div className="row">
        {sizeFilter ? cardWithFilter : cardWithoutFilter}
      </div>
    </div>
  );
};

App.propTypes = {
  products: array
};

const mapStateToProps = state => ({
  products: selectProductItem(state)
});

export default connect(mapStateToProps)(App);
