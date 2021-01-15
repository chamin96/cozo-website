import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams, useLocation } from "react-router-dom";
import { addToCart } from "../../api/action/ProductAction";
import { ExploreFeatures } from "./ExploreFeatures";
import { useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const SelectedItem = (props) => {
  const { productDetails, locationParams } = props;
  let location = useLocation();
  const history = useHistory();
  const auth = useSelector((state) => state.user.authenticated);
  const [stockAmount, setStockAmount] = useState(1);

  const handleAddToCart = () => {
    let obj = {
      id: location.state,
      color: "red",
      amount: stockAmount,
    };

    if (auth) {
      addToCart(obj).then((res) => {
        if (res) {
          history.push({
            pathname: "/cart",
            state: { category: "auth" },
          });
        }
      });
    } else {
      history.push({
        pathname: "/checkout",
        state: {
          product: productDetails,
          category: "unAuth",
          qty: stockAmount,
        },
      });
    }
  };

  const handleCount = (option) => {
    if (option == "a") {
      setStockAmount(stockAmount + 1);
    } else {
      if (stockAmount > 0) {
        setStockAmount(stockAmount - 1);
      }
    }
  };

  return (
    <section id="selectedItem" className="home">
      <div className="container">
        <div className="row pad-l-b">
          <div className="layout-container full-width pad-m-b pad-m-l">
            <a className="pad-s-l">
              Home Page
              <i className="fa fa-angle-right pad-s-l"></i>
            </a>
            <a className="pad-s-l">
              Categories
              <i className="fa fa-angle-right pad-s-l"></i>
            </a>
            <a className="pad-s-l">
              Beds
              <i className="fa fa-angle-right pad-s-l"></i>
            </a>
            <a className="pad-s-l">
              GDF Studio Stewart..
              <i className="fa fa-angle-right pad-s-l"></i>
            </a>
          </div>
          <div className="col-lg-5">
            <div className="item-des">
              <OwlCarousel className="owl-theme" loop margin={10} items={1}>
                {productDetails?.product?.images.map((element) => {
                  return (
                    <div className="item">
                      <img src={element} />
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="layout-container bold font-x-large pad-m-b">
              {productDetails?.product?.name}
            </div>
            <div className="layout-container font-small caption-color">
              By {productDetails?.product?.vendor?.name_of_business}
            </div>
            <div className="layout-container full-width">
              <div className="layout-col h-left">
                <span>
                  <i className="icon icon-star"></i>
                </span>
                <span className="font-small caption-color">{`(${productDetails.total_rating})`}</span>
              </div>
              <div className="layout-col h-left">
                <span className="value color bold font-large">
                  ${productDetails?.product?.amount}
                </span>
              </div>
            </div>
            <div className="layout-container full-width pad-l-t">
              <div className="color-options color-1"></div>
              <div className="color-options color-2 mgn-m-l"></div>
              <div className="color-options color-3 mgn-m-l"></div>
              <div className="color-options color-4 mgn-m-l"></div>
            </div>
            <div className="layout-container full-width pad-l-tb">
              <div className="layout-col">
                <div className="layout-col quantity">
                  <i
                    className="fa fa-minus"
                    onClick={() => handleCount("m")}></i>
                </div>
                <div className="layout-col pad-m-lr">{stockAmount}</div>
                <div className="layout-col quantity">
                  <i
                    className="fa fa-plus"
                    onClick={() => handleCount("a")}></i>
                </div>
              </div>
              <div className="layout-col">
                <button className="btn-default" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
              <div className="layout-col quantity">
                <i className="fa fa-heart-o"></i>
              </div>
            </div>
          </div>
        </div>

        <ExploreFeatures />
        <div className="category-separator"></div>
      </div>
    </section>
  );
};

SelectedItem.defaultProps = {};
