import React, { useState, useEffect } from "react";
import { CheckoutDetails } from "./CheckoutDetails";
import { MyCart } from "./MyCart";
import { PaymentDetails } from "./PaymentDetails";
import { ShippingDetails } from "./ShippingDetails";
import { getCartData } from "../../api/action/UserAction";

export const CheckoutIndex = (props) => {
  const [viewPlace, setViewPlace] = useState(1);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
      getCartData().then(res => {
          if (res.data.cart) {
              setCartData(res.data.cart)
          }
      })
  }, [])

  const handleDisplay = (place, params) => {
      setViewPlace(place);
      handleView(place, params);
  }

  const handleView = (data, params) => {
    //return <CheckoutDetails displayNumber={handleDisplay}/>;
    if (data == 1) {
        return <CheckoutDetails displayNumber={handleDisplay} />;
    } else if (data == 2) {
        return <ShippingDetails displayNumber={handleDisplay} otherParams={params}/>;
    } else {
        return <PaymentDetails />;
    }
  };

  return (
    <main id="main">
      <section class="login" style={{ padding: "0px 0 60px 0" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2">
              <div class="layout-container full-width pad-l-t">
                <div id="msform">
                  {/* progressbar */}
                  <ul id="progressbar">
                    <li class="active" id="account"></li>
                    <li id="shipping" class=""></li>
                    <li id="payment"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2"></div>
          </div>
          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              style={{ paddingTop: "100px" }}>
              {viewPlace == 1 && <CheckoutDetails displayNumber={handleDisplay}/>}

              {viewPlace == 2 && <ShippingDetails displayNumber={handleDisplay}/>}

              {viewPlace == 3 && <PaymentDetails displayNumber={handleDisplay}/>}
              {/* {handleView(1)} */}
            </div>

            <MyCart data={cartData}/>
          </div>
        </div>
      </section>
    </main>
  );
};
