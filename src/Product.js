import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, rating, price, imagee }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is basket");

  const addToBasket = () => {
    //dispatch of item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        rating: rating,
        price: price,
        imagee: imagee,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img className="product_img" src={imagee} alt="" srcset="" />
      <button onClick={addToBasket} className="product_btn">
        Add To Basket
      </button>
    </div>
  );
}

export default Product;
