import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPedalById } from "../../data/services";

const ProductPage = ({
  cartData,
  setCartData,
  favouritesData,
  setFavouritesData,
}) => {
  const pathVariables = useParams();
  const id = pathVariables.id;

  const [productData, setProductData] = useState(null);
  const [variantData, setVariantData] = useState(null);
  const [loading, setLoading] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setQuantity(JSON.parse(e.target.value));
  };

  const handleIncrement = () => {
    if (quantity + 1 > productData.maxQuantity) {
      return;
    } else {
      setQuantity(JSON.parse(quantity) + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity - 1 < 1) {
      return;
    } else {
      setQuantity(JSON.parse(quantity) - 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    getPedalById(id)
      .then((res) => {
        setProductData(res);
        setVariantData(res.variants[0]);
      })
      .catch((e) => console.log(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    localStorage.setItem("favouriteItems", JSON.stringify(favouritesData));
  }, [favouritesData]);

  const handleAddToCart = () => {
    let cartObj = {
      id: id,
      name: productData.name,
      price: productData.price,
      quantity: JSON.parse(quantity),
      variant: variantData.variantName,
    };

    if (
      !cartData.some((item) => item.id == id) ||
      !cartData.some((item) => item.variant == cartObj.variant)
    ) {
      setCartData((cartData) => [...cartData, cartObj]);
    } else {
      let duplicateItemIndex = cartData.findIndex((item) => item.id == id); //this is where variant glitch is
      console.log(duplicateItemIndex);
      cartObj.quantity += cartData[duplicateItemIndex].quantity;
      let tempArr = cartData.filter((item) => item.id !== cartObj.id);
      tempArr.push(cartObj);
      console.log(tempArr);
      setCartData(tempArr);
    }
  };

  const handleAddToFavourites = () => {
    if (!favouritesData.includes(id)) {
      setFavouritesData([...favouritesData, id]);
    }
  };

  const handleRemoveFromFavourites = () => {
    let tmp = [...favouritesData];
    tmp.splice(tmp.indexOf(id), 1);
    setFavouritesData(tmp);
  };

  const handleVariantChange = (selectObjectIndex) => {
    console.log(selectObjectIndex);
    setVariantData(productData.variants[selectObjectIndex]);
  };

  return (
    <main>
      {/* Product Card */}
      {loading && <p>Loading...</p>}
      {!loading && productData && (
        <>
          <h1>
            {variantData.variantTitle ||
              `${productData.company}  ${productData.shortName} ${productData.name} ${productData.pedalType} pedal`}
          </h1>
          <img src={variantData.variantImage || productData.image} />
          <h2>${productData.price}.00 AUD</h2>
          <p>{productData.description}</p>
        </>
      )}
      {/* Quantity */}
      <button onClick={handleDecrement}>-</button>
      <input type="number" onChange={handleInputChange} value={quantity} />
      <button onClick={handleIncrement}>+</button>
      {/* Add To Cart Button */}
      <button
        onClick={() => {
          handleAddToCart();
        }}
      >
        Add To Cart
      </button>
      {/* Favourite Button */}
      <button
        onClick={() => {
          handleAddToFavourites();
        }}
      >
        Add To Favourites
      </button>
      <button
        onClick={() => {
          handleRemoveFromFavourites();
        }}
      >
        Remove From Favourites
      </button>
      {/* Variants */}
      {productData && (
        <select
          onChange={(e) => handleVariantChange(e.target.options.selectedIndex)}
        >
          {productData.variants.map((variant) => {
            return <option value={variant}>{variant.variantName}</option>;
          })}
        </select>
      )}
    </main>
  );
};

export default ProductPage;
