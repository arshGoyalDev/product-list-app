const OrderItem = ({name, price, image, number}) => {
  return (
    <div className="flex justify-between items-center py-6 border-b-neutral-rose100 border-b-2 gap-4">
      <div className="flex gap-4 items-center">
      <div className="w-[72px] rounded-lg overflow-hidden">
        <img src={image.thumbnail} alt={name} />
      </div>
      <div className="grid gap-3">
        <p className="font-bold text-lg text-[#3b312e]">{name}</p>
        <div className="flex gap-2">
          <p className="text-primary-red font-semibold mr-2">{number}x</p>
          <p className="text-neutral-rose400">
            <span className="text-neutral-rose300">@</span>${price.toFixed(2)}
          </p>
        </div>
      </div>

      </div>
      <div className="font-semibold text-[#3b312e] text-xl">
        ${(number * price).toFixed(2)}
      </div>
    </div>
  )
}
export default OrderItem