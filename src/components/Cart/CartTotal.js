import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const CartTotal = (props) => {
  const { data, locationParams } = props;
  const history = useHistory();
  const handleCheckout = () => {
    if (data) {
      history.push({
        pathname: "/checkout",
        state: {category: 'auth', product: data, view: 2}
      })
    }
  };

  return (
    <div className="col-lg-6 order-1 order-lg-2">
      <div className="layout-container value-color bold full-width pad-m-t pad-m-l">
        <h3 className="bold">Cart Total</h3>
      </div>

      <div className="layout-container full-width pad-l-t pad-m-l">
        <div className="layout-col h-left">Subtotal</div>
        <div className="layout-col h-right">${data.amount}</div>
      </div>

      <div className="layout-container full-width pad-l-t pad-m-l">
        <div className="layout-col h-left">Tax</div>
        <div className="layout-col h-right">$0</div>
      </div>

      <div className="layout-container full-width pad-l-t pad-m-l">
        <div className="layout-col h-left">Shipping</div>
        <div className="layout-col h-right">$0</div>
      </div>

      <div className="layout-container full-width pad-l-t pad-m-l">
        <div className="layout-col h-left bold">Total</div>
        <div className="layout-col h-right bold">${data.amount}</div>
      </div>

      <div className="layout-container full-width pad-l-t font-medium pad-m-l">
        <div className="layout-col full-width pad-l-t">
            <button className="btn-default" onClick={handleCheckout}>
              Checkout
            </button>
        </div>
      </div>
    </div>
  );
};
