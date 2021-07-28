import React from "react";
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Consumables/SVD2021/Herotators_July/SBI_PC_3000x1200._CB665742386_.jpg"
          alt=""
          srcset=""
        />
        <div className="home_rows">
          <Product
            id="1"
            title="Samsung M31"
            rating={5}
            price={45999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            id="2"
            title="IPhone 11"
            rating={4}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71hh7cpWadL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_rows">
          <Product
            id="3"
            title="Samsung M31"
            rating={5}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            id="4"
            title="Samsung M31"
            rating={4}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            id="5"
            title="Samsung M31"
            rating={5}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_rows">
          <Product
            id="6"
            title="Samsung M31"
            rating={2}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="7"
            title="Samsung M31"
            rating={5}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="8"
            title="Samsung M31"
            rating={3}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="9"
            title="Samsung M31"
            rating={3}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="10"
            title="Samsung M31"
            rating={4}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_rows">
          <Product
            id="11"
            title="Samsung M31"
            rating={3}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="12"
            title="Samsung M31"
            rating={3}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="13"
            title="Samsung M31"
            rating={3}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="14"
            title="Samsung M31"
            rating={3}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="15"
            title="Samsung M31"
            rating={3}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="16"
            title="Samsung M31"
            rating={3}
            price={10999}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default home;
