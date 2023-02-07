import React from "react";
import Card from "react-bootstrap/Card";
import { Image } from "antd";
import CustomButton from "./CustomButton";

const CartItem = (props) => {
  const { id, image, quantity, name } = props.item;
  const { onDecrement, onIncrement } = props;

  const incrementButton = () => {
    return (
      <CustomButton
        variant={"light"}
        text={"+"}
        onClick={() => onIncrement(id)}
      />
    );
  };

  const decrementButton = () => {
    return (
      <CustomButton
        variant={"light"}
        text={"-"}
        onClick={() => onDecrement(id)}
      />
    );
  };

  const renderItem = () => {
    return (
      <div className="cart-item">
        <Image width={50} src={image} />
        <p>{name}</p>
        {decrementButton()}
        <p>{quantity}</p>
        {incrementButton()}
      </div>
    );
  };

  return <Card style={{ width: "100%" }}>{renderItem()}</Card>;
};

export default CartItem;
