import React, { Fragment, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logInCustomer } from "../../api/action/UserAction";
import { authenticate } from "../../redux/Actions/Auth";
import { ACCESS_TOKEN } from "../../redux/Actions/ActionTypes";

export const SignIn = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorObj, setErrorObj] = useState({});
  const [loading, setLoading] = useState(false);
  const emailRegex = RegExp(
    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
  );

  const handleSignIn = () => {
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
            history.push({
              pathname: "/",
            });
          } else {
            setLoading(false);
            dispatch(authenticate(false));
          }
        });
      } else {
      }
    }
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

  return (
    <main id="main">
      <section id="login" className="login">
        <div className="container">
          <div id="signIn" className="row">
            <div
              className="col-lg-5 order-1 order-lg-2"
              style={{ paddingTop: "100px" }}>
              <div className="layout-container value-color bold full-width pad-m-t">
                <h3 className="bold">Welcome Back</h3>
              </div>
              <div className="layout-container full-width font-medium caption-color pad-m-b">
                Log back in to your account
              </div>

              <div className="layout-container full-width pad-l-t">
                <div className="value-color pad-m-t font-medium pad-s-b text-left">
                  email
                </div>
                <div>
                  <div className="mr-auto pos-rel">
                    <input
                      type="text"
                      name="email"
                      className="search-box"
                      placeholder="Enter your registered email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="layout-container full-width pad-l-tb">
                <div className="value-color font-medium pad-s-b text-left">
                  Password
                </div>
                <div>
                  <div className="mr-auto pos-rel">
                    <input
                      type="password"
                      name="email"
                      className="search-box"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
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
                <div className="layout-col h-right">
                  <span id="forgotPassword">Forgot Password?</span>
                </div>
              </div>

              <div className="layout-container full-width pad-l-t font-medium">
                <div className="layout-col full-width">
                  <button className="btn-default" onClick={handleSignIn}>
                    Sign in
                  </button>
                </div>
              </div>

              <div className="layout-container pad-m-t font-medium">
                <div className="layout-col caption-color">
                  Don't have an account?
                </div>
                <span id="signUpNow" className="pad-m-l">
                  Sign up
                </span>
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <img
                src="assets/img/welcome back.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default connect()(SignIn);
