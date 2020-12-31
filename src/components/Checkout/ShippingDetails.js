import React, { useState } from "react";
import { postAddress } from "../../api/action/ProductAction";

export const ShippingDetails = (props) => {
  const [fullName, setFullName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const continueCheckoutShipping = () => {
    let obj = {
      address : fullName + ',' + streetName + ',' + houseNumber + ',' + city + ',' + country + ',' + zipCode
    }
    postAddress(obj).then(res => {
      if (res.data.message) {
        props.displayNumber(3, fullName);
      } 

    })
  };

  return (
    <div
      id="shippingDetails"
      className="layout-container full-width"
      >
      <div className="layout-container value-color bold full-width pad-m-t">
        <h3 className="bold">Shipping</h3>
      </div>
      <div className="layout-container full-width font-medium caption-color pad-m-b">
        Shipping details
      </div>

      <div className="layout-container full-width pad-l-t">
        <div className="value-color pad-m-t font-medium pad-s-b">Full Name</div>
        <div>
          <div action="" method="post" className="mr-auto pos-rel">
            <input
              type="text"
              name="email"
              className="search-box"
              placeholder="Enter your full name"
              onChange={(e) => setFullName(e)}
            />
          </div>
        </div>
      </div>

      <div className="layout-container full-width pad-l-tb">
        <div className="value-color font-medium pad-s-b">Street Name</div>
        <div>
          <div action="" method="post" className="mr-auto pos-rel">
            <input
              type="text"
              name="email"
              className="search-box"
              placeholder="Enter your street name"
              onChange={(e) => setStreetName(e)}
            />
          </div>
        </div>
      </div>

      <div className="layout-container full-width pad-l-tb">
        <div className="layout-col">
          <div className="value-color font-medium pad-s-b">House Number</div>
          <div>
            <div action="" method="post" className="mr-auto pos-rel">
              <input
                type="text"
                name="email"
                className="search-box search-half-width"
                placeholder="Enter number"
                onChange={(e) => setHouseNumber(e)}
              />
            </div>
          </div>
        </div>
        <div className="layout-col pad-m-l">
          <div className="value-color font-medium pad-s-b">City</div>
          <div>
            <div action="" method="post" className="mr-auto pos-rel">
              <input
                type="text"
                name="email"
                className="search-box search-half-width"
                placeholder="Enter your street name"
                onChange={(e) => setCity(e)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="layout-container full-width pad-l-tb">
        <div className="layout-col">
          <div className="value-color font-medium pad-s-b">Country</div>
          <div>
            <div action="" method="post" className="mr-auto pos-rel">
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
            <div action="" method="post" className="mr-auto pos-rel">
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
          <fieldset>
            <button className="btn-default" onClick={continueCheckoutShipping}>
              Continue
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};
