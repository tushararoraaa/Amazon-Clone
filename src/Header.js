import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG28.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_search_content" />
        <SearchIcon className="header_search_icon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_option_lineone">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_option_linetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_option_lineone">Returns</span>
            <span className="header_option_linetwo">&Orders</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_option_lineone">Your</span>
          <span className="header_option_linetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingCartSharpIcon />
            <span className="header_basket_count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
