import React, { useEffect, useState } from "react";
import heartOutline from "../../assets/icons8-heart-50.png";
import heartFilled from "../../assets/icons8-heart-50-filled.png";
import styles from "./FavouriteButton.module.scss";

const FavouriteButton = ({ id, favouritesData, setFavouritesData }) => {
  const [buttonFill, setButtonFill] = useState(heartOutline);

  useEffect(() => {
    if (favouritesData.includes(id)) {
      setButtonFill(heartFilled);
    } else {
      setButtonFill(heartOutline);
    }
  }, [favouritesData]);

  const handleFavouritesToggle = () => {
    if (favouritesData.includes(id)) {
      setButtonFill(heartOutline);
      handleRemoveFromFavourites();
    } else {
      setButtonFill(heartFilled);
      handleAddToFavourites();
    }
  };

  const handleAddToFavourites = () => {
    if (!favouritesData.includes(id)) {
      setFavouritesData([...favouritesData, id]);
      localStorage.setItem(
        "favouriteItems",
        JSON.stringify([...favouritesData, id])
      );
    }
  };

  const handleRemoveFromFavourites = () => {
    let tmp = [...favouritesData];
    let indexOfItemToBeRemoved = tmp.indexOf(id);
    if (indexOfItemToBeRemoved < 0) {
      return;
    } else {
      tmp.splice(indexOfItemToBeRemoved, 1);
      setFavouritesData(tmp);
      localStorage.setItem("favouriteItems", JSON.stringify(tmp));
    }
  };

  return (
    <div onClick={handleFavouritesToggle}>
      {/* <button>Heart</button> */}
      <img src={buttonFill} className={styles.heart} />
    </div>
  );
};

export default FavouriteButton;
