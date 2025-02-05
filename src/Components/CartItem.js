import ItemDetails from "./ItemDetails";

const CartItem = ({ name, number, price, cart, updateCart }) => {
  const deleteItem = () => {
    let newCart = [];

    cart.forEach((item) => {
      if (item.name !== name) {
        newCart = [item, ...newCart];
      }
    });

    updateCart(newCart);
  };

  return (
    <div className="flex justify-between items-center py-6 border-b-neutral-rose50 border-b-2 gap-3">
      <ItemDetails
        name={name}
        number={number}
        price={price}
        totalPrice={true}
      />

      <div>
        <button
          className="border-2 border-neutral-rose400 w-5 h-5 grid place-content-center rounded-full"
          onClick={deleteItem}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#CAAFA7"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default CartItem;
