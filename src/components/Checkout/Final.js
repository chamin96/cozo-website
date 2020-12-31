import React from 'react';
import { Link } from 'react-router-dom';

export const Final = props => {
    return (
        <main id="main">
        <section className="login">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                style={{paddingTop: "100px"}}>
                <div className="layout-container value-color bold full-width full-height pad-m-t">
                  <div className="layout-col v-middle">
                    <div className="layout-container value-color bold full-width pad-m-t">
                      <h3 className="bold">Thanks for your Order !</h3>
                    </div>

                    <div className="layout-container full-width pad-l-t font-medium pad-m-b">
                      <div className="layout-inline h-left pad-l-t">
                        <Link to="/">
                          <button className="btn-default">Back to Shop</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2">
                <img
                  src="assets/img/thanks for your order.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}