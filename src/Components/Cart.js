import { Link, useLocation } from "react-router-dom";
import CartItem from "./CartItem";
import OrderTotal from "./OrderTotal";

const Cart = ({ cart, updateCart }) => {
  const location = useLocation();

  const getTotalNumber = () => {
    let totalNumber = 0;
    cart.forEach((item) => {
      totalNumber += item.number;
    });

    return totalNumber;
  };

  return (
    <section className="bg-white rounded-xl p-6 xl:p-7 grid h-fit lg:fixed lg:top-[75px] lg:right-[75px] xl:top-[70px] xl:right-[70px] xxl:top-28 xxl:right-28 lg:w-[35%] xl:w-[28%] xxl:w-[25%]">
      <h1 className="text-2xl text-primary-red font-extrabold">
        Your Cart ({getTotalNumber()})
      </h1>
      <div>
        {cart.length !== 0 ? (
          <div>
            <div>
              {cart.map((item) => {
                return (
                  <CartItem
                    key={item.name}
                    name={item.name}
                    number={item.number}
                    price={item.price}
                    cart={cart}
                    updateCart={updateCart}
                  />
                );
              })}
            </div>

            <OrderTotal cart={cart} />

            <div className="bg-neutral-rose50 py-5 px-6 flex justify-center items-center gap-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  fill="#1EA575"
                  d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
                />
                <path
                  fill="#1EA575"
                  d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
                />
              </svg>
              <p className="text-neutral-rose900">
                This is a <span className="font-bold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>

            <div>
              <Link to={"/confirm-order"} state={{ background: location }}>
                <button className="bg-primary-red text-white py-4 grid place-content-center w-full mt-7 rounded-full hover:bg-[#83341a] transition">
                  Confirm Order
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-5 pb-5 mt-12">
            <img
              src="/images/illustration-empty-cart.svg"
              alt="illustration empty cart"
            />
            <p className="text-neutral-rose500 font-medium">
              Your added items will display here
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
export default Cart;
