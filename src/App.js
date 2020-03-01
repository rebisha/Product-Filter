import React, { useState, useEffect } from "react";

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
        var res = fetch("https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3");
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

  return (
    <div className="container">
      <Form
        onChange={handleChange}
        product={products}
        sizeFilter={sizeFilter}
      />
      <div className="row">
        {products.map(item => {
          if (JSON.stringify(item.size).indexOf(sizeFilter) <= 1) {
            return (
              <Card
                id={item.index}
                image={item.productImage}
                isExclusive={item.isExclusive}
                isSale={item.isSale}
                name={item.productName}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default App;
