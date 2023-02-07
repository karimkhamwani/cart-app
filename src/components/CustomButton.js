import { memo } from "react";
import Button from "react-bootstrap/Button";
import Proptypes from "prop-types";

const CustomButton = memo((props) => {
  const { variant, text, onClick } = props;

  const styles = {};

  if (variant === "light") {
    styles["height"] = 40;
  }

  return (
    <Button style={{ ...styles }} variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
});

CustomButton.Proptypes = {
  variant: Proptypes.string,
  text: Proptypes.string,
};

CustomButton.defaultProps = {
  variant: "light",
  text: "text",
};

export default CustomButton;
