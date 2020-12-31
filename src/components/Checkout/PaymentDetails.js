import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { postCreditCard } from "../../api/action/ProductAction";

export const PaymentDetails = (props) => {
  const { params } = props;
  const history = useHistory();
  const [creditCard, setCreditCard] = useState("");
  const [cvv, setCVV] = useState("");
  const [expiry, setExpiry] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handlePayment = () => {
    let obj = {
      card: {
        full_name: params,
        CVV: cvv,
        date: expiry,
        number: creditCard,
      },
    };
    postCreditCard(obj).then((res) => {
      if (res.data.message) {
        history.push({
          pathname: "/checkout-final",
        });
      }
    });
  };

  return (
    <div id="payingDetails" className="layout-container full-width">
      <div className="layout-container value-color bold full-width pad-m-t">
        <h3 className="bold">Payment</h3>
      </div>
      <div className="layout-container full-width font-medium caption-color pad-m-b">
        Payment details
      </div>

      <div className="layout-container full-width pad-m-b font-medium pad-l-t">
        <div className="layout-col h-left">
          <div className="pretty p-default p-round p-thick">
            <input type="checkbox" />
            <div className="state">
              <label>Credit Card</label>
            </div>
          </div>
        </div>

        <div className="layout-container full-width pad-m-b font-medium">
          <div className="layout-col h-left">
            <div className="pretty p-default p-round p-thick">
              <input type="checkbox" />
              <div className="state">
                <label>Paypal</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="layout-container full-width">
        <div className="value-color pad-m-t font-medium pad-s-b">
          Card Number
        </div>
        <div>
          <div className="mr-auto pos-rel">
            <input
              type="text"
              name="email"
              className="search-box"
              placeholder="XXXX XXXX XXXX XXXX"
              onChange={(e) => setCreditCard(e)}
            />
          </div>
        </div>
      </div>

      <div className="layout-container full-width pad-l-tb">
        <div className="layout-col">
          <div className="value-color font-medium pad-s-b">Expiry Date</div>
          <div>
            <div className="mr-auto pos-rel">
              <input
                type="text"
                name="email"
                className="search-box search-half-width"
                placeholder="Enter number"
                onChange={(e) => setExpiry(e)}
              />
            </div>
          </div>
        </div>
        <div className="layout-col pad-m-l">
          <div className="value-color font-medium pad-s-b">CVV</div>
          <div>
            <div className="mr-auto pos-rel">
              <input
                type="text"
                name="email"
                className="search-box search-half-width"
                placeholder="Enter your street name"
                onChange={(e) => setCVV(e)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="layout-container full-width pad-l-tb">
        <div className="layout-col">
          <div className="value-color font-medium pad-s-b">Country</div>
          <div>
            <div className="mr-auto pos-rel">
              <input
                type="text"
                name="email"
                className="search-box search-half-width"
                placeholder="Enter country"
                onChange={(e) => setCountry(e)}
              />
            </div>
          </div>
        </div>
        <div className="layout-col pad-m-l">
          <div className="value-color font-medium pad-s-b">Zip Code</div>
          <div>
            <div className="mr-auto pos-rel">
              <input
                type="text"
                name="email"
                className="search-box search-half-width"
                placeholder="Enter zip code"
                onChange={(e) => setZipCode(e)}
              />
            </div>
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
            <button className="btn-default" onChange={handlePayment}>
              Place Order
            </button>
        </div>
      </div>
    </div>
  );
};
