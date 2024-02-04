import React, { useEffect, useState } from "react";
import { getAllPedals } from "../../data/services";
import ProductGrid from "../../containers/ProductGrid/ProductGrid";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./HomePage.module.scss";

const HomePage = ({ favouritesData, setFavouritesData }) => {
  const [pedals, setPedals] = useState(null);

  useEffect(() => {
    getAllPedals().then((res) => setPedals(res));
  }, []);

  return (
    <div className={styles.container}>
      {/* Carousel */}
      <Carousel />
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
