import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address:-</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Ward no. 9</p>
            <p>Gajsinghpur 335024</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items:-</h3>
          </div>
          <div className="payment_items">
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
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method:-</h3>
          </div>
          <div className="payment_details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
