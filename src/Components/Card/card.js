import React from "react";
import "./_card.scss";

import imgSrc from "../../assets/images/product-8.jpg";

const Card = ({ id, name, image, price, isSale, isExclusive }) => {
  return (
    <div className="card" id={id}>
      <img
        className="card-img"
        src={`../../assets/images/${image}`}
        alt="products"
      />
      {isSale ? <span className="card-feature sale">Sale</span> : " "}

      {isExclusive ? (
        <span className="card-feature exclusive">Exclusive</span>
      ) : (
        ""
      )}

      <div className="card-body">
        <h3 className="card-title"> {name} </h3>
        <h1 className="card-price"> {price} </h1>
      </div>
    </div>
  );
};

export default Card;
