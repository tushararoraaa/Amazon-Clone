import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div className="checkout_title">
          <h3>Hello, {user?.email}</h3>
          <h2>Shopping Cart</h2>
          <h5>Deselect all items</h5>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              imagee={item.imagee}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <div className="checkout_logo">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
            alt=""
          />
        </div>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
