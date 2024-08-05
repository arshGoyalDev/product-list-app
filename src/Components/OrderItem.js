import ItemDetails from "./ItemDetails";

const OrderItem = ({ name, price, image, number }) => {
  return (
    <div className="flex justify-between items-center py-6 border-b-neutral-rose100 border-b-2 gap-4">
      <div className="flex gap-4 items-center">
        <div className="w-[72px] rounded-lg overflow-hidden">
          <img src={image.thumbnail} alt={name} />
        </div>
        <ItemDetails
          name={name}
          number={number}
          price={price}
          totalPrice={false}
        />
      </div>
      <div className="font-semibold text-[#3b312e] text-xl">
        ${(number * price).toFixed(2)}
      </div>
    </div>
  );
};
export default OrderItem;
