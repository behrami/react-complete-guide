import "./Card.css";

const Card = (props) => {
  const calsses = "card " + props.className;
  return <div className={calsses}>{props.children}</div>;
};

export default Card;
