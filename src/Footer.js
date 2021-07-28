import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <hr className="back_to_top" />
      <div className="outer_block_1">
        <div className="outer_block_row">
          <span className="first_raw">Get To Know Us</span>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift A Smile</p>
        </div>
        <div className="outer_block_row">
          <p className="first_raw">Connect With Us</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="outer_block_row">
          <p className="first_raw">Make Money With Us</p>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>

        <div className="outer_block_row">
          <p className="first_raw">Let Us Help You</p>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
      <hr className="new" />
      <div className="outer_block_2">
        <div className="logo">
          <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG28.png"
            alt=""
          />
        </div>
        <div className="countries">
          <span className="line_of_countries">
            Australia Brazil Canada China France Germany Italy Japan Mexico
            Netherlands Poland Singapore Spain Turkey United Arab Emirates
            United Kingdom United States
          </span>
        </div>
      </div>
      <div className="outer_block_3">
        <div className="option">
          <span className="option_lineone">AbeBooks</span>
          <span className="option_linetwo">Books , art</span>
          <span className="option_linethree">&collectbies</span>
        </div>
        <div className="option">
          <span className="option_lineone">Amazon Web Services</span>
          <span className="option_linetwo">Scalable Cloud</span>
          <span className="option_linethree">Computing Services</span>
        </div>
        <div className="option">
          <span className="option_lineone">Audible</span>
          <span className="option_linetwo">Download</span>
          <span className="option_linethree">Audio Books</span>
        </div>
        <div className="option">
          <span className="option_lineone">DPReview</span>
          <span className="option_linetwo">Digital</span>
          <span className="option_linethree">Photography</span>
        </div>
        <div className="option">
          <span className="option_lineone">IMDb</span>
          <span className="option_linetwo">IMDb Movies, TV</span>
          <span className="option_linethree">& Celebrities</span>
        </div>
      </div>
      <div className="outer_block_4">
        <div className="option">
          <span className="option_lineone">Shopbop</span>
          <span className="option_linetwo">Designer</span>
          <span className="option_linethree">Fashion Brands</span>
        </div>
        <div className="option">
          <span className="option_lineone">Amazon Business</span>
          <span className="option_linetwo">Everything For</span>
          <span className="option_linethree">Your Business</span>
        </div>
        <div className="option">
          <span className="option_lineone">Prime Now</span>
          <span className="option_linetwo">2-Hour Delivery</span>
          <span className="option_linethree">on Everyday Items</span>
        </div>
        <div className="option">
          <span className="option_lineone"> Amazon Prime Music</span>
          <span className="option_linetwo">70 million songs, ad-free</span>
          <span className="option_linethree">
            Over 9 million podcast episodes
          </span>
        </div>
      </div>
      <div className="outer_block_5">
        <span className="last_line">
          Conditions of Use & Sale Privacy Notice Interest-Based Ads ©
          1996-2021, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
}

export default Footer;
