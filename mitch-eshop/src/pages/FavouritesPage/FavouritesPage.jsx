import React from "react";
import FavouritesGrid from "../../containers/FavouritesGrid/FavouritesGrid";

const FavouritesPage = ({ favouritesData, setFavouritesData }) => {
  return (
    <div>
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
