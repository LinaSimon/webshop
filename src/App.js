import React from "react";
import "./App.css";
import CatLogo from "./catlogo.svg";
import Cat from "./images/cat2.png";
import Dog from "./images/dog2.jpg";
import Unicorn from "./images/unicorn.png";
import Dino from "./images/dino.png";
import FirstPage from "./components/FirstPage";
import { getProducts } from "./api/getProducts";
// Fetching data from /api endpoint.
// Making simple GET request using Fetch API to backend
// and then have data returned as JSON.
function App() {
  const [data, setData] = React.useState(null);
  const [products, setProducts] = React.useState(null);
  // HTTP request using useEffect
  React.useEffect(() => {
    const p = getProducts();
    setProducts(p);
    console.log(p);
    // fetch("http://localhost:3001")
    //   .then((res) => res.json())
    //   .then((data) => setData(data.message));
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <h1>GET stuffed animals !</h1>
        <img src={CatLogo} className="App-logo" alt="logo" />
      </header>
      <h1>Webshop</h1>
      <div className="Products">
        {products.map(product => {
          <FirstPage description="Cat" img={Cat} />;
        })}
        {/* <FirstPage description="Cat" img={Cat} />
        <FirstPage description="Dog" img={Dog} />
        <FirstPage description="Dino" img={Dino} />
        <FirstPage description="Unicorn" img={Unicorn} /> */}
      </div>
      <div className="CartItems"></div>
    </div>
  );
}

export default App;
