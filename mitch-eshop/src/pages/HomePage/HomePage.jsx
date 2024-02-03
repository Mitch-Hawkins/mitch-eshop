import React, { useEffect, useState } from "react";
import { getAllPedals } from "../../data/services";
import ProductGrid from "../../containers/ProductGrid/ProductGrid";

const HomePage = ({ favouritesData, setFavouritesData }) => {
  const [pedals, setPedals] = useState(null);

  useEffect(() => {
    getAllPedals().then((res) => setPedals(res));
  }, []);

  return (
    <div>
      {/* Carousel */}
      {/* Product Results List of Cards*/}
      {pedals && (
        <ProductGrid
          pedals={pedals}
          favouritesData={favouritesData}
          setFavouritesData={setFavouritesData}
        />
      )}
    </div>
  );
};

export default HomePage;
