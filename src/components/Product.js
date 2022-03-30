import Button from "./BuyButton";

function Product(props) {
  const { product, onAdd, id, addCallback } = props;

  return (
    <div className="product-container">
      <img src={props.img} alt={props.title} />
      <p>{props.description}</p>
      <p>{props.price} Kr</p>
      <Button addCallback={() => addCallback()} id={props.id}>Get !</Button>
    </div>
  );
}

export default Product;
