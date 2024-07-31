import { useEffect, useState } from "react";
import productsData from "./assets/products.json";

import ProductsContainer from "./Components/ProductsContainer";

const App = () => {
  const [cart, updateCart] = useState([]);

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <main className="bg-neutral-rose50 min-h-screen px-8 py-10 md:p-16 lg:p-20 xl:p-28">
      <ProductsContainer
        productsData={productsData}
        cart={cart}
        updateCart={updateCart}
      />
    </main>
  );
};

export default App;
