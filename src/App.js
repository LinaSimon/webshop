import React, { useState } from "react";
import "./App.css";
import CatLogo from "./catlogo.svg";
import Product from "./components/Product";
import BasketButton from "./components/BasketButton";
import Footer from "./components/Footer";
import cartItems from "./components/CartItems";

// Fetching data from /api endpoint.
// Making simple GET request using Fetch API to backend
// and then have data returned as JSON.
function App() {
  const [products, setProducts] = React.useState(null);
  // Putting products in shopping cart. UseState Hook
  // const [cartItems, setCartItems] = React.useState([]);
  /*const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };*/
  // HTTP request using useEffect
  React.useEffect(() => {

    fetch("api/products")
      .then((res) => res.json())
      .then(products => setProducts(products))

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>GET stuffed animals !</h1>
        <img src={CatLogo} className="App-logo" alt="Spinning cat" />
        <h2>Webshop</h2>
      </header>

      <BasketButton />

      <div className="product-container"></div>
      <div className="product">
        {products &&
          products.map((product) => (
            <Product key={product._id}
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
