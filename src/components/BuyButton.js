

function BuyButton(props) {
  const {id, addCallback} = props;

  // Use productId to handle product/cart items..
  const onAdd = (productId) => {
    addCallback(1);
  }

  return (
    <div>
      <button onClick={() => onAdd(id)}>Get !</button>
    </div>
  );
}

export default BuyButton;
