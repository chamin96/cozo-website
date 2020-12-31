import React from "react";
import { Link } from "react-router-dom";
import { SubHeader } from "./SubHeader";
import { Categories } from "../components/Home/Categories";
import { ProductCarousel } from "./Home/ProductCarousel";

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />

        <main id="main">
          <section id="" className="home">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 order-1 order-lg-2 pos-rel">
                  <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content home-des">
                    <h3>We Offer the Best Products for your Home</h3>
                    <a href="" className="shop-now-btn">
                      Shop Now
                    </a>
                  </div>
                  <img src="assets/img/main.png" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </section>

          <Categories />

          <div
            id="filterOptions"
            className="container aos-init aos-animate pad-l-b">
            <div className="row">
              <div className="col-lg-2 col-md-6 align-items-stretch h-middle">
                <div className="bold pad-s-b">Category</div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown">
                    Bedroom
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 align-items-stretch h-middle">
                <div className="bold pad-s-b">Shop</div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown">
                    Shop
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 align-items-stretch h-middle">
                <div className="bold pad-s-b">Color</div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown">
                    Color
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 align-items-stretch h-middle">
                <div className="bold pad-s-b">Price Range</div>
                <input
                  id="ex2"
                  type="text"
                  className="span2"
                  value=""
                  data-slider-min="10"
                  data-slider-max="1000"
                  data-slider-step="5"
                  data-slider-value="[250,450]"
                />
              </div>
              <div className="col-lg-2 col-md-6 align-items-stretch h-middle">
                <div className="bold pad-s-b">Filter by AR</div>
                <div className="icon icon-AR"></div>
              </div>
            </div>
          </div>

          <section id="" className="carousel-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-items-stretch video-box">
                  <div className="bourse-slider arrows--lg slick-slider pos-rel">
                  <ProductCarousel />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="demo" className="demo-vid">
            <div className="container demo-container">
              <div className="row">
                <div className="col-lg-12 align-items-stretch video-box">
                  <h3>Click here for an instructional video on AR</h3>
                  <a
                    href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                    className="venobox play-btn mb-4"
                    data-vbtype="video"
                    data-autoplay="true"></a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default HomeComponent;
