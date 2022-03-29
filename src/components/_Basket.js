import React from "react";
import "../App.css";
import BasketIcon from "../basket_icon_small.png";

function Basket(props) {
    const {cartItems, onAdd} = props;
    return (
      <aside className="aside">
        <h3>Shopping basket</h3>
        <img src={BasketIcon} alt="Shopping basket" />
        <div>
            {cartItems.length === 0 && <div>Basket is empty</div>}
        </div>
      </aside>
    );
}

export default Basket;