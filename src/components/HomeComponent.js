import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { SubHeader } from "./SubHeader";
import { Categories } from "../components/Home/Categories";
import { ProductCarousel } from "./Home/ProductCarousel";
import { Professionals } from "./Professionals";
import { getCategories } from "../api/action/ProductAction";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterObj: null,
      category: "",
      categories: [],
      subCategories: [],
    };
  }

  componentDidMount() {
    getCategories().then((res) => {
      if (res.data.categories) {
        this.move(res.data.categories, 0, 1);
      }
    });
  }

  move = (arr, old_index, new_index) => {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length;
      while (k-- + 1) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    this.setState({ categories: arr, subCategories: arr[0].sub_category });
    return arr;
  };

  handleFilters = (data) => {
    this.setState({ filterObj: data });
  };

  selectedCategory = (data) => {
    this.setState({ category: data });
  };

  render() {
    const { match, location, history } = this.props;
    return (
      <div>
        <SubHeader
          searchCategory={this.selectedCategory}
          categories={this.state.categories}
          subCategories={this.state.subCategories}
        />

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
          {location.state != "professional" ? (
            <Categories
              filters={this.handleFilters}
              searchingCategory={this.state.category}
              categories={this.state.categories}
              subCategories={this.state.subCategories}
              filterObj={this.handleFilters}
            />
          ) : (
            <Fragment />
          )}

          <section id="" className="carousel-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-items-stretch video-box">
                  <div className="bourse-slider arrows--lg slick-slider pos-rel">
                    {location.state != "professional" ? (
                      <ProductCarousel
                        filterOptions={this.state.filterObj}
                        searchingCategory={this.state.category}
                        categories={this.state.categories}
                        subCategories={this.state.subCategories}
                      />
                    ) : (
                      <Professionals />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="demo" className="demo-vid">
            <div className="container demo-container">
              <div className="row">
                <div
                  className="col-lg-12 align-items-stretch video-box"
                  style={{
                    backgroundImage: 'url("assets/img/demo_video.png")',
                  }}>
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

export default withRouter(HomeComponent);
