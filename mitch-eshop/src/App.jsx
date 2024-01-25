import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import TestProduct from "./components/TestProduct/TestProduct";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      {/* <TestProduct /> */}
      <BrowserRouter>
        {/* NavBar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Route - Homepage */}
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
