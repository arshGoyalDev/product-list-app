import { useState } from "react";

import ProductControls from "./ProductControls";

const Product = ({ name, category, price, images, cart, updateCart }) => {
  const [number, updateNumber] = useState(0);

  const index = cart.findIndex((item) => item.name === name);

  const addToCart = (action) => {
    const newItem = {
      images,
      name,
      category,
      price,
      number: action === "increment" ? number + 1 : number - 1,
    };

    let newCart = [...cart];

    if (cart.some((item) => item.name === name)) {
      if (newCart[index]) {
        newCart[index].number =
          action === "increment" ? number + 1 : number - 1;
        updateCart(newCart);
      }
    } else {
      newCart = [newItem, ...cart];
      updateCart(newCart);
    }
  };

  return (
    <div>
      <div className="relative flex justify-center">
        <div className="w-full">
          <img
            src={images.tablet}
            alt={name}
            className="rounded-lg w-full hidden md:block xl:hidden"
          />
          <img
            src={images.desktop}
            alt={name}
            className="rounded-lg w-full hidden xl:block"
          />

          <img
            src={images.mobile}
            alt={name}
            className="rounded-lg w-full md:hidden"
          />
        </div>
        <ProductControls
          number={number}
          updateNumber={updateNumber}
          addToCart={addToCart}
          cart={cart}
          updateCart={updateCart}
          name={name}
        />
      </div>

      <div className="flex gap-1 flex-col mt-10">
        <p className="text-neutral-rose400 text-sm">{category}</p>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-primary-red font-semibold text-lg">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
export default Product;
