import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../api/action/ProductAction";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const ProductCarousel = (props) => {
  const { filterOptions, params, searchingCategory } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let obj = {
      category: "5fe96833ac35fc0017b1f209",
    };

    getAllProducts(obj).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  useEffect(() => {
    if (searchingCategory) {
      let obj = {};
      let searchId = handleShopByCategory(searchingCategory);
      obj = {
        category: searchId,
      };

      getAllProducts(obj).then((res) => {
        setProducts(res.data.products);
      });
    }
  }, [searchingCategory]);

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

  const handleShopByCategory = (data) => {
    let searchId = "";
    if (data == "Bedroom") {
      searchId = "5fe96833ac35fc0017b1f209";
    } else if (data == "Baths") {
      searchId = "5fe9680cac35fc0017b1f208";
    } else if (data == "Kitchen") {
      searchId = "5fe9684dac35fc0017b1f20a";
    } else if (data == "Living") {
      searchId = "5fe96867ac35fc0017b1f20b";
    }

    return searchId;
  };

  const renderProducts = (data) => {
    if (data != undefined) {
      return data.map((item, key) => {
        return (
          <div className="item" key={key}>
            <Link
              to={{
                pathname: "/product-detail",
                state: item._id,
              }}>
              <div className="shop-items">
                <img src={item.images[0]} className="shop-items" />
              </div>
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
        );
      });
    }
  };
  return (
    <Fragment>
      {products != undefined ? (
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          item={3}
          navClass="owl-prev owl-next">
          {renderProducts(products)}
        </OwlCarousel>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};
