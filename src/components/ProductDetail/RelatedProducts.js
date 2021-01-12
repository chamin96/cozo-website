import React from "react";

export const RelatedProducts = (props) => {
  return (
    <section id="category" className="category" style={{paddingBottom: "30px"}}>
      <div className="container">
        <div className="section-title layout-container full-width">
          <div className="category-header layout-col">Related Products</div>
          <div className="layout-col mr-auto" style={{width: "55%"}}></div>
          <div className="layout-col see-all-text">See All</div>
        </div>
      </div>
    </section>
  );
};
