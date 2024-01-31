import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getPedalById } from "../../data/services";

const FavouritesGrid = ({ setFavouritesData, favouritesData }) => {
  const [favouritesList, setFavouritesList] = useState([]);

  console.log(favouritesData);

  useEffect(() => {
    // let tmp = favouritesData.map((id) => getPedalById(id));
    let tmp = [];
    favouritesData.forEach((id) =>
      getPedalById(id).then((res) => {
        tmp.push(res);
        setFavouritesList([...tmp]);
      })
    );
    // setFavouritesList(favouritesData.map((id) => getPedalById(id)));

    // setFavouritesList([...tmp]);
  }, [favouritesData]);

  //   let favouritesList = favouritesData.map((id) =>
  //     getPedalById(id).then((res) => console.log(res))
  //   );

  console.log(favouritesList[0]);

  return (
    <div>
      {favouritesList &&
        favouritesList.map((pedal) => {
          return (
            <ProductCard
              key={pedal.id}
              name={pedal.name}
              company={pedal.company}
              description={pedal.description}
              id={pedal.id}
              image={pedal.image}
              maxQuantity={pedal.maxQuantity}
              shortName={pedal.shortName}
              type={pedal.type}
              price={pedal.price}
            />
          );
        })}
    </div>
  );
};

export default FavouritesGrid;
