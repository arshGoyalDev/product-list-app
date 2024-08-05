const OrderTotal = ({cart}) => {
  const getTotalCost = () => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost += item.price * item.number;
    });

    return totalCost;
  };

  return (
    <div className="flex justify-between items-center py-6">
      <p className="font-semibold">Order Total</p>
      <p className="font-bold text-3xl">${getTotalCost()}</p>
    </div>
  );
};
export default OrderTotal;
