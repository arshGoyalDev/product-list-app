import CartItem from "./CartItem";

const Cart = ({ cart, updateCart }) => {
  const getTotalNumber = () => {
    let totalNumber = 0;
    cart.forEach((item) => {
      totalNumber += item.number;
    });

    return totalNumber;
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost += item.price * item.number;
    });

    return totalCost;
  };

  return (
    <section className="bg-white rounded-xl p-6 xl:p-7 grid h-fit">
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

            <div className="flex justify-between items-center pt-6">
              <p className="font-semibold">Order Total</p>
              <p className="font-bold text-3xl">${getTotalCost()}</p>
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
