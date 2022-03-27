import Button from "./BuyButton";

function FirstPage(props) {
  return (
    <div>
      <img src={props.img} />
      <p className="p">{props.description}</p>
      <Button />
    </div>
  );
}

export default FirstPage;
