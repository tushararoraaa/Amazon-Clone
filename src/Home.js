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
            title="Samsung M31 6 GB RAM 128 GB Storage "
            rating={5}
            price={1}
            imagee="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            id="2"
            title="Apple Iphone 11 64GB Red Edition"
            rating={4}
            price={45999}
            imagee="https://m.media-amazon.com/images/I/71hh7cpWadL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_rows">
          <Product
            id="3"
            title="One Plus Cover"
            rating={4}
            price={999}
            imagee="https://m.media-amazon.com/images/I/21IdQaR364L.jpg"
          />

          <Product
            id="4"
            title="TCL 42 inches LED TV"
            rating={4}
            price={23999}
            imagee="https://m.media-amazon.com/images/I/51edD3-kGjS._AC_SR320,320_.jpg"
          />

          <Product
            id="5"
            title="Samsung 42 inches LED TV 4K"
            rating={5}
            price={35999}
            imagee="https://m.media-amazon.com/images/I/51F8GZvSTqS._AC_SR160,160_.jpg"
          />
        </div>
        <div className="home_rows">
          <Product
            id="6"
            title="Marshall Stereo Speaker"
            rating={5}
            price={31999}
            imagee="https://m.media-amazon.com/images/I/51qSnKMJ6RL._AC_SR320,320_.jpg"
          />
          <Product
            id="7"
            title="Boat Avante Sound Bar"
            rating={5}
            price={6499}
            imagee="https://images-eu.ssl-images-amazon.com/images/I/61Qa+zvFzHL._AC_UL320_SR320,320_.jpg"
          />
          <Product
            id="8"
            title="Canon EOS Camera"
            rating={4}
            price={34990}
            imagee="https://images-eu.ssl-images-amazon.com/images/I/914hFeTU2-L._AC_UL320_SR320,320_.jpg"
          />
          <Product
            id="9"
            title="Tripod Stand"
            rating={3}
            price={699}
            imagee="https://m.media-amazon.com/images/I/41LCkX-av4L._AC_SR320,320_.jpg"
          />
          <Product
            id="10"
            title="HP Laserjet Printer Pro Series"
            rating={4}
            price={16999}
            imagee="https://images-eu.ssl-images-amazon.com/images/I/61BBkgbDQqL._AC_UL320_SR320,320_.jpg"
          />
        </div>
        <div className="home_rows">
          <Product
            id="11"
            title="Acer Nitro Screen Split Monitor"
            rating={5}
            price={22499}
            imagee="https://m.media-amazon.com/images/I/81Cq+ySZwvL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="12"
            title="Allen Solly Men Casual Shirt"
            rating={4}
            price={1192}
            imagee="https://m.media-amazon.com/images/I/31QUNwogc0L._AC_SR320,400_.jpg"
          />
          <Product
            id="13"
            title="Levi's Straight Fit Men Casual Wear Jeans"
            rating={5}
            price={1999}
            imagee="https://m.media-amazon.com/images/I/51Ej6FQ2cZL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default home;
