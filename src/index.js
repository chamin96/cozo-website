import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/index";
import reduxThunk from "redux-thunk";
import App from "./App";
import HomePage from "./pages/HomePage";
import Authentication from "./pages/Authentication";
import ProductDetail from "./pages/ProductDetail";
import reportWebVitals from "./reportWebVitals";
import JoinAsVendor from "./pages/JoinAsVendor";
import CheckoutFinal from "./pages/CheckoutFinal";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import "./index.css";
import "./App.css";
import JoinAsProfessional from "./pages/JoinAsProfessional";

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router>
        <Switch>
          <React.Fragment>
            <Route path="/" exact component={HomePage} />
            <Route path="/sign-in" component={Authentication} />
            <Route
              exact
              path="/product-detail"
              component={ProductDetail}
            />
            <Route path="/join-as-vendor" component={JoinAsVendor} />
            <Route path="/join-as-professional" component={JoinAsProfessional} />
            <Route path="/checkout-final" component={CheckoutFinal} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
            <Route path="/wish-list" component={WishList} />
          </React.Fragment>
        </Switch>
      </Router>
    </App>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
