

function BuyButton(props) {
  const {id} = props;
  // const id = props.id;

  const onAdd = (productId) => {
    console.log(productId);
  }

  return (
    <div>
      <button onClick={() => onAdd(id)}>Get !</button>
    </div>
  );
}

export default BuyButton;
