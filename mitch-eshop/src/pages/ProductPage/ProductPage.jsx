import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPedalById } from "../../data/services";
import FavouriteButton from "../../components/FavouriteButton/FavouriteButton";

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
  const [pedalFullName, setPedalFullName] = useState("");
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
        setPedalFullName(
          `${res.company}  ${res.shortName} ${res.name} ${res.pedalType} Pedal`
        );
      })
      .catch((e) => console.log(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    let cartObj = {
      id: id,
      name: productData.name,
      price: productData.price,
      quantity: JSON.parse(quantity),
      variant: variantData.variantName,
      image: variantData.variantImage || productData.image,
      maxQuantity: productData.maxQuantity,
    };

    if (
      !cartData.some((item) => item.id == id) ||
      !cartData.some((item) => item.variant == cartObj.variant)
    ) {
      setCartData((cartData) => [...cartData, cartObj]);
      localStorage.setItem("cartItems", JSON.stringify([...cartData, cartObj]));
    } else {
      let duplicateItemIndex = cartData.findIndex(
        (item) => item.id == id && item.variant == cartObj.variant
      );
      console.log(duplicateItemIndex);
      if (
        cartObj.quantity + cartData[duplicateItemIndex].quantity >
        cartObj.maxQuantity
      ) {
        cartObj.quantity = cartObj.maxQuantity;
      } else {
        cartObj.quantity += cartData[duplicateItemIndex].quantity;
      }
      let tempArr = cartData.filter(
        (item) => (item.id !== cartObj.id) + (item.variant !== cartObj.variant)
      );
      tempArr.push(cartObj);
      console.log(tempArr);
      setCartData(tempArr);
      localStorage.setItem("cartItems", JSON.stringify(tempArr));
    }
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
            {(variantData.variantTitle &&
              `${pedalFullName} (${variantData.variantName})`) ||
              pedalFullName}
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
      <FavouriteButton
        favouritesData={favouritesData}
        setFavouritesData={setFavouritesData}
        id={id}
      />
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
