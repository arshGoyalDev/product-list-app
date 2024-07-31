const Product = ({ name, category, price, images }) => {
  return (
    <div>
      <div className="relative flex justify-center">
        <div className="w-full">
          <img
            src={images.tablet}
            alt={name}
            className="rounded-lg w-full hidden md:block xl:hidden"
          />
          <img
            src={images.desktop}
            alt={name}
            className="rounded-lg w-full hidden xl:block"
          />

          <img
            src={images.mobile}
            alt={name}
            className="rounded-lg w-full md:hidden"
          />
        </div>
        <button className="hover:text-primary-red flex items-center gap-2 bg-white py-3 px-7 rounded-full absolute -bottom-[20px] z-50 border-[1px] border-neutral-rose400 transition">
          <img src="/images/icon-add-to-cart.svg" alt="icon add to cart" />
          <p className="font-semibold">Add to Cart</p>
        </button>
      </div>

      <div className="flex gap-1 flex-col mt-10">
        <p className="text-neutral-rose400 text-sm">{category}</p>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-primary-red font-semibold text-lg">${price}</p>
      </div>
    </div>
  );
};
export default Product;
