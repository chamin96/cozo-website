import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const CheckoutDetails = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const continueCheckout = () => {
        props.displayNumber(2);
    }

  return (
    <div id="checkoutDetails" class="layout-container full-width">
      <div className="layout-container value-color bold full-width pad-m-t">
        <h3 className="bold">Checkout</h3>
      </div>
      <div className="layout-container full-width font-medium caption-color pad-m-b">
        Checkout details
      </div>

      <div className="layout-container full-width pad-l-t">
        <div className="value-color pad-m-t font-medium pad-s-b">Email</div>
        <div>
          <div className="mr-auto pos-rel">
            <input
              type="text"
              name="email"
              className="search-box"
              placeholder="Enter your registered email"
              onChange={e => setEmail(e)}
            />
          </div>
        </div>
      </div>

      <div className="layout-container full-width pad-l-tb">
        <div className="value-color font-medium pad-s-b">Password</div>
        <div>
          <div className="mr-auto pos-rel">
            <input
              type="password"
              name="email"
              className="search-box"
              placeholder="Enter password"
              onChange={e => setPassword(e)}
            />
          </div>
        </div>
      </div>

      <div className="layout-container full-width pad-m-b font-medium">
        <div className="layout-col h-left">
          <div className="pretty p-default p-round p-thick">
            <input type="checkbox" />
            <div className="state">
              <label>Remember</label>
            </div>
          </div>
        </div>
      </div>

      <div className="layout-container full-width pad-l-t font-medium">
        <div className="layout-inline h-left pad-l-t">
          <button className="btn-default" onClick={continueCheckout}>
            Continue
          </button>
        </div>

        <div className="layout-inline h-right pad-l-t pad-l-l">
          <Link to="/cart">
            <button className="secondary-btn">Guest Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
