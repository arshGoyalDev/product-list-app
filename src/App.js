import productsData from "./assets/products.json";

import ProductsContainer from "./Components/ProductsContainer";

const App = () => {
  return (
    <main className="bg-neutral-rose50 min-h-screen px-8 py-10 md:p-16 lg:p-20 xl:p-28">
      <ProductsContainer productsData={productsData} />
    </main>
  );
};

export default App;
