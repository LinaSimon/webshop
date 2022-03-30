// import CartIcon from "./CartIcon";
import classes from "./BasketButton.css";
import BasketIcon from "../basket_icon.png";

const BasketButton = (props) => {
  return (
    <button className="basketbtn">
      <span className={classes.icon}></span>
      <span>Shopping basket</span>
      <img src={BasketIcon} alt="Shopping basket " />
      <span className={classes.badge}> 3</span>
    </button>
  );
};


export default BasketButton;
