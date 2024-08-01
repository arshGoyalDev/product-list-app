// import { useEffect, useState } from "react";

const Cart = ({ cart, updateCart }) => {
  return (
    <section className="bg-white rounded-xl p-6 xl:p-7 grid gap-10 h-fit">
      <h1 className="text-2xl text-primary-red font-extrabold">
        Your Cart (0)
      </h1>
      <div>
        <div>
          {/* {
           cartItemList()
          } */}
        </div>

        {/* <div className="flex flex-col items-center justify-center gap-5 pb-5">
          <img src="/images/illustration-empty-cart.svg" alt="illustration empty cart" />
          <p className="text-neutral-rose500 font-medium">Your added items will display here</p>
        </div> */}
      </div>
    </section>
  );
};
export default Cart;
