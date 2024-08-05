import React from "react";

import { useEffect } from "react";

import ProductsContainer from "../Components/ProductsContainer";
import Cart from "../Components/Cart";

import productsData from "../assets/products.json";


const Home = ({cart, updateCart}) => {

  useEffect(() => {
    document.body.style = "";
  })


  return (
    <React.Fragment>
      <ProductsContainer
        productsData={productsData}
        cart={cart}
        updateCart={updateCart}
      />
      <Cart cart={cart} updateCart={updateCart} />
    </React.Fragment>
  );
};
export default Home;
