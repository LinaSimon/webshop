import React, { useState } from "react";
import "./App.css";
import CatLogo from "./catlogo.svg";
import Product from "./components/Product";
import BasketButton from "./components/BasketButton";

function App() {
  const [products, setProducts] = React.useState(null);
  const [cartItems, setCartItems] = React.useState(0);

  React.useEffect(() => {

    // get data from api endpoints
    fetch("api/products")
      .then((res) => res.json())
      .then(products => setProducts(products))

  }, []);

  const addCallback = () => {
    setCartItems(cartItems + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>GET stuffed animals !</h1>
        <img src={CatLogo} className="App-logo" alt="Spinning cat" />
        <h2>Webshop</h2>
      </header>

      <BasketButton itemCount={cartItems} />

      <div className="product-container"></div>
      <div className="product">
        {products &&
          products.map((product) => (
            <Product
              addCallback={() => addCallback()}
              key={product._id}
              description={product.description}
              img={product.url}
              price={product.price}
              id={product._id}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
