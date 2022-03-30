// import CartIcon from "./CartIcon";
import classes from "./BasketButton.css";
import BasketIcon from "../basket_icon.png";

const BasketButton = (props) => {
  const {itemCount} = props;
  return (
    <div className="basketbtn">
      <button>
        <span className={classes.icon}></span>
        Shopping basket <span className={classes.badge}>{itemCount}</span>
      </button>
        <img src={BasketIcon} alt="Shopping basket" />
    </div>
  );
};


export default BasketButton;
