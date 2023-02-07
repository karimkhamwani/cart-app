import React, { memo } from "react";
import CustomButton from "./CustomButton";

const Checkout = memo((props) => {
  const { amount } = props;
  return (
    <div className="checkout-container">
      <h1 className="amount">${amount}</h1>
      <CustomButton variant="primary" text={"Checkout"} />
    </div>
  );
});

export default Checkout;
