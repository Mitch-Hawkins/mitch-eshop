import React from "react";
import FavouritesGrid from "../../containers/FavouritesGrid/FavouritesGrid";
import styles from "./FavouritesPage.module.scss";

const FavouritesPage = ({ favouritesData, setFavouritesData }) => {
  return (
    <div className={styles.container}>
      {/* Product Results List of Cards*/}
      {/* Return Link */}
      <FavouritesGrid
        favouritesData={favouritesData}
        setFavouritesData={setFavouritesData}
      />
    </div>
  );
};

export default FavouritesPage;
