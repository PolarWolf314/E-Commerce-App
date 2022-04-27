import { useState } from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const [itemQuantity, setItemQuantity] = useState({ quantity });

  const removeItem = () => {
    const newItemQuantity = itemQuantity - 1;
    setItemQuantity(newItemQuantity);
  };
  const addItem = () => {
    const newItemQuantity = itemQuantity + 1;
    setItemQuantity(newItemQuantity);
  };

  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <span> {name} </span>
      <button onClick={removeItem}>{`<`}</button>
      <span> {itemQuantity} </span>
      <button onclick={addItem}>{`>`}</button>
      <span> ${price} </span>
    </div>
  );
};

export default CheckoutItem;
