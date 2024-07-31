import ProductsContainer from "./Components/ProductsContainer";

import productsData  from "./assets/products.json"

const App = () => {

  // console.log(productsData[0])

  return (
    <main>
      <ProductsContainer productsData={productsData} />
    </main>
  );
};

export default App;
