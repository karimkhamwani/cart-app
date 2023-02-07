import { memo } from "react";
import CartItem from "./CartItem";

const CartList = memo((props) => {
  const { list, onIncrement, onDecrement } = props;

  const renderList = () => {
    return list.map((l) => (
      <CartItem
        key={l.id}
        item={l}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    ));
  };

  return <div className="product-list">{renderList()}</div>;
});

CartList.propTypes = {};

CartList.defaultProps = {};

export default CartList;
