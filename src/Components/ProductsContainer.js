import ProductItem from "./ProductItem";

const ProductsContainer = ({ productsData }) => {
  return (
    <section>
      <h1>Desserts</h1>

      <div>
        {productsData.map((data) => {
          return (
            <ProductItem
              key={data.name}
              category={data.category}
              price={data.price}
              images={data.images}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ProductsContainer;
