import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo-box">
        <Logo alt="logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="/shop/hats" className="footer__link">Hats</Link>
              </li>
              <li className="footer__item">
                <Link to="/shop/jackets" className="footer__link">Jackets</Link>
              </li>
              <li className="footer__item">
                <Link to="/shop/sneakers" className="footer__link">Sneakers</Link>
              </li>
              <li className="footer__item">
                <Link to="/shop/womens" className="footer__link">Womens</Link>
              </li>
              <li className="footer__item">
                <Link to="/shop/mens" className="footer__link">Mens</Link>
              </li>
              <li className="footer__item">
                <Link to="/contactus" className="footer__link">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
            <p className="footer__copyright">
                Built by <Link to="#" className="footer__link">Arsim Sejdiu</Link> , 
                this beautiful <Link to="/" className="footer__link">CRWN-Clothing</Link> Brand. 
                COPYRIGHT@ by <Link to="#" className="footer__link">Arsim Sejdiu</Link>.  
                You are 100% allowed to use this webpage for both personal and commercial use,
                but NOT to claim it as your own design. A credit to the original author, 
                <Link to="#" className="footer__link">Arsim Sejdiu</Link>, is of course highly appreciated!
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
