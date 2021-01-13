import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams, useLocation } from "react-router-dom";
import { getCartData } from "../../api/action/UserAction";
import { SubHeader } from "../SubHeader";
import { CartDetails } from "./CartDetails";
import { CartTotal } from "./CartTotal";

export const CartIndex = (props) => {
  const location = useLocation();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    getCartData().then((res) => {
      if (res.data.cart) {
        setCartData(res.data.cart);
      }
    });
  }, []);

  return (
    <Fragment>
      <SubHeader />
      <main id="main">
        <section className="login">
          <div className="container">
            <div className="row">
              <CartDetails data={cartData && cartData} />
              <CartTotal data={cartData} locationParams={location.state} />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
