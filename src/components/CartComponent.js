import { memo, useMemo, useState } from "react";
import CartList from "./CartList";
import Card from "react-bootstrap/Card";
import Checkout from "./Checkout";

const CartComponent = memo(() => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      quantity: 0,
      price: 10,
    },
    {
      id: 2,
      name: "Product 1",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      quantity: 0,
      price: 20,
    },
    {
      id: 3,
      name: "Product 1",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      quantity: 0,
      price: 30,
    },
  ]);

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
