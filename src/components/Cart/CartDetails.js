import React from "react";

export const CartDetails = (props) => {
  const { data } = props;

  const renderCart = (itemArr) => {
    const items = itemArr.products;

    if (items != undefined) {
        return items.map((item, key) => {
            return (
              <div className="layout-container full-width" key={key}>
                <div className="layout-container full-width">
                  <div className="layout-col cart-thumbnail v-middle">
                    <img src="assets/img/bed_1.png" />
                  </div>
                  <div className="layout-col v-middle pad-m-lr">
                    <div className="layout-container value-color cart-item-info font-medium">
                      {item.product.product.name}
                    </div>
                    <div className="layout-container caption-color font-medium">
                      {item.product.product.category.name}
                    </div>
                    <div className="layout-container full-width">
                      <div className="layout-col bold">
                        ${item.product.product.amount}
                      </div>
                      <div className="layout-col font-medium">
                        {item.product.color}
                      </div>
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
    <div className="col-lg-6 order-1 order-lg-2">
      <div className="layout-container value-color bold full-width pad-m-t">
        <h3 className="bold">Shopping Cart</h3>
      </div>
      <div className="layout-container full-width font-medium caption-color pad-m-b">
        Cart details
      </div>
      {renderCart(data)}
    </div>
  );
};
