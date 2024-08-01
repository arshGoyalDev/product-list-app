import { useEffect, useState } from "react";
import productsData from "./assets/products.json";

import ProductsContainer from "./Components/ProductsContainer";
import Cart from "./Components/Cart";

const App = () => {
  const [cart, updateCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <main className="grid gap-7 lg:grid-cols-3 xl:grid-cols-4 bg-neutral-rose50 min-h-screen px-8 py-10 md:p-16 lg:p-[75xp] xl:p-[90px] xxl:p-28">
      <ProductsContainer
        productsData={productsData}
        cart={cart}
        updateCart={updateCart}
      />
      <Cart cart={cart} updateCart={updateCart} />
    </main>
  );
};

export default App;
