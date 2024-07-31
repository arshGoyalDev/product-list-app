import Product from "./Product";

const ProductsContainer = ({ productsData }) => {
  return (
    <section className="lg:w-[60%]">
      <h1 className="font-bold text-4xl lg:text-[2.75rem]">Desserts</h1>

      <div className="mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {productsData.map((data) => {
          return (
            <Product
              key={data.name}
              name = {data.name}
              category={data.category}
              price={data.price}
              images={data.image}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ProductsContainer;