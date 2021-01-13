import React, { useState, useEffect } from "react";
import { getWishList } from "../../api/action/UserAction";
import { WishListDetails } from "./WishListDetails";

export const WishListIndex = (props) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    getWishList().then((res) => {
      if (res.data.favourites) {
        setCartData(res.data.favourites);
      }
    });
  }, []);

  const emptyPage = () => {
    return (
      <div
        className="col-lg-6 order-1 order-lg-2"
        style={{ paddingTop: "100px", paddingLeft: "10px"  }}>
        <span> Add items to your wish list</span>
      </div>
    );
  };

  return (
    <div
      className="col-lg-6 order-1 order-lg-2"
      style={{ paddingTop: "100px", paddingLeft: "97px" }}>
      <div className="layout-container value-color bold full-width pad-m-t pad-m-b">
        <h3 className="bold">Wish List</h3>
      </div>

      {cartData.length > 0 ? <WishListDetails data={cartData} /> : emptyPage()}
    </div>
  );
};
