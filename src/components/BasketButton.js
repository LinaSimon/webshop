import CartIcon from "./CartIcon";
import classes from "./BasketButton.css";

const BasketButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your shopping cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};


export default BasketButton;
