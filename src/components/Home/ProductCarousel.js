import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../api/action/ProductAction";

export const ProductCarousel = (props) => {
  const { filterOptions, params } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  useEffect(() => {
    if (filterOptions != null) {
      let obj = {};

      if (filterOptions.category) {
        obj.category = filterOptions.category;
      }

      if (filterOptions.vendor) {
        obj.vendor = filterOptions.vendor;
      }

      if (filterOptions.color) {
        obj.color = filterOptions.color;
      }

      if (filterOptions.price_from) {
        obj.price_from = filterOptions.price_from;
        obj.price_to = filterOptions.price_to;
      }
      getAllProducts(obj).then((res) => {
        setProducts(res.data.products);
      });
    }
  }, [filterOptions]);

  const renderProducts = (data) => {
    if (data != undefined) {
      return data.map((item, key) => {
        return (
          <div className="bourse-slider__item slick-slide">
            <div className="bs-item-inner pos-rel">
              <Link
                to={{
                  pathname: "/product-detail",
                  state: item._id,
                }}>
                <div className="shop-items"></div>
                <i className="favorite-item fa fa-heart-o active"></i>
                <i className="icon icon-sales sales-item"></i>
                <div className="figure">
                  <p>{item.name}</p>
                  <div className="item-caption-2">
                    By {item.vendor.name_of_business}
                  </div>
                  <div className="layout-container full-width pad-m-t">
                    <div className="layout-col caption-color font-small h-left">
                      <i className="icon icon-star v-middle"></i>
                      <span className="v-middle">(4.5)</span>
                    </div>
                    <div className="layout-col value-color font-medium bold h-right">
                      <span className="v-middle">${item.amount}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <Fragment>
      {products != undefined ? renderProducts(products) : <Fragment />}
    </Fragment>
  );
};
