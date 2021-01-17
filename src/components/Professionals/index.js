import React, { Fragment, useEffect, useState } from "react";
import { getProfessionals } from "../../api/action/UserAction";
import { Detail } from "./DetailModal";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { searchProfessional } from "../../api/action/ProfessionalAction";

export const Professionals = (props) => {
  const [visible, setVisible] = useState(false);
  const [professionalArr, setProfessionalArr] = useState([]);
  const [professionalDetail, setProfessionalDetail] = useState({});
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    getProfessionals().then((res) => {
      if (res.data.professionals) {
        setProfessionalArr(res.data.professionals);
      }
    });
  }, []);

  const handleVisible = (details) => {
    setProfessionalDetail(details);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const search = event => {
    setSearchName(event.target.value);
  }

  const handleSearch = () => {
    let obj = {
      full_name : searchName
    }

    searchProfessional(obj).then((res) => {
      if (res.data.professionals) {
        setProfessionalArr(res.data.professionals);
      }
    })
  }

  return (
    <Fragment>
      <section id="category" className="category" style={{ paddingBottom: "30px" }}>
        <div className="container">
          <div className="section-title layout-container full-width">
            <div className="category-header layout-col">Professionals</div>
            <div className="layout-col mr-auto" style={{ width: "55%" }}></div>
            <div className="layout-col see-all-text h-right">See All</div>
          </div>

          <div className="row">
            <div className="mr-auto pos-rel">
              <input
                type="text"
                name="header-search"
                className="header-search"
                placeholder="Search"
                onClick={search}
              />
              <i className="fa fa-search search-icon"></i>
              <button type="button" className="btn btn-primary" style={{ marginLeft: '5px' }} onClick={handleSearch}>Search</button>
            </div>
            <div className="layout-container full-width category-separator"></div>

            <div className="layout-container full-width">
              <div className="layout-col d-none d-lg-block">
                <nav className="nav-menu d-lg-block">
                  <ul className="layout-container" style={{display: "table"}}>
                    <li className="layout-col v-middle list-item list-item-1 active">
                      Home Design
                    </li>
                    <li className="layout-col v-middle list-item list-item-2">
                      Home Improvement Services
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="layout-col mr-auto"></div>
              <div className="layout-col h-right">
                <button
                  className="filters-btn pos-rel"
                  onclick="showFilterOptions()">
                  <i className="icon icon-filters pos-abs filter-pos"></i>
                  <span className="filter-text">Filters</span>
                </button>
              </div>
            </div>

            <div className="layout-container full-width category-separator"></div>
          </div>
        </div>
      </section>
      <section id="" className="carousel-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 align-items-stretch video-box">
              <div className="bourse-slider-2 arrows--lg slick-slider pos-rel">
                {/* <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          // item={4}
          navClass="owl-prev owl-next"> */}
                {professionalArr &&
                  professionalArr.map((item, key) => {
                    return (
                      <div
                        className="bourse-slider-2__item slick-slide"
                        key={key}>
                        <div
                          className="bs-item-inner pos-rel professional-list"
                          data-toggle="modal"
                          data-target="#professionalsInfo">
                          <div onClick={() => handleVisible(item)}>
                            <img src="assets/img/clients/client-1.jpg" alt="" />
                            <div
                              className="value-color bold"
                              style={{ cursor: "pointer" }}>
                              {item.professional.fullName}
                            </div>
                            <div className="item-caption-2">
                              By {item.professional.profession}
                            </div>
                            <div className="layout-container full-width pad-m-t">
                              <div className="layout-col caption-color font-small h-left pad-m-l">
                                <i className="icon icon-star v-middle"></i>
                                <span className="v-middle">{`(${item.total_rating})`}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                {/* </OwlCarousel> */}
              </div>
            </div>
          </div>
          {visible ? (
            <Detail
              visible={visible}
              professionalDetail={professionalDetail}
              onClose={handleClose}
            />
          ) : (
            <Fragment />
          )}
        </div>
      </section>
    </Fragment>
  );
};
