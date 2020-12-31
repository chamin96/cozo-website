import React, { Fragment, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getProductById } from "../../api/action/ProductAction";
import { SubHeader } from "../SubHeader";
import { RelatedProducts } from "./RelatedProducts";
import { SelectedItem } from "./SelectedItem";

export const ProductDetails = (props) => {
  const [productData, setProductData] = useState({});
    let params = useParams();
    let location = useLocation();

    useEffect(() => {
      getProductById(location.state).then((res) => {
        if (res.data) {
          setProductData(res.data);
        }
        console.log("product", res.data);
      });
  }, []);

console.log("location", location);
  return (
    <Fragment>
      <SubHeader />
      <main id="main">
        <section className="login">
          <div className="container">
            <SelectedItem locationParams={location} product={productData && productData}/>
            <RelatedProducts />
          </div>
        </section>
      </main>
    </Fragment>
  );
};
