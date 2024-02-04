import React from "react";
import styles from "./ProductCard.module.scss";
import { useNavigate } from "react-router-dom";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

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
  favouritesData,
  setFavouritesData,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.headerContainer}>
          {company} {shortName} {name} {type} Pedal
          <FavouriteButton
            id={id}
            favouritesData={favouritesData}
            setFavouritesData={setFavouritesData}
          />
        </h3>
        <div
          className={styles.imageContainer}
          onClick={() => navigate(`/product/${id}`)}
        >
          <img src={image} className={styles.pedalImage} />
          <p>${price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
