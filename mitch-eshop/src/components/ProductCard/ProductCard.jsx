import React from "react";
import styles from "./ProductCard.module.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  name,
  company,
  description,
  id,
  image,
  maxQuantity,
  shortName,
  price,
  type,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      onClick={() => navigate(`/product/${id}`)}
    >
      <h3>
        {company} {shortName} {name} {type} Pedal
      </h3>
      <img src={image} />

      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
