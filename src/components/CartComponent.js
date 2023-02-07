import { memo, useMemo, useState } from "react";
import CartList from "./CartList";
import Card from "react-bootstrap/Card";
import Checkout from "./Checkout";
import { products as p } from "../util";

const CartComponent = memo(() => {
  const [products, setProducts] = useState(p);

  const amount = useMemo(
    () => products.reduce((pre, curr) => pre + curr.quantity * curr.price, 0),
    [products]
  );

  const onIncrement = (id) => {
    const index = products.findIndex((i) => i.id === id);
    const product = products[index];

    if (index !== -1) {
      products[index] = { ...product, quantity: product.quantity + 1 };
      setProducts([...products]);
    }
  };

  const onDecrement = (id) => {
    const index = products.findIndex((i) => i.id === id);
    const product = products[index];

    if (index !== -1) {
      products[index] = { ...product, quantity: product.quantity - 1 };
      setProducts([...products]);
    }
  };

  return (
    <div className="main-container">
      <div className="cart-container">
        <Card.Header>Items in your cart</Card.Header>
        <CartList
          list={products}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
      <div className="checkoutBox">
        <Checkout amount={amount} />
      </div>
    </div>
  );
});

export default CartComponent;
