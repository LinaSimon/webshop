import Button from "./BuyButton";

function Product(props) {
  const { product, onAdd, id } = props;
  return (
    <div className="product-container">
      <img src={props.img} alt={props.title} />
      <p>{props.description}</p>
      <p>{props.price} Kr</p>
      <Button id={props.id}>Get !</Button>
    </div>
  );
}

export default Product;
