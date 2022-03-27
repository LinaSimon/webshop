import Button from "./BuyButton";

function Product(props) {
  return (
    <div ClassName="product-container">
      <img src={props.img} />
      <p>{props.description}</p>
      <p>{props.price} Kr</p>
      <Button />
    </div>
  );
}

export default Product;
