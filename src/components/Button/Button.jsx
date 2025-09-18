import "./style.css";

const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.bg,
      }}
      className="button"
      onClick={props.onClick}
    >
      {props.title === undefined ? "Button 123" : props.title}
    </button>
  );
};

export default Button;
