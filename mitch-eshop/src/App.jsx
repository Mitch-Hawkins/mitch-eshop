import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import NavBar from "./containers/NavBar/NavBar";

function App() {
  const [cartData, setCartData] = useState([]);
  const [favouritesData, setFavouritesData] = useState([]);

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
