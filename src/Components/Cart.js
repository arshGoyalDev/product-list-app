import CartItem from "./CartItem";

const Cart = ({ cart, updateCart }) => {
  return (
    <section className="bg-white rounded-xl p-6 xl:p-7 grid h-fit">
      <h1 className="text-2xl text-primary-red font-extrabold">
        Your Cart (0)
      </h1>
      <div>
        {cart.length !== 0 ? (
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
