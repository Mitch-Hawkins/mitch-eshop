import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import NavBar from "./containers/NavBar/NavBar";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";

function App() {
  const [cartData, setCartData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);

  // const pullCartFromStorage = () => {
  //   setCartData(JSON.parse(localStorage.getItem("cartItems"))).then((res) => {
  //     console.log(res);
  //   });
  // };

  // const pullFavouritesFromStorage = () => {
  //   setFavouritesData(JSON.parse(localStorage.getItem("favouriteItems")));
  // };

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cartItems")));
    console.log(JSON.parse(localStorage.getItem("cartItems")));
    setFavouritesData(JSON.parse(localStorage.getItem("favouriteItems")));
    console.log(JSON.parse(localStorage.getItem("favouriteItems")));
  }, []);

  //useEffect here to grab initial favourites data from the local storage

  return (
    <>
      {/* <TestProduct /> */}
      <BrowserRouter>
        <NavBar />
        {/* NavBar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Route - Homepage */}
          <Route
            path="/product/:id"
            element={
              <ProductPage
                cartData={cartData}
                setCartData={setCartData}
                favouritesData={favouritesData}
                setFavouritesData={setFavouritesData}
              />
            }
          />
          {/* Route - Product Page */}
          <Route
            path="/favourites"
            element={
              <FavouritesPage
                favouritesData={favouritesData}
                setFavouritesData={setFavouritesData}
              />
            }
          />
          {/* Route - Favourites Page */}
          {/* Route - Cart */}
          {/* Routes */}
        </Routes>
      </BrowserRouter>
      {/* Footer */}
    </>
  );
}

export default App;
