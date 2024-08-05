import React from "react";

const ItemDetails = ({ name, number, price, totalPrice }) => {
  return (
    <div className="grid gap-2">
      <h2 className="font-semibold text-lg">{name}</h2>
      <div className="flex gap-2">
        <p className="text-primary-red font-semibold mr-2">{number}x</p>
        <p className="text-neutral-rose400">
          <span className="text-neutral-rose300">@</span>${price.toFixed(2)}
        </p>
        {totalPrice ? (
          <p className="text-neutral-rose500 font-semibold">
            ${(price * number).toFixed(2)}
          </p>
        ) : (
          React.Fragment
        )}
      </div>
    </div>
  );
};
export default ItemDetails;
