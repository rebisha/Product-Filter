// global modules
import React from "react";
import { string, bool } from "prop-types";
// components
import Heading from "../Heading/Heading";
// styles
import "./card.scss";

const Card = ({ productImage, productName, price, isExclusive, isSale }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img
          className="card-img"
          src={require(`../../assets/images/${productImage}`)}
          alt="products"
        />

        {isSale ? <span className="card-feature sale">Sale</span> : " "}

        {isExclusive ? (
          <span className="card-feature exclusive">Exclusive</span>
        ) : (
          ""
        )}

        <div className="card-body">
          <Heading>{productName}</Heading>
          <Heading className="price">{price}</Heading>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  productImage: string,
  productName: string,
  price: string,
  isSale: bool,
  isExclusive: bool
};

export default Card;
