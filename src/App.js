import ProductsContainer from "./Components/ProductsContainer";

import productsData  from "./assets/products.json"

const App = () => {

  // console.log(productsData[0])

  return (
    <main className="bg-neutral-rose50 min-h-screen px-8 py-10 md:p-16 lg:p-20 xl:p-28">
      <ProductsContainer productsData={productsData} />
    </main>
  );
};

export default App;
