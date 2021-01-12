import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SubHeader } from "../SubHeader";
import { RelatedProducts } from "./RelatedProducts";
import { SelectedItem } from "./SelectedItem";

export const ProductDetails = (props) => {
  const { productDetails } = props;
    let location = useLocation();

  return (
    <Fragment>
      <SubHeader />
      <main id="main">
        <section className="login">
          <div className="container">
            <SelectedItem locationParams={location} productDetails={productDetails}/>
            <RelatedProducts />
          </div>
        </section>
      </main>
    </Fragment>
  );
};
