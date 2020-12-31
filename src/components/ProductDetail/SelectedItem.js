import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { getProductById } from "../../api/action/ProductAction";
import { ExploreFeatures } from "./ExploreFeatures";

export const SelectedItem = (props) => {
  const { product, locationParams } = props;
  const [stockAmount, setStockAmount] = useState(1);
  // const [product, setProduct] = useState([]);

  const addToCart = () => {
    let obj = {
        "id": locationParams.state,
        "color": "red",
        "amount": 2
    }

  //   axios.post(`${process.env.REACT_APP_API_URL}/cart`, data, {
  //     headers: {
  //         Authorization: localStorage.access_token
  //     }
  // })

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
  console.log("props", product);
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
          <div className="col-lg-2">
            <div className="thumbnail">
              <img src="assets/img/bed_1.png" className="active" />
            </div>
            <div className="thumbnail pad-l-tb">
              <img src="assets/img/bed_1.png" />
            </div>
            <div className="thumbnail pad-m-b">
              <img src="assets/img/bed_1.png" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="item-des">
              <img src="assets/img/bed_1.png" />
              <i className="icon icon-AR pos-abs AR-item"></i>
              <i className="icon icon-view-img pos-abs item-search"></i>
            </div>
          </div>

            <div className="col-lg-5">
              <div className="layout-container bold font-x-large pad-m-b">
              Canby Queen Futon Frame, Warm Cherry
              </div>
              <div className="layout-container font-small caption-color">
                By Chamitha
              </div>
              <div className="layout-container full-width">
                <div className="layout-col h-left">
                  <span>
                    <i className="icon icon-star"></i>
                  </span>
                  <span className="font-small caption-color">(35)</span>
                </div>
                <div className="layout-col h-left">
                  <span className="value color bold font-large">$139</span>
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
                  <button className="btn-default" onClick={addToCart}>
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
