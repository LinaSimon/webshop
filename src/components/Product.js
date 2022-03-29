import Button from "./BuyButton";

function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="product-container">
      <img src={props.img} alt={props.title} />
      <p>{props.description}</p>
      <p>{props.price} Kr</p>
      <Button>Get !</Button>
    </div>
  );
}

export default Product;
