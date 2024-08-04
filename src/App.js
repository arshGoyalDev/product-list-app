import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import Home from "./Pages/Home";
import ConfirmOrder from "./Pages/ConfirmOrder";

const App = () => {
  const [cart, updateCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <main className="grid gap-7 lg:grid-cols-3 xl:grid-cols-4 bg-neutral-rose50 min-h-screen px-8 py-10 md:p-16 lg:p-[75xp] xl:p-[70px] xxl:p-28">
      <Home cart={cart} updateCart={updateCart} />
      <Routes>
        <Route path="/confirm-order" element={<ConfirmOrder cart={cart} updateCart={updateCart} />} />
      </Routes>
    </main>
  );
};

export default App;