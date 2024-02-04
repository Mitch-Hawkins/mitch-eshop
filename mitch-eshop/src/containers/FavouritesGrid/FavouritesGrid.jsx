import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getPedalById } from "../../data/services";
import styles from "./FavouritesGrid.module.scss";

const FavouritesGrid = ({ setFavouritesData, favouritesData }) => {
  const [favouritesList, setFavouritesList] = useState([]);

  console.log(favouritesData);

  useEffect(() => {
    let tmp = [];
    favouritesData.forEach((id) =>
      getPedalById(id).then((res) => {
        tmp.push(res);
        setFavouritesList([...tmp]);
      })
    );
  }, [favouritesData]);

  console.log(favouritesData);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Favourites Page</h1>
      {favouritesData == "" && (
        <p>
          You have no Favourites! Add some products to your favourites by
          clicking the heart icon on the product!
        </p>
      )}
      <div className={styles.gridContainer}>
        {favouritesData.length > 0 &&
          favouritesList.map((pedal, i) => {
            return (
              <ProductCard
                key={favouritesData[i]}
                name={pedal.name}
                company={pedal.company}
                description={pedal.description}
                id={favouritesData[i]}
                image={pedal.image}
                maxQuantity={pedal.maxQuantity}
                shortName={pedal.shortName}
                type={pedal.type}
                price={pedal.price}
                favouritesData={favouritesData}
                setFavouritesData={setFavouritesData}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FavouritesGrid;
