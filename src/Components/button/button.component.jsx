import "./button.styles.scss";
const BUTTON_TYPES_CLASSES = {
  continue: "continue",
  back: "back",
  submit: "submit",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${BUTTON_TYPES_CLASSES[buttonType]} button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
