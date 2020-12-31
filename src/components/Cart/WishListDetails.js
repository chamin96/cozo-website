import React from "react";
import { Link } from "react-router-dom";

export const WishListDetails = (props) => {
  const { data } = props;

  const renderWishList = (itemArr) => {
    const items = itemArr.products;

    if (items != undefined) {
      return items.map((item, key) => {
        return (
          <div className="layout-container full-width">
            <div className="layout-container full-width">
              <div className="layout-col cart-thumbnail v-middle">
                <img src="assets/img/bed_1.png" />
              </div>
              <div className="layout-col v-middle pad-m-lr">
                <div className="layout-container value-color cart-item-info font-medium">
                  {item.product.name}
                </div>
                <div className="layout-container caption-color font-medium">
                  {item.product.category.name}
                </div>
                <div className="layout-container full-width">
                  <div className="layout-col bold">${item.product.amount}</div>
                  <div className="layout-col font-medium">Red</div>
                </div>
              </div>
              <div className="layout-col v-middle font-medium">
                <div className="cart-quantity layout-col">
                  <i className="fa fa-plus"></i>
                </div>
                <div className="">{item.amount}</div>
                <div className="cart-quantity layout-col">
                  <i className="fa fa-minus"></i>
                </div>
              </div>
            </div>
            <div className="category-separator"></div>
          </div>
        );
      });
    }
  };

  return (
    <div
      className="col-lg-6 order-1 order-lg-2"
      style={{ paddingTop: "100px" }}>
      {/* <div className="layout-container value-color bold full-width pad-m-t pad-m-b">
        <h3 className="bold">My Cart</h3>
      </div> */}

      {renderWishList(data)}

      <div className="layout-container full-width pad-l-t">
        <div className="layout-col h-left bold">Total</div>
        <div className="layout-col h-right bold">${data.amount}</div>
      </div>

      <div className="layout-container full-width pad-l-t font-medium">
        <div className="layout-col full-width pad-l-t">
          <Link to="/checkout">
            <button className="secondary-btn">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
