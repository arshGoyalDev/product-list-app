import React from "react";

const ProductControls = ({
  number,
  updateNumber,
  addToCart,
  cart,
  updateCart,
  name,
}) => {
  const increment = () => {
    let newNumber = number + 1;
    updateNumber(newNumber);
    addToCart("increment");
  };

  const decrement = () => {
    if (number > 1) {
      let newNumber = number - 1;
      updateNumber(newNumber);
      addToCart("decrement");
    } else if (number === 1) {
      let newCart = cart;
      let correctedCart = [];

      newCart.forEach((item) => {
        if (item.name !== name) {
          correctedCart = [item, ...correctedCart];
        }
      });
      updateNumber(number - 1);
      updateCart(correctedCart);
    }
  };

  return (
    <React.Fragment>
      {number === 0 ? (
        <button
          className="hover:text-primary-red flex items-center gap-2 bg-white py-3 px-7 rounded-full absolute -bottom-[20px] z-50 border-[1px] border-neutral-rose400 transition"
          onClick={increment}
        >
          <img src="/images/icon-add-to-cart.svg" alt="icon add to cart" />
          <p className="font-semibold">Add to Cart</p>
        </button>
      ) : (
        <div className="text-white flex items-center gap-10 bg-primary-red py-3 px-7 rounded-full absolute -bottom-[20px] z-50 transition">
          <button
            className="border-[1px] border-white rounded-full py-2 pl-[4.14px] pr-1 grid place-content-center number-change-btn transition hover:bg-white"
            onClick={decrement}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </button>
          <p>{number}</p>
          <button
            className="border-[1px] border-white rounded-full pt-1 pb-[4.26px] pr-[4.357px] pl-1 grid place-content-center transition number-change-btn hover:bg-white"
            onClick={increment}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
            </svg>
          </button>
        </div>
      )}
    </React.Fragment>
  );
};
export default ProductControls;
