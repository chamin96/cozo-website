import React, { Fragment, useEffect, useState } from "react";
import { getCartData } from "../../api/action/UserAction";
import { CartDetails } from "./CartDetails";
import { CartTotal } from "./CartTotal";

export const CartIndex = (props) => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        getCartData().then(res => {
            if (res.data.cart) {
                setCartData(res.data.cart)
            }
        })
    }, [])

  return (
    <Fragment>
      <section id="hero">
        <div className="container position-relative">
          <nav className="nav-menu nav-menu-2 d-lg-block">
            <ul>
              <li className="drop-down">
                <img src="assets/icons/shop by category.svg" />
                <a href="">Shop by category</a>
                <ul>
                  <li>
                    <a href="#">En</a>
                  </li>
                  <li>
                    <a href="#">Ar</a>
                  </li>
                </ul>
              </li>
              <li className="hide-li">
                <img src="assets/icons/connect-to-professionals.svg" />
                <a href="professionals.html">Connect to a professional</a>
              </li>
              <li className="responsive-icon">
                <a href="professionals.html">
                  <i className="icon icon-connect-professionals"></i>
                </a>
              </li>
              <li className="mr-auto"></li>
              <li className="nav-menu-2-item-1">
                <a href="join-as-vendors.html">Join as a vendor</a>
              </li>
              <li className="responsive-icon">
                <a href="join-as-vendors.html">
                  <i className="icon icon-vendor"></i>
                </a>
              </li>
              <li className="nav-menu-2-item-2">
                <a href="join-as-professionals.html">Join as a professional</a>
              </li>
              <li className="responsive-icon">
                <a href="join-as-vendors.html">
                  <i className="icon icon-professional"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <main id="main">
        <section className="login">
          <div className="container">
            <div className="row">
              <CartDetails data={cartData && cartData}/>
              <CartTotal data={cartData}/>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
