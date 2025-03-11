import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Async from "./store/Async";

const App = () => {
  return (
    <div>
      
      {/* <Async/> */}
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
