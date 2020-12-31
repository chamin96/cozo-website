import React from "react";
import { Link } from 'react-router-dom';

export const CartTotal = (props) => {
  return (
    <div className="col-lg-6 order-1 order-lg-2">
      <div className="layout-container value-color bold full-width pad-m-t pad-m-l">
        <h3 className="bold">Cart Total</h3>
      </div>

      <div className="layout-container full-width pad-l-t pad-m-l">
        <div className="layout-col h-left">Subtotal</div>
        <div className="layout-col h-right">$1700</div>
      </div>

      <div className="layout-container full-width pad-l-t pad-m-l">
        <div className="layout-col h-left">Tax</div>
        <div className="layout-col h-right">$70</div>
      </div>

      <div className="layout-container full-width pad-l-t pad-m-l">
        <div className="layout-col h-left">Shipping</div>
        <div className="layout-col h-right">$700</div>
      </div>

      <div className="layout-container full-width pad-l-t pad-m-l">
        <div className="layout-col h-left bold">Total</div>
        <div className="layout-col h-right bold">$1700</div>
      </div>

      <div className="layout-container full-width pad-l-t font-medium pad-m-l">
        <div className="layout-col full-width pad-l-t">
          <Link to="/checkout">
            <button className="btn-default">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
