import React, { useState, useEffect } from "react";
import { CheckoutDetails } from "./CheckoutDetails";
import { MyCart } from "./MyCart";
import { PaymentDetails } from "./PaymentDetails";
import { ShippingDetails } from "./ShippingDetails";
import { getCartData } from "../../api/action/UserAction";

export const CheckoutIndex = (props) => {
  const { locationParams } = props;
  const [viewPlace, setViewPlace] = useState(1);
  const [cartData, setCartData] = useState([]);
  const [finalParams, setFinalParams] = useState();
 
  useEffect(() => {
    if (locationParams.state.view) {
      setViewPlace(2)
    }
  }, [locationParams])

  const handleDisplay = (place, params) => {
    console.log("callBack", params);
      setViewPlace(place);
      handleView(place, params);
      setFinalParams(params);
  }

  const handleView = (data, params) => {
    //return <CheckoutDetails displayNumber={handleDisplay}/>;
    if (data == 1) {
        return <CheckoutDetails displayNumber={handleDisplay} otherParams={locationParams.state}/>;
    } else if (data == 2) {
        return <ShippingDetails displayNumber={handleDisplay} otherParams={params}/>;
    } else {
        return <PaymentDetails otherParams={params}/>;
    }
  };

  return (
    <main id="main">
      <section className="login" style={{ padding: "0px 0 60px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="layout-container full-width pad-l-t">
                <div id="msform">
                  {/* progressbar */}
                  <ul id="progressbar">
                    <li className="active" id="account"></li>
                    <li id="shipping" className=""></li>
                    <li id="payment"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2"></div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              style={{ paddingTop: "100px" }}>
              {viewPlace == 1 && <CheckoutDetails displayNumber={handleDisplay} otherParams={locationParams.state}/>}

              {viewPlace == 2 && <ShippingDetails displayNumber={handleDisplay} otherParams={locationParams.state}/>}

              {viewPlace == 3 && <PaymentDetails displayNumber={handleDisplay} otherParams={finalParams}/>}
              {/* {handleView(1)} */}
            </div>

            <MyCart data={cartData} locationParams={locationParams.state}/>
          </div>
        </div>
      </section>
    </main>
  );
};
