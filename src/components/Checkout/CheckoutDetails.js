import React, { Fragment, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../redux/Actions/Auth";
import { ACCESS_TOKEN } from "../../redux/Actions/ActionTypes";
import { logInCustomer } from "../../api/action/UserAction"

export const CheckoutDetails = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.authenticated);
  const { otherParams } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const emailRegex = RegExp(
    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
  );

  const continueCheckout = () => {
    if (!email || !password) {
      setError(true);
    } else {
      const obj = {
        email,
        password,
      };
      const errors = validateForm(obj);
      if (!Object.keys(errors).length) {
        logInCustomer(obj).then((res) => {
          if (res.data.token) {
            setLoading(false);
            dispatch(authenticate(true));
            localStorage.setItem(ACCESS_TOKEN, `Bearer ${res.data.token}`);
            props.displayNumber(2);
          } else {
            setLoading(false);
            dispatch(authenticate(false));
          }
        });
      } else {
      }
    }
  };

  const handleGuestChekout = () => {
    let token = generateToken();
    dispatch(authenticate(true));
    localStorage.setItem(ACCESS_TOKEN, `Bearer ${token}`);
    props.displayNumber(2, otherParams);
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.email) {
      errors.email = "email Required !";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Invalid Email !";
    } else if (!data.password) {
      errors.password = "Password Required !";
    }

    return errors;
  };

  const generateToken = () => {
    const randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 20; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  };
  
  return (
    <div id="checkoutDetails" className="layout-container full-width">
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
              onChange={(e) => setEmail(e)}
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
              onChange={(e) => setPassword(e)}
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
        {!auth ? (
          <div className="layout-inline h-right pad-l-t pad-l-l">
            <button className="secondary-btn" onClick={handleGuestChekout}>
              Guest Checkout
            </button>
          </div>
        ) : (
          <Fragment />
        )}
      </div>
    </div>
  );
};
export default connect()(CheckoutDetails);
