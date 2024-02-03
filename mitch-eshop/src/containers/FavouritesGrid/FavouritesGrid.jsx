import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getPedalById } from "../../data/services";

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
    <div>
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
  );
};

export default FavouritesGrid;
