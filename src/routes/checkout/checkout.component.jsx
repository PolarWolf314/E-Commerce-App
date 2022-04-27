import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h1>This is the checkout page</h1>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
