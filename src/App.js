import React, { Fragment, useState, useEffect } from "react";

// components
import Card from "./Components/Card/card";
import Form from "./Components/Form/form";

import "./App.scss";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [sizeFilter, setSizeFilter] = useState();

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const res = fetch("https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3");

        res
          .then(response => response.json())
          .then(response => setProducts(response));
      } catch (e) {
        console.log(e);
        setIsFetching(e);
      }
    };

    fetchProduct();
  }, []);

  const handleChange = e => {
    setSizeFilter(e.target.value);
  };
  console.log("@@ sizeFilter", sizeFilter);

  return (
    <div className="container">
      <Form
        product={products}
        sizeFilter={sizeFilter}
        onChange={handleChange}
      />
      <div className="row">
        {products.map(item => {
          console.log(JSON.stringify(item.size));
          if (JSON.stringify(item.size).indexOf(sizeFilter) <= 0) {
            return (
              <Card
                id={item.index}
                name={item.productName}
                image={item.productImage}
                price={item.price}
                isSale={item.isSale}
                isExclusive={item.isExclusive}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default App;
