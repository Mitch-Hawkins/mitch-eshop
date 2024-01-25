import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({
  name,
  company,
  description,
  id,
  image,
  shortName,
  price,
  type,
}) => {
  return (
    <div className={styles.container} onClick={() => console.log(id + " Lmao")}>
      <h3>
        {company} {shortName} {name} {type} Pedal
      </h3>
      <img src={image} />

      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
